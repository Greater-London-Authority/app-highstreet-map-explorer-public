import { atom, selector } from "recoil";

import { buffer, simplify } from "@turf/turf";

export const bufferRadiusAtom = atom({
  key: "bufferRadiusAtom",
  default: 0.8,
});

export const selectedHighstreetAtom = atom({
  key: "selectedHighstreetAtom",
  default: null,
});

export const selectedRegionUrlQuerySelector = selector({
  key: "selectedRegionUrlQuerySelector",
  get: ({ get }) => {
    const selectedRegion = get(selectedRegionSelector);
    if (selectedRegion) {
      return `geometry=${encodeURIComponent(
        JSON.stringify({
          rings: selectedRegion.geometry.coordinates,
          spatialReference: { wkid: 4326 },
        })
      )}&geometryType=esriGeometryPolygon`;
    }
    return "";
  },
});

export const selectedRegionQueryParamsSelector = selector({
  key: "selectedRegionQueryParamsSelector",
  get: ({ get }) => {
    const selectedRegion = get(selectedRegionSelector);
    if (selectedRegion) {
      return {
        geometry: {
          rings: selectedRegion.geometry.coordinates,
          spatialReference: { wkid: 4326 },
        },
        geometryType: "esriGeometryPolygon",
        where: "1=1",
        f: "geojson",
      };
    }
    return "";
  },
});

export const selectedRegionSelector = selector({
  key: "selected-region-selector",
  get: ({ get }) => {
    const selectedHighstreet = get(selectedHighstreetAtom);
    const bufferRadius = get(bufferRadiusAtom);
    if (!selectedHighstreet || typeof bufferRadius !== "number") {
      return null;
    }
    if (bufferRadius === 0) {
      return selectedHighstreet;
    }
    const bufferedSelectedHighstreet = buffer(
      selectedHighstreet.geometry,
      bufferRadius,
      {
        steps: 1,
      }
    );
    const options = { tolerance: 0.0002, highQuality: true };
    const simplifiedBufferedSelectedHighstreet = simplify(
      bufferedSelectedHighstreet,
      options
    );
    return simplifiedBufferedSelectedHighstreet;
  },
});
