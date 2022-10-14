import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefFilterByChildrenSelector = selectorFamily({
  key: "layer-filter-by-children-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layer = get(layerDefsAtomFamily(layerID));
      return Boolean(layer?.filters?.filterByChildren);
    },
});
