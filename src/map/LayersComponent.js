import React from "react";
import { useRecoilValue } from "recoil";
import { layerDefFormatSelector } from "../layerDefs/selectors";

import { Source, Layer } from "react-map-gl";

export default function LayersComponent({ layersIDs }) {
  if (!layersIDs?.length) {
    return null;
  }

  return (
    <>
      {layersIDs.map((layerID, index) => (
        <LayerComponent key={layerID} layerID={layerID} />
      ))}
    </>
  );
}

const LayerComponent = ({ layerID }) => {
  const layerDef = useRecoilValue(layerDefFormatSelector(layerID));
  return (
    <>
      {layerDef && (
        <Source key={layerID} {...layerDef.source}>
          <Layer {...layerDef.layer}></Layer>
        </Source>
      )}
    </>
  );
};
