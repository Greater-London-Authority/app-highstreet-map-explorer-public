import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerCanBeVisibleSelector = selectorFamily({
  key: "layer-can-be-visible",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));
      return Boolean(layerDef?.layerCanBeVisible);
    },
  set:
    (layerID) =>
    ({ set }, newLayerCanBeVisible) => {
      set(layerDefsAtomFamily(layerID), (oldLayer) => ({
        ...oldLayer,
        layerCanBeVisible: newLayerCanBeVisible,
      }));
    },
});
