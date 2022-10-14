import React from "react";

import { Link, Typography } from "@mui/material";

import Emoji from "a11y-react-emoji";

export const TourStep1 = () => (
  <>
    <Typography variant="h1" paragraph>
      Welcome to the London High Streets Map Explorer!{" "}
      <Emoji symbol="✨" label="sparkle" />
    </Typography>
    <Typography variant="body1" paragraph>
      Click <Emoji symbol="🖱️" label="mouse" /> on a highstreet on the map to
      get started. Hover over a highstreet to reveal it's name{" "}
      <Emoji symbol="🔍" label="map" />
    </Typography>
  </>
);

export const TourStep2 = () => (
  <>
    <Typography variant="body1" paragraph>
      The region <Emoji symbol="🗾" label="region" /> for exploration will
      default to an 800m boundary around the selected highstreet. This boundary
      can be adjusted using the slider and buttons{" "}
      <Emoji symbol="👆" label="index pointing up" />
    </Typography>
  </>
);

export const TourStep3 = () => (
  <>
    <Typography variant="body1" paragraph>
      Explore <Emoji symbol="🕵" label="man with magnifying glass" /> layers
      available to display on the map under the tabs (Planning, Culture...).
    </Typography>
  </>
);
export const TourStep4 = () => (
  <>
    <Typography variant="body1" paragraph>
      To display a layer on the map click on the hollow circle{" "}
      <Emoji symbol="⭕" label="hollow circle"></Emoji> to the left of the layer
      name. Remember the layer may not be available if it is not visible within
      the selected region <Emoji symbol="⛔" label="not available" />
    </Typography>
  </>
);
export const TourStep5 = () => (
  <>
    <Typography variant="body1" paragraph>
      To select another high street you must first clear{" "}
      <Emoji symbol="❌" label="cross"></Emoji> the current selection.
    </Typography>
    <Typography variant="body1" paragraph>
      The current map view may be downloaded{" "}
      <Emoji symbol="⬇️" label="arrow down"></Emoji> as a PNG image.
    </Typography>
  </>
);

export const TourStepFinal = () => (
  <>
    <Typography variant="body1" paragraph>
      We hope you enjoy exploring this map, but if you have any questions or
      comments please{" "}
      <Link
        underline="hover"
        href="mailto:HighStreetsDataService@london.gov.uk?subject=Feedback: London High Streets Map Explorer (from: tour)"
      >
        send them to us
      </Link>{" "}
      <Emoji symbol="💌" label="letter with love heart" />
    </Typography>
  </>
);
