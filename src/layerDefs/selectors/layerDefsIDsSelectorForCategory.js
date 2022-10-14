import { selectorFamily } from "recoil";
import { layerDefs } from "../layerDefs";

export const layerDefsIDsSelectorForCategory = selectorFamily({
  key: "layer-ids-selector",
  get:
    (category) =>
    ({ get }) => {
      // need to get those that are grouped and group them together e.g. need [id1, id2, [id3,id6], id7]
      let layerIDsForCategory = Object.keys(layerDefs).filter(
        (layerID) => layerDefs[layerID].category === category
      );

      layerIDsForCategory.forEach((currentID) => {
        if (!layerDefs[currentID]?.grouping) {
          return;
        }
        const grouping = layerDefs[currentID].grouping;
        const groupingIDs = Object.keys(layerDefs).filter(
          (layerID) => layerDefs[layerID].grouping === grouping
        );
        const layerIDsInteresction = groupingIDs.filter((id) =>
          layerIDsForCategory.includes(id)
        );

        const index = layerIDsForCategory.indexOf(currentID);

        layerIDsForCategory[index] = layerIDsInteresction;
        layerIDsForCategory = layerIDsForCategory.filter(
          (id) => !layerIDsInteresction.includes(id)
        );

        return;
      });

      return layerIDsForCategory;
    },
});
