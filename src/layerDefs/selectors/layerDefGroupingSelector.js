import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefGroupingSelector = selectorFamily({
  key: "layer-grouping",
  get:
    (layerID) =>
    ({ get }) => {
      const layer = get(layerDefsAtomFamily(layerID));
      return layer?.grouping;
    },
});
