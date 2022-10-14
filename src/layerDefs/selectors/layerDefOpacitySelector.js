import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefOpacitySelector = selectorFamily({
  key: "layer-opacity-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const { layer } = get(layerDefsAtomFamily(layerID));
      if (layer.type !== "fill") {
        return;
      }
      return layer?.paint["fill-opacity"];
    },
  set:
    (layerID) =>
    ({ set }, newOpacity) => {
      set(layerDefsAtomFamily(layerID), (oldLayer) => {
        if (oldLayer.layer.type !== "fill") {
          return oldLayer;
        }
        return {
          ...oldLayer,
          layer: {
            ...oldLayer.layer,
            paint: {
              ...oldLayer?.layer?.paint,
              "fill-opacity": newOpacity,
            },
          },
        };
      });
    },
});
