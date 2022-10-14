import { chartColours } from "../base/colours";
import { CIRCLE_RADIUS, CIRCLE_STROKE_WIDTH } from "../base/layerDefsConfig";
import { cultureInfrastructureLayerDefs } from "./cultureInfrastructureLayerDefs";
const BASE_OPACITY = 0.7;
const GIS1_BASE_URL = "https://gis.london.gov.uk/arcgis/rest/services/";

export const GIS2_BASE_URL =
  "https://gis2.london.gov.uk/server/rest/services/apps/";

export const GEOJSON_BASE_QUERY = "/query/?where=1%3D1&outfields=*&f=geojson";

export const SELECTED_HIGHSTREET_OPACITY = 0.2;
export const GREYED_OUT_HIGHSTREET_OPACITY = 0.2;

export const groupingLabels = {
  "culture-infrastructure": "Infrastructure",
  opportunity: "Opportunity",
};

export const groupingInfo = {
  opportunity: {
    shortDescription:
      "Opportunity Areas (OAs) are London’s major source of brownfield land which have significant capacity for development.",
    longDescriptionTitle: "Opportunity Areas Information",
    longDescription:
      "Opportunity Areas (OAs) are London’s major source of brownfield land which have significant capacity for development. Development proposals within OAs should conform with strategic directions for the OA(s).",
  },
  "culture-infrastructure": {
    shortDescription: "Cultural venues and supporting infrastructure.",
    longDescription:
      "Layers from the Cultural Infrastructure Map, which brings together new research and information that has previously not existed in one place. It plots the location of cultural infrastructure at building level as of 2018. The scale of London's cultural infrastructure means that it is ever changing and evolving and some is difficult to locate. The map provides the best snapshot of information that we have gathered to date and it will continue to evolve, adding new categories and information as it becomes available and as Londoners and organisations add missing cultural infrastructure to it, or inform us about closures.",
    longDescriptionTitle: "Infrastructure Layers Information",
  },
};

// orderNumber: higher number is on top

const mostLayerDefs = {
  "modelled-no2": {
    layer: {
      id: "modelled-no2",
      type: "raster",
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "modelled-no2",
      type: "raster",
      tiles: [
        `${GIS2_BASE_URL}Air_Quality_map_service_NO2_2019/MapServer/tile/{z}/{y}/{x}`,
      ],
    },
    labels: {
      parent: "Modelled NO2",
    },
    filters: {
      filterByChildren: false,
    },
    category: "environment",
    noColourPicker: true,
    info: {
      shortDescription:
        "Annual average concentrations of nitrogen dioxide (NO2) across London in 2019.",
      longDescriptionTitle: "Modelled NO2 Layer Information",
      longDescription:
        "This map layer shows the annual average concentrations of nitrogen dioxide (NO2) across London in 2019 as modelled by the London Atmospheric Emissions Inventory (2019). The legend below increases in increments of 3 μg m-3, the legal limit is 40 μg m-3. For more information please visit: https://data.london.gov.uk/air-quality/",
    },
  },
  // workspaces: {
  //   layer: {
  //     id: "workspaces",
  //     type: "circle",
  //     paint: {
  //       "circle-color": chartColours.ldnDkPink,
  //       "circle-stroke-width": 1,
  //       "circle-stroke-color": "#fff",
  //       "circle-radius": 7,
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "workspaces",
  //     type: "geojson",
  //     data: `https://maps.london.gov.uk/gla/rest/services/apps/Workspaces_service_editable_verified_service_01/MapServer/0${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: {
  //     parent: "Workspaces",
  //   },
  //   filters: {
  //     filterByChildren: false,
  //   },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["site_name"],
  //   orderNumber: 2,
  // },
  "business-improvement-districts": {
    layer: {
      id: "business-improvement-districts",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "business-improvement-districts",
      type: "geojson",
      data: `${GIS2_BASE_URL}BIDs_service_02/MapServer/0${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Business Improvement Districts",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["bid_name"],
    orderNumber: 1,
    info: {
      shortDescription:
        "A Business Improvement District (BID) is a geographical area in which the local businesses have voted to invest together to improve their environment.",
      longDescriptionTitle: "Business Improvement Districts Layer Information",
      longDescription:
        "BIDs provide additional or improved services, identified by the local businesses. This could include extra safety, cleaning or environmental measures. BIDs are business-led organisations. They’re funded by a mandatory levy on all eligible businesses after a successful ballot.",
    },
  },
  "land-ownership": {
    layer: {
      id: "land-ownership",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "land-ownership",
      type: "geojson",
      data: `${GIS2_BASE_URL}public_land_01/MapServer/3${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Land Ownership",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["pty_addr", "owner_upper"],
    orderNumber: 1,
  },
  "low-emission-neighbourhoods": {
    layer: {
      id: "low-emission-neighbourhoods",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "low-emission-neighbourhoods",
      type: "geojson",
      data: `${GIS2_BASE_URL}Air_Quality_map_service_01/MapServer/12${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Low Emission Neighbourhoods",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "environment",
    popupAttributes: ["sitename", "classification"],
    orderNumber: 1,
    info: {
      shortDescription:
        "A Low Emission Neighbourhood (LEN) is an area-based scheme that includes a package of measures focused on reducing emissions (and promoting sustainable living more generally).",
      longDescriptionTitle: "Low Emission Neighbourhoods Layer Information",
      longDescription:
        "A Low Emission Neighbourhood (LEN) is an area-based scheme that includes a package of measures focused on reducing emissions (and promoting sustainable living more generally). A LEN is delivered by a borough with support from Transport for London (TfL), the Greater London Authority (GLA) and the local community.",
    },
  },

  "air-quality-focus-area": {
    layer: {
      id: "air-quality-focus-area",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "air-quality-focus-area",
      type: "geojson",
      data: `${GIS2_BASE_URL}Air_Quality_map_service_01/MapServer/13${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Air Quality Focus Area",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "environment",
    popupAttributes: ["sitename"],
    orderNumber: 3,
    info: {
      shortDescription:
        "These are locations that not only exceed the EU annual mean limit value for NO2 but are also locations with high human exposure.",
      longDescriptionTitle: "Air Quality Focus Area Layer Information",
      longDescription:
        "Areas designated as an Air Quality Focus Area. These are locations that not only exceed the EU annual mean limit value for NO2 but are also locations with high human exposure. For more information about action being taken to tackle the pollution in this area please click on an area to read it's Borough Air Quality Action Plan.",
    },
  },
  "town-centre-boundaries": {
    layer: {
      id: "town-centre-boundaries",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "town-centre-boundaries",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/104${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Town Centre Boundaries",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["sitename", "classification"],
    orderNumber: 4,
    info: {
      shortDescription:
        "Town centres provide a range of commercial, cultural and civic activities.",
      longDescriptionTitle: "Town Centre Boundaries Layer Information",
      longDescription:
        "Town centres provide a range of commercial, cultural and civic activities, including shopping, leisure, employment, entertainment, culture, and social and community facilities. Their vitality and viability should be promoted to ensure they retain their importance. There are five broad types of town centres according to their scales and roles: International centres, Metropolitan centres, Major centres, District centres and Neighbourhood and more local centres.",
    },
  },
  "planning-site-allocations": {
    layer: {
      id: "planning-site-allocations",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "planning-site-allocations",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/102${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Site Allocations",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["sitename"],
    info: {
      shortDescription:
        "A Site Allocation means that the site is allocation for a particular type of development or use.",
      longDescription:
        "A Site Allocation means that the site is allocation for a particular type of development or use, such as housing, employment and leisure, within a development plan. Allocated sites provide guidelines for planning decisions, help to diversify use of land and promote development at borough level.",
      longDescriptionTitle: "Site Allocations Layer Information",
    },
  },
  "opportunity-area-adopted": {
    layer: {
      id: "opportunity-area-adopted",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "opportunity-area-adopted",
      type: "geojson",
      data: `${GIS2_BASE_URL}opportunity_areas_webmap/MapServer/20${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Adopted",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    grouping: "opportunity",
    popupAttributes: ["sitename", "status"],
  },
  "opportunity-area-emerging": {
    layer: {
      id: "opportunity-area-emerging",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "opportunity-area-emerging",
      type: "geojson",
      data: `${GIS2_BASE_URL}opportunity_areas_webmap/MapServer/21${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Emerging",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    grouping: "opportunity",
    popupAttributes: ["sitename", "status"],
  },
  "opportunity-area-defined": {
    layer: {
      id: "opportunity-area-defined",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "opportunity-area-defined",
      type: "geojson",
      data: `${GIS2_BASE_URL}opportunity_areas_webmap/MapServer/22${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Defined",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    grouping: "opportunity",
    popupAttributes: ["sitename", "status"],
  },
  caz: {
    layer: {
      id: "caz",
      type: "line",
      paint: {
        "line-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "caz",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/107${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Central Activities Zone",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: false,
    category: "base",
    orderNumber: 0,
    info: {
      shortDescription:
        "The Central Activities Zone covers London’s geographic, economic and administrative core.",
      longDescriptionTitle: "Central Activities Zone Layer Information",
      longDescription:
        "The Central Activities Zone covers London’s geographic, economic and administrative core. It’s unique combination of uses should be promoted and enhanced while also improving its environment and attractiveness for residents, visitors and businesses alike.",
    },
    noColourPicker: true,
  },
  shlaa: {
    layer: {
      id: "shlaa",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "shlaa",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/108${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Strategic Housing Land Availability Assessment (SHLAA)",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["sitename", "status"],
    orderNumber: 4,
    info: {
      shortDescription:
        "A Strategic Housing Land Availability Assessment (SHLAA) is a technical exercise to determine the quantity and suitability of land potentially available for housing development.",
      longDescriptionTitle:
        "Strategic Housing Land Availability Assessment (SHLAA) Layer Information",
      longDescription: `A Strategic Housing Land Availability Assessment (SHLAA) is a technical exercise to determine the quantity and suitability of land potentially available for housing development.
      The SHLAA is not a site allocations exercise – the purpose of the SHLAA is to provide a robust indication of aggregate housing capacity at local authority level and across London. Only sites that are already approved or formally allocated for housing are identified on the web map.
      For more information, please visit: https://www.london.gov.uk/what-we-do/planning/london-plan/new-london-plan/strategic-housing-land-availability-assessment.`,
    },
  },
  "planning-conservation": {
    layer: {
      id: "planning-conservation",
      type: "fill",

      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "planning-conservation",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/205${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Conservation Areas",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["sitename"],
    info: {
      shortDescription:
        "Conservation Areas are areas where extra planning controls apply due to their special architectural and historic interest.",
      longDescriptionTitle: "Conservation Areas Layer Information",
      longDescription:
        "Conservation Areas are areas where extra planning controls apply due to their special architectural and historic interest.",
    },
  },
  "planning-protected-vistas": {
    layer: {
      id: "planning-protected-vistas",
      beforeId: "planning-conservation",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "planning-protected-vistas",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/213${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Protected Vistas",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "planning",
    popupAttributes: ["sitename", "classification"],
    info: {
      shortDescription:
        "The Protected Vistas seek to protect the significant views which help to define London.",
      longDescriptionTitle: "Protected Vistas Layer Information",
      longDescription: `The Protected Vistas are established in the London Plan with more detailed guidance provided in the London View Management Framework (LVMF). The London Plan seeks to protect the significant views which help to define London, including the panoramas, linear views and townscape views in this layer.
      A planning application for a proposal that could affect one of these designated view should be accompanied by an analysis that explains, evaluates and justifies the visual impact on the view. Any planning application that is not consistent with the principles and guidance set out in the London Plan and the LVMF will be refused.`,
    },
  },
  "creative-enterprise": {
    layer: {
      id: "creative-enterprise",
      type: "fill",
      paint: {
        "fill-color": chartColours.ldnDkPink,
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "creative-enterprise",
      type: "geojson",
      data: `${GIS2_BASE_URL}planning_data_map_02/MapServer/304${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Creative Enterprise Zones",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["sitename"],
    info: {
      shortDescription:
        "Creative Enterprise Zones are a Mayoral initiative to designate areas of London where artists and creative businesses can find permanent affordable space to work.",
      longDescriptionTitle: "Creative Enterprise Zones Layer Information",
      longDescription:
        "Creative Enterprise Zones are a Mayoral initiative to designate areas of London where artists and creative businesses can find permanent affordable space to work; are supported to start-up and grow; and where local people are helped to learn creative sector skills and access pathways to employment. https://www.london.gov.uk/what-we-do/arts-and-culture/culture-and-good-growth/explore-creative-enterprise-zones/about-creative-enterprise-zones",
    },
  },
  highstreet: {
    layer: {
      id: "highstreet",
      type: "fill",
      paint: {
        "fill-color": "#353d42",
        "fill-opacity": BASE_OPACITY,
        "fill-outline-color": "#000000",
      },
    },
    source: {
      id: "highstreet",
      type: "geojson",
      data: `${GIS1_BASE_URL}apps/Busyness_context/MapServer/3${GEOJSON_BASE_QUERY}`,
    },
    filters: {
      filterByChildren: false,
    },
    labels: {
      parent: "Highstreets",
    },
    category: "base",
    popupAttributes: ["highstreet_name"],
    orderNumber: 0,
    info: {
      shortDescription:
        "Boundaries of High Streets as developed by the Regeneration team at the Greater London Authority.",
      longDescriptionTitle: "Highstreets Layer Information",
      longDescription:
        "Boundaries of High Streets as developed by the Regeneration team at the Greater London Authority. NOTE: these boundaries will be used when sharing data about High Street spend and footfall. They reflect the wider uses of High Streets including community, public and cultural, in addition to concentrations of retail units.",
    },
    noColourPicker: true,
  },
  borough: {
    layer: {
      id: "borough",
      type: "line",
      paint: {
        "line-color": "#000000",
        "line-width": 1,
      },
    },
    source: {
      id: "borough",
      type: "geojson",
      data: `${GIS2_BASE_URL}webmap_context_layer/MapServer/3${GEOJSON_BASE_QUERY}`,
    },

    filters: {
      filterByChildren: false,
    },
    labels: {
      parent: "Borough Boundaries",
    },
    category: "base",
    noColourPicker: true,
  },
  "air-quality-monitoring-sites": {
    layer: {
      id: "air-quality-monitoring-sites",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
        "circle-radius": CIRCLE_RADIUS,
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "air-quality-monitoring-sites",
      type: "geojson",
      data: `${GIS2_BASE_URL}Air_Quality_map_service_01/MapServer/1${GEOJSON_BASE_QUERY}`,
    },
    labels: {
      parent: "Air Quality Monitoring Sites",
    },
    filters: {
      filterByChildren: false,
    },
    filterBySelectedRegion: true,
    category: "environment",
    popupAttributes: ["sitename", "classification"],
    orderNumber: 2,
    info: {
      shortDescription:
        "Includes regulatory monitoring stations as well as the new network of mid-cost sensors.",
      longDescriptionTitle: "Air Quality Monitoring Sites Layer Information",
      longDescription:
        "Includes regulatory monitoring stations, City Airport monitoring as well as the new network of mid-cost sensors through the Breathe London programme. Click each site for more information.",
    },
  },
};

export const layerDefs = {
  ...mostLayerDefs,
  ...cultureInfrastructureLayerDefs,
};
