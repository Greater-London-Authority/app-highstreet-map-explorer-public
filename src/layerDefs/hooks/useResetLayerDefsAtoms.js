import { useRecoilCallback } from "recoil";

import { layerDefsAtomFamily } from "../layerDefsAtoms";
import { layerDefs } from "../layerDefs";

export const useResetLayerDefsAtom = () => {
  return useRecoilCallback(
    ({ reset }) =>
      () => {
        Object.keys(layerDefs).forEach((layerId) => {
          reset(layerDefsAtomFamily(layerId));
        });
      },
    []
  );
};
