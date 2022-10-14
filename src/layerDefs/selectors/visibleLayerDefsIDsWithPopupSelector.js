import { selector } from "recoil";
import { layerDefs } from "../layerDefs";
import { visibleLayerIDsSelector } from "./visibleLayerIDsSelector";

export const visibleLayerDefsIDsWithPopupSelector = selector({
  key: "visible-layer-ids-with-popup-selector",
  get: ({ get }) => {
    const visibleLayerIDs = get(visibleLayerIDsSelector);
    const visibleLayersWithPopup = visibleLayerIDs.filter(
      (layerID) => layerDefs[layerID]?.popupAttributes?.length > 0
    );

    return visibleLayersWithPopup;
  },
});
