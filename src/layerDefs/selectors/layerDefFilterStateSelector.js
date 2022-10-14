import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefFilterStateSelector = selectorFamily({
  key: "layer-filters-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layer = get(layerDefsAtomFamily(layerID));
      const { filterState } = layer.filters;
      return filterState;
    },
  set:
    (layerID) =>
    ({ set }, newFilterState) => {
      set(layerDefsAtomFamily(layerID), (oldLayer) => ({
        ...oldLayer,
        filters: { ...oldLayer.filters, filterState: newFilterState },
      }));
    },
});
