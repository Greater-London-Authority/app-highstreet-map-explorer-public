import React from "react";

import { Link, Typography } from "@mui/material";

export const MapInfoBody = () => (
  <>
    <Typography variant="body1" paragraph>
      This application helps you explore mapping layers from a number of
      different projects and sources - brought together into one place for the
      first time.
    </Typography>
    <Typography variant="body1" paragraph>
      When you click on a High Street, layers that cover that High Street (or
      nearby) are highlighted pink in the list of layers. Once a layer is turned
      on you can also change the colour (to help see which layer is which) and
      transparency.
    </Typography>
    <Typography variant="body1" paragraph>
      To make suggestions, let us know how it is working and find out how
      colleagues are using the tool, please join the discussion{" "}
      <Link
        target="_blank"
        rel="noreferrer"
        href="https://3.basecamp.com/4232067/buckets/22357938/message_boards/3781990717"
        underline="hover"
      >
        here
      </Link>
      , or email us{" "}
      <Link
        underline="hover"
        href="mailto:HighStreetsDataService@london.gov.uk?subject=Feedback: London High Streets Map Explorer (from: map info)"
      >
        here
      </Link>
      .
    </Typography>
  </>
);

export const MapInfoTitle = () => (
  <Typography variant="h1" paragraph>
    Welcome to this online tool, developed as part of the{" "}
    <Link
      target="_blank"
      rel="noreferrer"
      href="https://data.london.gov.uk/high-street-data-service/"
      underline="hover"
    >
      High Streets Data Service
    </Link>
    !
  </Typography>
);
