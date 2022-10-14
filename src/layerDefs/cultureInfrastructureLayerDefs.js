import { CIRCLE_RADIUS, CIRCLE_STROKE_WIDTH } from "../base/layerDefsConfig";

const GIS1_BASE_URL = "https://gis.london.gov.uk/arcgis/rest/services/apps/";
const GEOJSON_BASE_QUERY = "/query/?where=1%3D1&outfields=*&f=geojson";

export const cultureInfrastructureLayerDefs = {
  "culture-infrastructure-archives": {
    layer: {
      id: "culture-infrastructure-archives",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-archives",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/0${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Archives" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-artists-workspaces": {
    layer: {
      id: "culture-infrastructure-artists-workspaces",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-artists-workspaces",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/1${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Artists workspaces" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-arts-centres": {
    layer: {
      id: "culture-infrastructure-arts-centres",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-arts-centres",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/2${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Arts centres" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  // "culture-infrastructure-cinemas": {
  //   layer: {
  //     id: "culture-infrastructure-cinemas",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-cinemas",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/3${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Cinemas" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-commercial-galleries": {
  //   layer: {
  //     id: "culture-infrastructure-commercial-galleries",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-commercial-galleries",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/4${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Commercial galleries" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-community-centres": {
  //   layer: {
  //     id: "culture-infrastructure-community-centres",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-community-centres",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/5${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Community centres" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-creative-co-working-desk-space": {
  //   layer: {
  //     id: "culture-infrastructure-creative-co-working-desk-space",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-creative-co-working-desk-space",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/6${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Creative co-working desk space" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-creative-workspaces": {
  //   layer: {
  //     id: "culture-infrastructure-creative-workspaces",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-creative-workspaces",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/7${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Creative workspaces" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  "culture-infrastructure-dance-performance-venues": {
    layer: {
      id: "culture-infrastructure-dance-performance-venues",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-dance-performance-venues",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/8${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Dance performance venues" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-dance-rehearsal-studios": {
    layer: {
      id: "culture-infrastructure-dance-rehearsal-studios",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-dance-rehearsal-studios",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/9${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Dance rehearsal studios" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-fashion-and-design": {
    layer: {
      id: "culture-infrastructure-fashion-and-design",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-fashion-and-design",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/10${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Fashion and design" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-heritage-at-risk": {
    layer: {
      id: "culture-infrastructure-heritage-at-risk",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-heritage-at-risk",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/11${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Heritage at risk" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  // "culture-infrastructure-jewellery-design": {
  //   layer: {
  //     id: "culture-infrastructure-jewellery-design",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-jewellery-design",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/12${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Jewellery design" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-large-media-production-studios": {
  //   layer: {
  //     id: "culture-infrastructure-large-media-production-studios",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-large-media-production-studios",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/13${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Large media production studios" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  "culture-infrastructure-legal-street-art-walls": {
    layer: {
      id: "culture-infrastructure-legal-street-art-walls",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-legal-street-art-walls",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/14${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Legal street art walls" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-lgbt+-night-time-venues": {
    layer: {
      id: "culture-infrastructure-lgbt+-night-time-venues",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-lgbt+-night-time-venues",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/15${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "LGBT+ night time venues" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  // "culture-infrastructure-libraries": {
  //   layer: {
  //     id: "culture-infrastructure-libraries",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-libraries",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/16${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Libraries" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-listed-buildings": {
  //   layer: {
  //     id: "culture-infrastructure-listed-buildings",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-listed-buildings",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/17${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Listed buildings" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  "culture-infrastructure-live-in-artists'-workspace": {
    layer: {
      id: "culture-infrastructure-live-in-artists'-workspace",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-live-in-artists'-workspace",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/18${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Live in artists' workspace" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-makerspaces": {
    layer: {
      id: "culture-infrastructure-makerspaces",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-makerspaces",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/19${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Makerspaces" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  // "culture-infrastructure-making-and-manufacturing": {
  //   layer: {
  //     id: "culture-infrastructure-making-and-manufacturing",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-making-and-manufacturing",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/20${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Making and manufacturing" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-museums-and-public-galleries": {
  //   layer: {
  //     id: "culture-infrastructure-museums-and-public-galleries",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-museums-and-public-galleries",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/21${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Museums and public galleries" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-music-(office-based-businesses)": {
  //   layer: {
  //     id: "culture-infrastructure-music-(office-based-businesses)",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-music-(office-based-businesses)",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/22${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Music (office based businesses)" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-music-recording-studios": {
  //   layer: {
  //     id: "culture-infrastructure-music-recording-studios",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-music-recording-studios",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/23${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Music recording studios" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-music-rehearsal-studios": {
  //   layer: {
  //     id: "culture-infrastructure-music-rehearsal-studios",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-music-rehearsal-studios",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/24${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Music rehearsal studios" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-music-venues-(all)": {
  //   layer: {
  //     id: "culture-infrastructure-music-venues-(all)",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-music-venues-(all)",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/25${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Music venues (all)" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-music-venues-(grassroots)": {
  //   layer: {
  //     id: "culture-infrastructure-music-venues-(grassroots)",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-music-venues-(grassroots)",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/26${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Music venues (grassroots)" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-outdoor-spaces-for-cultural-use": {
  //   layer: {
  //     id: "culture-infrastructure-outdoor-spaces-for-cultural-use",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-outdoor-spaces-for-cultural-use",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/27${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Outdoor spaces for cultural use" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-prop-and-costume-making": {
  //   layer: {
  //     id: "culture-infrastructure-prop-and-costume-making",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-prop-and-costume-making",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/28${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Prop and costume making" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-pubs": {
  //   layer: {
  //     id: "culture-infrastructure-pubs",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-pubs",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/29${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Pubs" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-scheduled-monuments": {
  //   layer: {
  //     id: "culture-infrastructure-scheduled-monuments",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-scheduled-monuments",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/30${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Scheduled monuments" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-set-and-exhibition-building": {
  //   layer: {
  //     id: "culture-infrastructure-set-and-exhibition-building",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-set-and-exhibition-building",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/31${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Set and exhibition building" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-skate-parks": {
  //   layer: {
  //     id: "culture-infrastructure-skate-parks",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-skate-parks",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/32${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Skate Parks" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  // "culture-infrastructure-textile-design": {
  //   layer: {
  //     id: "culture-infrastructure-textile-design",
  //     type: "circle",
  //     paint: {
  //       "circle-color": "#9E0059",
  //       "circle-radius": CIRCLE_RADIUS,
  //       "circle-stroke-width": CIRCLE_STROKE_WIDTH,
  //       "circle-stroke-color": "#fff",
  //     },
  //     layout: {
  //       visibility: "none",
  //     },
  //   },
  //   source: {
  //     id: "culture-infrastructure-textile-design",
  //     type: "geojson",
  //     data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/33${GEOJSON_BASE_QUERY}`,
  //   },
  //   labels: { parent: "Textile design" },
  //   filters: { filterByChildren: false },
  //   filterBySelectedRegion: true,
  //   category: "culture",
  //   popupAttributes: ["name"],
  //   grouping: "culture-infrastructure",
  // },
  "culture-infrastructure-theatre-rehearsal-studio": {
    layer: {
      id: "culture-infrastructure-theatre-rehearsal-studio",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-theatre-rehearsal-studio",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/34${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Theatre rehearsal studio" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
  "culture-infrastructure-theatres": {
    layer: {
      id: "culture-infrastructure-theatres",
      type: "circle",
      paint: {
        "circle-color": "#9E0059",
        "circle-radius": CIRCLE_RADIUS,
        "circle-stroke-width": CIRCLE_STROKE_WIDTH,
        "circle-stroke-color": "#fff",
      },
      layout: {
        visibility: "none",
      },
    },
    source: {
      id: "culture-infrastructure-theatres",
      type: "geojson",
      data: `${GIS1_BASE_URL}cultural_infrastructure_for_webapp_verified/MapServer/35${GEOJSON_BASE_QUERY}`,
    },
    labels: { parent: "Theatres" },
    filters: { filterByChildren: false },
    filterBySelectedRegion: true,
    category: "culture",
    popupAttributes: ["name"],
    grouping: "culture-infrastructure",
  },
};
