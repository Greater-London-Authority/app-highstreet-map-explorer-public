import { popupAtom } from "../../map/popupAtom";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export function setLayerVisibility(newVisibility, set, layerID) {
  if (!newVisibility) {
    // need to remove the popup if it is becoming invisible
    set(popupAtom, (oldPopup) => {
      if (oldPopup?.layerId === layerID) {
        return null;
      }
      return oldPopup;
    });
  }
  set(layerDefsAtomFamily(layerID), (oldLayer) => ({
    ...oldLayer,
    layer: {
      ...oldLayer.layer,
      layout: {
        ...oldLayer?.layer?.layout,
        visibility: newVisibility ? "visible" : "none",
      },
    },
  }));
}
