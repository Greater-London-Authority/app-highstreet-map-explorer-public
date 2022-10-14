
## Available Scripts
In the project directory, you can run:\
(On first run:  `npm install`)

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
### `npm run build`

This is not required locally, it is done on [Jenkins](http://gis-fme2.gla.london.gov.uk:8080/job/app-highstreets-map-explorer/) (see Jenkinsfile).

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

##  Map Framework


This map uses the [react-map-gl](https://visgl.github.io/react-map-gl/) react wrapper for [maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) to display the map and it's layers. It also uses the react-map-gl built in [FullscreenControl](https://visgl.github.io/react-map-gl/docs/api-reference/fullscreen-control), [GeolocateControl](https://visgl.github.io/react-map-gl/docs/api-reference/geolocate-control), [NavigationControl](https://visgl.github.io/react-map-gl/docs/api-reference/navigation-control) and [Popup](https://visgl.github.io/react-map-gl/docs/api-reference/popup) components.

Geocoding (address search) is done via a custom component called "GeocoderControl" this uses free text queries of both OS [Places](https://developer.ordnancesurvey.co.uk/os-places-api) and [Names](https://osdatahub.os.uk/docs/names/overview) APIs. It arbitrarily returns the first 2 results from the Places API followed by the first 3 results from the Names API. This gives a good combination of postcode/place and specific address search results.

[Sources](https://visgl.github.io/react-map-gl/docs/api-reference/source) and [Layers](https://visgl.github.io/react-map-gl/docs/api-reference/layer) are added to the map via react-map-gl components. Line layers for selected highstreet and selected highstreet region are added in the HighstreetMap.js file, while other layers are added in the LayersComponent.js file.

## App State
### react-map-gl Map State
The state of the map (in terms of lat, long, zoom, pitch) is stored by the react-map-gl [Map](https://visgl.github.io/react-map-gl/docs/api-reference/map) component. This has not been modified but it is possible to store this state manually to allow more control over the map.
### Recoil Atoms (most of the remaining app's state)
The majority of the rest of the map related components states are stored using Recoil [Atoms](https://recoiljs.org/docs/api-reference/core/atom) and an [Atom Family](https://recoiljs.org/docs/api-reference/utils/atomFamily) (essentially a list of Atoms).
#### Layer Definitions
The combined state of each layer (layer, source, descriptions etc.) is termed a layer definition or a "layerDef". It takes the form of:

```json
{
  "layerDef-id": {
    "layer": {
      "id": "layerDef-id",
      "type": "fill",
      "layout": {
        "visibility": "none"
      }
    },
    "source": {
      "id": "layerDef-id",
      "type": "fill",
      "data": "<url-of-map-service>"
    },
    "labels": {
      "parent": "Checkbox Label"
    },
    "filters": {
      "filterByChildren": false
    },
    "category": "category-for-tabs",
    "grouping": "group-name-for-checkbox-grouping-in-colapse-list",
    "noColourPicker": false,
    "info": {
      "shortDescription": "Tooltip description",
      "longDescriptionTitle": "Title of long description dialogue",
      "longDescription": "Body of long description dialogue"
    }
  }
}
```
Now let us step through this "layerDef-id" object and explain each part.
 ##### 1 & 2. layer and source
The first two parts, layer and source follow the exact structure outlined in the [maplibre-gl-js](https://github.com/maplibre/maplibre-gl-js) API. See [Layers](https://maplibre.org/maplibre-gl-js-docs/style-spec/layers/) and [Sources](https://maplibre.org/maplibre-gl-js-docs/style-spec/sources/). These two parts will be the base of each layer and it's source, but additions will be made to the layer and it's source by the layerDefFormatSelector based on other parameters in the layerDef (more on this later!). The output from layerDefFormatSelector is what is used in the map and legend. This structure is used since it is difficult to store the state of each layerDef in the form outlined by maplibre while also using it for creating layer checkboxes. It is better to have one source of truth and then form the layers based on that source of truth.
##### 3. labels
None of the layerDefs in this map have children so the parent is the only label used. This parent label is the label displayed in the drawer checkbox list. 
##### 4. filters
As noted above, none of the layerDefs in this map have children and so there is no need for filtering by children (for this see the SuDS map).
##### 5. category
This value is used by the drawer checkbox list only. It assigns the layerDef to a tab (e.g. environment, context etc.). The checkbox for the layerDef will go in the tab which matches this value.
##### 6. grouping
layerDefs with the same grouping attribute will be places in a collapsed group of checkboxes in the drawer. When this attribute is used a label is required for the group (more on this later!). 
##### 7. noColourPicker
Pretty self explanatory! If true then there will be no colour picker under the layerDef checkbox. This is useful for layerDefs such as ones of type raster and context layers.
##### 8. info
This is the layerDef info. Details of where each info will be displayed is detailed in the example above. These can be react components too. 









