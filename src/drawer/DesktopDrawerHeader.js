import React from "react";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import MapInfoIcon from "../components/MapInfoIcon";

import { MapInfoBody, MapInfoTitle } from "../copy/mapInfo";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const DesktopDrawerHeader = () => {
  return (
    <DrawerHeader>
      <Typography variant="h1" component="h1" sx={{ lineHeight: "1" }}>
        London High Streets Map Explorer
      </Typography>
      <MapInfoIcon
        infoDialogProps={{
          DialogTitle: MapInfoTitle,
          DialogBody: MapInfoBody,
          showCiuLogo: true,
        }}
      />
    </DrawerHeader>
  );
};

export default DesktopDrawerHeader;
