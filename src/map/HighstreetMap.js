import React, { useRef, useState } from "react";

import Map, {
  FullscreenControl,
  GeolocateControl,
  Layer,
  NavigationControl,
  Popup,
  Source,
} from "react-map-gl";

import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

import maplibregl from "maplibre-gl";
import GeocoderControl from "./geocoder/GeocoderControl";

import {
  selectedHighstreetAtom,
  selectedRegionSelector,
} from "./selectedRegionAtoms";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import LayersComponent from "./LayersComponent";
import { layerDefs } from "../layerDefs/layerDefs";
import { popupAtom } from "./popupAtom";
import { visibleLayerDefsIDsWithPopupSelector } from "../layerDefs/selectors";

import { tourMoveToStepSelector } from "../tour/tourAtom";
import { Backdrop, CircularProgress } from "@mui/material";

export default function HighstreetMap() {
  const mapRef = useRef();
  const [popup, setPopup] = useRecoilState(popupAtom);
  const visibleLayersWithPopup = useRecoilValue(
    visibleLayerDefsIDsWithPopupSelector
  );
  const layerIDs = Object.keys(layerDefs);
  const setTourStepIndex = useSetRecoilState(tourMoveToStepSelector);
  const selectedRegionState = useRecoilValue(selectedRegionSelector);
  const [highstreet, setHighstreet] = useRecoilState(selectedHighstreetAtom);
  const [hoverHighstreet, setHoverHighstreet] = useState();
  const [mapLoading, setMapLoading] = useState(true);

  const handleMapClick = (e) => {
    if (!mapRef?.current || !mapRef.current.loaded()) {
      return;
    }
    setPopup(null);

    if (!highstreet) {
      const highStreetFeatures = mapRef.current.getLayer("highstreet")
        ? mapRef.current.queryRenderedFeatures(e.point, {
            layers: ["highstreet"],
          })
        : undefined;

      if (highStreetFeatures?.length > 0) {
        setHighstreet(JSON.parse(JSON.stringify(highStreetFeatures[0])));
        setHoverHighstreet(null);
        setTourStepIndex(1);
      }
      return;
    }

    if (!visibleLayersWithPopup?.length) {
      return;
    }
    // do other popup stuff:

    const features = mapRef.current.queryRenderedFeatures(e.point, {
      layers: visibleLayersWithPopup,
    });

    if (!features?.length) {
      return;
    }

    // need to think of a way to do this with a selector family, but seems difficult to change the paramaters dynamically
    const popupAttributes = layerDefs[features[0]?.layer.id].popupAttributes;

    const text = popupAttributes
      .map((attribute) => features[0].properties[attribute])
      .join(": ");
    setPopup({
      text: text,
      coords: e.lngLat,
      layerId: features[0]?.layer.id,
    });
  };

  const handleMouseMove = (e) => {
    if (!mapRef?.current || highstreet) {
      return;
    }
    mapRef.current.getCanvas().style.cursor = "";

    if (mapRef.current.getLayer("highstreet")) {
      const features = mapRef.current.queryRenderedFeatures(e.point, {
        layers: highstreet ? visibleLayersWithPopup : ["highstreet"],
      });
      if (!features.length) {
        mapRef.current.getCanvas().style.cursor = "";
        setPopup(null);
        return;
      }

      const popupAttributes = layerDefs[features[0]?.layer.id].popupAttributes;
      const text = `${popupAttributes
        .map((attribute) => features[0].properties[attribute])
        .join(": ")}. Click to select this highstreet.`;

      setPopup({
        text: text,
        coords: e.lngLat,
        layerId: features[0]?.layer.id,
      });
      setHoverHighstreet(features[0].geometry);

      mapRef.current.getCanvas().style.cursor = "pointer";
      return;
    }
    mapRef.current.getCanvas().style.cursor = "";
  };

  const handleResize = () => {
    if (mapRef?.current) {
      setTimeout(() => {
        mapRef.current.resize();
      }, 200);
    }
  };

  const handleOnLoad = () => {
    setMapLoading(false);
  };
  window.addEventListener("resize", handleResize);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={mapLoading}
      >
        <CircularProgress />
      </Backdrop>
      <div
        style={{ width: "100%", height: "100%" }}
        className="map-test-classname"
      >
        <Map
          preserveDrawingBuffer
          id="map"
          initialViewState={{
            longitude: 0.1545,
            latitude: 51.5151,
            zoom: 9.43,
            width: "100%",
            height: "100%",
            maxBounds: [
              [-0.9520147334466, 50.1004060804908],
              [2.03512883092415, 52.119059856816],
            ],
            minZoom: 9.2,
            transformRequest: (url) => {
              if (!url.toLowerCase().includes("api.os")) return { url: url };
              if (!/[?&]key=/.test(url)) url += "?key=" + OS_KEY;
              return {
                url: url + "&srs=3857",
              };
            },
          }}
          onLoad={handleOnLoad}
          ref={mapRef}
          mapStyle={"./os_light_vts.json"}
          styleDiffing
          mapLib={maplibregl}
          style={{ width: "100%" }}
          hash={true}
          onClick={handleMapClick}
          onMouseMove={handleMouseMove}
          className="my-first-map"
        >
          {selectedRegionState && (
            <Source
              id="selected-region"
              type="geojson"
              data={selectedRegionState}
            >
              <Layer
                type="line"
                id="selected-region"
                paint={{
                  "line-color": "#353d42",
                  "line-dasharray": [1, 1],
                  "line-width": 3,
                }}
              ></Layer>
              <Layer
                type="fill"
                id="selected-region-fill"
                paint={{
                  "fill-color": "#353d42",
                  "fill-opacity": 0.15,
                }}
              ></Layer>
            </Source>
          )}
          {highstreet && (
            <Source
              id="selected-highstreet-region"
              type="geojson"
              data={highstreet.geometry}
            >
              <Layer
                type="line"
                id="selected-highstreet-region"
                paint={{
                  "line-color": "#353d42",
                  "line-width": 3,
                }}
              ></Layer>
              <Layer
                type="fill"
                id="selected-region-fill"
                paint={{
                  "fill-color": "#353d42",
                  "fill-opacity": 0.15,
                }}
              ></Layer>
            </Source>
          )}
          {hoverHighstreet && (
            <Source id="hover-highstreet" type="geojson" data={hoverHighstreet}>
              <Layer
                type="line"
                id="hover-highstreet"
                paint={{
                  "line-color": "#353d42",
                  "line-width": 3,
                }}
              ></Layer>
              <Layer
                type="fill"
                id="selected-region-fill"
                paint={{
                  "fill-color": "#353d42",
                  "fill-opacity": 0.15,
                }}
              ></Layer>
            </Source>
          )}
          <LayersComponent layersIDs={layerIDs} />
          <GeocoderControl position="top-left" />
          <FullscreenControl position="top-left" />
          <GeolocateControl position="top-left" trackUserLocation />
          <NavigationControl position="top-left" />
          {popup?.text && popup.coords && (
            <Popup
              style={{ color: "black", fontSize: "14px" }}
              longitude={popup.coords.lng}
              latitude={popup.coords.lat}
            >
              {popup.text}
            </Popup>
          )}
        </Map>
      </div>
    </>
  );
}
