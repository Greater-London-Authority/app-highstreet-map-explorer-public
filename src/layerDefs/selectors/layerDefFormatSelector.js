import { selectorFamily } from "recoil";
import {
  GREYED_OUT_HIGHSTREET_OPACITY,
  SELECTED_HIGHSTREET_OPACITY,
} from "../layerDefs";
import { selectedHighstreetAtom } from "../../map/selectedRegionAtoms";
import { layerDefSourceDataSelector } from "./layerDefSourceDataSelector";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefFormatSelector = selectorFamily({
  key: "layer-format-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));
      const sourceData = get(layerDefSourceDataSelector(layerID));
      // const selectedRegion = get(selectedRegionSelector);
      if (!sourceData) {
        return null;
      }

      const source =
        layerDef.layer.type === "raster"
          ? {
              ...layerDef.source,
              tiles: [sourceData],
            }
          : {
              ...layerDef.source,
              data: sourceData,
            };
      if (layerID === "highstreet") {
        const selectedHighstreet = get(selectedHighstreetAtom);
        const objectid = selectedHighstreet?.properties?.objectid;

        if (!objectid) {
          return { source, layer: layerDef.layer };
        }
        const fillOpacity = [
          "case",
          ["==", ["get", "objectid"], objectid],
          SELECTED_HIGHSTREET_OPACITY,
          GREYED_OUT_HIGHSTREET_OPACITY,
        ];
        return {
          source,
          layer: {
            ...layerDef.layer,
            paint: { ...layerDef.layer.paint, "fill-opacity": fillOpacity },
          },
        };
      }
      return { source, layer: layerDef.layer };
    },
});
