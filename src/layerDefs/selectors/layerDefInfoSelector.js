import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefInfoSelector = selectorFamily({
  key: "layer-info-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layer = get(layerDefsAtomFamily(layerID));
      return layer.info;
    },
});
