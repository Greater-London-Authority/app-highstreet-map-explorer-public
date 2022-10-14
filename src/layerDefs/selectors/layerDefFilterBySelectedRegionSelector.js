import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefFilterBySelectedRegionSelector = selectorFamily({
  key: "filter-by-selected-region-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));

      return Boolean(layerDef?.filterBySelectedRegion);
    },
});
