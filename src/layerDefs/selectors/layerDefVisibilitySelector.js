import { selectorFamily } from "recoil";
import { setLayerVisibility } from "./setLayerVisibility";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const layerDefVisibilitySelector = selectorFamily({
  key: "layer-visibility-selector",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));
      const visibility = layerDef.layer?.layout?.visibility;
      return visibility === "none" ? false : true;
    },
  set:
    (layerID) =>
    ({ set, get }, newVisibility) => {
      setLayerVisibility(newVisibility, set, layerID);
    },
});
