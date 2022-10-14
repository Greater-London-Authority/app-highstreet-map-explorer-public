import { selector } from "recoil";
import { layerDefs } from "../layerDefs";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const visibleLayerIDsSelector = selector({
  key: "visible-layer-ids",
  get: ({ get }) => {
    const visibleLayers = Object.keys(layerDefs).filter((layerID) => {
      const layerDef = get(layerDefsAtomFamily(layerID));
      const visibility = layerDef?.layer?.layout?.visibility;
      return visibility === "none" ? false : true;
    });
    return visibleLayers;
  },
});
