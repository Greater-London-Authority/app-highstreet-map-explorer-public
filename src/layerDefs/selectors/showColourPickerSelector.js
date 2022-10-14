import { selectorFamily } from "recoil";
import { layerDefsAtomFamily } from "../layerDefsAtoms";

export const showColourPickerSelector = selectorFamily({
  key: "show-colour-picker",
  get:
    (layerID) =>
    ({ get }) => {
      const layerDef = get(layerDefsAtomFamily(layerID));
      if (!layerDef.hasOwnProperty("noColourPicker")) {
        return true;
      }
      return !layerDef.noColourPicker;
    },
});
