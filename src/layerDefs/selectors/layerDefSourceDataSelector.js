import { selectorFamily } from "recoil";
import { selectedRegionUrlQuerySelector } from "../../map/selectedRegionAtoms";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefSourceDataSelector = selectorFamily({
  key: "layer-source-data-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));
      const selectedRegionUrlQuery = get(selectedRegionUrlQuerySelector);
      const filterBySelectedRegion = layerDef.filterBySelectedRegion;

      if (filterBySelectedRegion && !selectedRegionUrlQuery) {
        return null;
      }

      if (layerDef.layer.type === "raster") {
        return layerDef.source.tiles[0];
      }

      return filterBySelectedRegion
        ? `${layerDef.source.data}&${selectedRegionUrlQuery}`
        : layerDef.source.data;
    },
});
