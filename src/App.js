import "./App.css";

import HighstreetMap from "./map/HighstreetMap";

import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import MobileDrawer from "./drawer/MobileDrawer";
import { useMediaQuery, useTheme } from "@mui/material";
import DesktopDrawer from "./drawer/DesktopDrawer";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme } from "./base/theme";

import { useMap } from "react-map-gl";
import Tour from "./tour/Tour";
import Legend from "./legend/Legend";

const Root = styled("main")(() => ({
  height: "100%",
  width: "100%",
  maxHeight: "100%",
  maxWidth: "100%",
}));

const MapContainer = styled("div", {
  shouldForwardProp: (prop) =>
    prop !== "open" && prop !== "isMobile" && prop !== "isTouchDevice",
})(({ theme, open, isMobile, isTouchDevice }) => ({
  position: "absolute",
  height: isMobile && open && !isTouchDevice ? "50%" : "100%",
  width: open && !isMobile ? `calc(100% - ${theme.drawerWidth}px)` : "100%",
  transition: theme.transitions.create(["width", "height"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  top: 0,
  left: 0,
  right: 560,
}));

function App() {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;
  const { map } = useMap();

  const handleSetDrawerOpen = async (newDrawerOpen) => {
    setDrawerOpen(newDrawerOpen);

    if (newDrawerOpen) {
      setTimeout(resizeMap, theme.transitions.duration.enteringScreen);
      return;
    }
    const resizeMapInterval = setInterval(resizeMap, 5);
    setTimeout(
      () => clearInterval(resizeMapInterval),
      theme.transitions.duration.leavingScreen + 500
    );
  };

  const resizeMap = () => {
    if (map) {
      map.resize();
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Root>
        <CssBaseline />
        <Tour />
        {!isMobile && <Legend className="legend" id="legend" />}
        <MapContainer
          open={drawerOpen}
          isMobile={isMobile}
          isTouchDevice={isTouchDevice}
        >
          <HighstreetMap />
        </MapContainer>
        {isMobile ? (
          <MobileDrawer open={drawerOpen} setOpen={handleSetDrawerOpen} />
        ) : (
          <DesktopDrawer open={drawerOpen} setOpen={handleSetDrawerOpen} />
        )}
      </Root>
    </ThemeProvider>
  );
}

export default App;
