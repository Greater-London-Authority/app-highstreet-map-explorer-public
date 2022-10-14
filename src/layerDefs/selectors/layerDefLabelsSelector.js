import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefLabelsSelector = selectorFamily({
  key: "layer-labels-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layer = get(layerDefsAtomFamily(layerID));
      return layer.labels;
    },
});
