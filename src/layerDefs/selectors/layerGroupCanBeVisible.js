import { selectorFamily } from "recoil";
import { layerCanBeVisibleSelector } from "./layerCanBeVisibleSelector";

export const layerGroupCanBeVisible = selectorFamily({
  key: "layer-group-can-be-visible",
  get:
    (layerIDs) =>
    ({ get }) => {
      const layersCanBeVisible = layerIDs.map((layerID) =>
        get(layerCanBeVisibleSelector(layerID))
      );

      return layersCanBeVisible.some((visibility) => visibility);
    },
});
