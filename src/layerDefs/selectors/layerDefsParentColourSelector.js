import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefsParentColourSelector = selectorFamily({
  key: "layer-parent-colour-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));

      const layer = layerDef?.layer;
      const paint = layer?.paint;
      const type = layer?.type;

      return paint?.hasOwnProperty(`${type}-color`)
        ? paint[`${type}-color`]
        : "#00AEEF";
    },
  set:
    (layerID) =>
    ({ set }, newColour) => {
      set(layerDefsAtomFamily(layerID), (oldLayer) => {
        const type = oldLayer?.layer?.type;

        if (!type) {
          return oldLayer;
        }
        return {
          ...oldLayer,
          layer: {
            ...oldLayer.layer,
            paint: {
              ...oldLayer?.layer?.paint,
              [`${type}-color`]: newColour,
              ...(type === "fill" && { "fill-outline-color": newColour }),
            },
          },
        };
      });
    },
});
