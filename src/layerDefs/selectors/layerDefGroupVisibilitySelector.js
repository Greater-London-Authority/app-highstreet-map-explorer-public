import { selectorFamily } from "recoil";
import { layerDefs } from "../layerDefs";
import { layerDefsAtomFamily } from "../layerDefsAtoms";
import { setLayerVisibility } from "./setLayerVisibility";

export const layerDefGroupVisibilitySelector = selectorFamily({
  key: "layer-group-visibility",
  get:
    (group) =>
    ({ get }) => {
      if (!group) {
        return null;
      }

      const groupLayerIDs = Object.keys(layerDefs).filter(
        (layerID) => layerDefs[layerID].grouping === group
      );

      const groupLayerVisibilities = groupLayerIDs.map((layerID) => {
        const layerDef = get(layerDefsAtomFamily(layerID));
        const visibility = layerDef.layer?.layout?.visibility;
        return visibility === "none" ? false : true;
      });

      if (groupLayerVisibilities.every((visibility) => visibility)) {
        return "all";
      }
      if (groupLayerVisibilities.every((visibility) => !visibility)) {
        return "none";
      }
      return "some";
    },
  set:
    (group) =>
    ({ set }, newVisibility) => {
      const groupLayerIDs = Object.keys(layerDefs).filter(
        (layerID) => layerDefs[layerID].grouping === group
      );
      groupLayerIDs.forEach((layerID) => {
        setLayerVisibility(newVisibility, set, layerID);
      });
    },
});
