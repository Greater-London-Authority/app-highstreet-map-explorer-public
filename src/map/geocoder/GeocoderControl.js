import React, { useState } from "react";

import { useControl, Marker } from "react-map-gl";
import MaplibreGeocoder from "@maplibre/maplibre-gl-geocoder";
import axios from "axios";
import maplibregl from "maplibre-gl";
import proj4 from "proj4";

import { toTitleCase } from "../../utils/prettyNaming";

import "./geocoder.css";

proj4.defs(
  "EPSG:27700",
  "+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.15,0.247,0.842,-20.489 +units=m +no_defs"
);
export default function GeocoderControl(props) {
  const [marker, setMarker] = useState(null);
  const Geo = {
    forwardGeocode: async (config) => {
      const results = await Promise.all([
        osFindNamesByFreeText(config.query),
        osFindPlacesByFreeText(config.query),
      ]);

      const flatResults = results.flat();

      flatResults.sort((a, b) => b.properties.match - a.properties.match);
      return {
        type: "FeatureCollection",
        query: [config.query],
        features: flatResults,
      };
    },
  };

  useControl(
    () => {
      const ctrl = new MaplibreGeocoder(Geo, {
        mapboxgl: maplibregl,
        showResultsWhileTyping: true,
        marker: false,
      });

      ctrl.on("loading", props.onLoading);
      ctrl.on("results", props.onResults);
      ctrl.on("clear", () => {
        setMarker(null);
      });
      ctrl.on("result", (evt) => {
        props.onResult(evt);

        const { result } = evt;
        const location =
          result &&
          (result.center ||
            (result.geometry?.type === "Point" && result.geometry.coordinates));
        if (location) {
          setMarker(
            <Marker
              {...props.marker}
              longitude={location[0]}
              latitude={location[1]}
            />
          );
        } else {
          setMarker(null);
        }
      });
      ctrl.on("error", props.onError);
      return ctrl;
    },
    {
      position: props.position,
    }
  );

  return marker;
}

const noop = () => {};

GeocoderControl.defaultProps = {
  onLoading: noop,
  onResults: noop,
  onResult: noop,
  onError: noop,
};

async function osFindPlacesByFreeText(query) {
  // this can be expanded to LPI addresses too

  return axios
    .get(
      `https://api.os.uk/search/places/v1/find?maxresults=3&dataset=DPA,LPI&lr=EN&fq=COUNTRY_CODE:E&output_srs=EPSG:4326&query=${query}&key=${OS_KEY}`
    )
    .then(function (response) {
      const geojson = response.data;

      const features = [];

      // this stuff needs to be tweaked!!
      for (let feature of geojson.results) {
        const featureKey = Object.keys(feature)[0];
        const featureContent = Object.values(feature)[0];

        const center = [featureContent.LNG, featureContent.LAT];
        const address = toTitleCase(featureContent.ADDRESS);
        // but now need to make the postcode uppercase again:
        const postcode =
          featureKey === "DPA"
            ? featureContent.POSTCODE
            : featureContent["POSTCODE_LOCATION"];
        let prettyAddress = address;
        if (postcode) {
          prettyAddress = address.replace(toTitleCase(postcode), postcode);
        }
        const point = {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: center,
          },
          properties: {
            match: featureContent.MATCH,
          },
          place_name: prettyAddress,
          text: prettyAddress,
          place_type: ["place"],
          center: center,
        };
        features.push(point);
      }
      return features;
    })
    .catch((err) => []);
}

async function osFindNamesByFreeText(query) {
  const response = await axios.get(
    `https://api.os.uk/search/names/v1/find?bounds=483880,140235,572490,213664&maxresults=2&query=${query}&key=${OS_KEY}`
  );
  const geojson = response.data.results;
  const features = [];
  for (let feature of geojson) {
    const featureContent = feature.GAZETTEER_ENTRY;

    const coords = proj4("EPSG:27700", "EPSG:4326", [
      featureContent.GEOMETRY_X,
      featureContent.GEOMETRY_Y,
    ]);
    const {
      NAME1: name1,
      DISTRICT_BOROUGH: districtBorough,
      REGION: region,
      COUNTY_UNITARY: county,
      COUNTRY: country,
    } = featureContent;
    const address = [name1, districtBorough, region, county, country]
      .filter(Boolean)
      .join(", ");
    const point = {
      type: "Feature",
      properties: {
        NAME1: featureContent.NAME1,
        TYPE: featureContent.TYPE,
        LOCAL_TYPE: featureContent.LOCAL_TYPE,
        match: 0.69,
      },
      place_name: address,
      text: address,
      place_type: featureContent.TYPE,
      center: coords,
      geometry: {
        type: "Point",
        coordinates: coords,
      },
    };
    features.push(point);
  }
  return features;
}
