//import { mixed } from "@recoiljs/refine";
import { atomFamily } from "recoil";
//import { syncEffect } from "recoil-sync";
import { layerDefs } from "./layerDefs";

//import { bbox } from "@turf/turf";

export const layerDefsAtomFamily = atomFamily({
  key: "layers-family",
  default: (layerID) => layerDefs[layerID],
  // effects: (layerID) => [
  //   syncEffect({
  //     refine: mixed(),
  //     write: ({ write }, newValue) => {
  //       write(layerID, { filterState: newValue.filters.filterState });
  //     },
  //     read: ({ read }) => {
  //       const currentLayer = layerDefs[layerID];
  //       const filterState = read(layerID)?.filterState;
  //       if (!filterState) {
  //         return currentLayer;
  //       }

  //       return {
  //         ...currentLayer,
  //         filters: {
  //           ...currentLayer.filters,
  //           filterState: filterState,
  //         },
  //       };
  //     },
  //   }),
  // ],
});
