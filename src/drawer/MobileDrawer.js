import React from "react";

import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";

import { grey } from "@mui/material/colors";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MapInfoIcon from "../components/MapInfoIcon";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { MapInfoBody, MapInfoTitle } from "../copy/mapInfo";
import DrawerTabsContainer from "./DrawerTabsContainer";
import RadiusSlider from "../map/RadiusSlider";

const StyledBox = styled(Box)(() => ({
  backgroundColor: "#1b2021",
}));

const Puller = styled(Box)(() => ({
  width: 30,
  height: 6,
  backgroundColor: grey[500],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

const StyledIconButton = styled(IconButton)(() => ({
  width: 40,
  height: 40,
  borderRadius: 3,
  pointerEvents: "auto",
}));

function MobileDrawer({ open, setOpen }) {
  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints;
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const drawerBleeding = isTouchDevice ? 60 : 45;

  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
          ".MuiDrawer-modal": {
            inset: "unset !important",
          },
        }}
      />
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        anchor="bottom"
        open={open}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        hideBackdrop
        keepMounted={true}
        ModalProps={{
          keepMounted: true,
        }}
        BackdropProps={{ invisible: true }}
      >
        {!isTouchDevice && (
          <StyledBox
            sx={{
              position: "absolute",
              top: -drawerBleeding - 30,
              visibility: "visible",
              right: 0,
              display: "flex",
              alignItems: "center",
              height: "30px",
            }}
          >
            <StyledIconButton onClick={() => toggleDrawer(!open)} disableRipple>
              {open ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
            </StyledIconButton>
          </StyledBox>
        )}
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            visibility: "visible",
            right: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            height: "80px",
            maxHeight: "80px",
          }}
        >
          {isTouchDevice && <Puller />}
          <Typography
            variant="h1"
            component="h1"
            sx={{
              lineHeight: "1",
              pb: isTouchDevice ? 3 : 2,
              pt: isTouchDevice ? 3 : 2,
              pl: 2,
            }}
          >
            London High Streets Map Explorer
          </Typography>
          <MapInfoIcon
            infoDialogProps={{
              DialogTitle: MapInfoTitle,
              DialogBody: MapInfoBody,
              showCiuLogo: true,
            }}
          />
        </StyledBox>
        <StyledBox
          sx={{
            pt: 3,
            height: "70px",
            pb: 1,
          }}
        >
          <RadiusSlider isMobile={true} sx={{ width: "100%", pr: 10 }} />
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 21,
            maxHeight: "100%",
            height: "100%",
          }}
        >
          <DrawerTabsContainer />
        </StyledBox>
      </SwipeableDrawer>
    </>
  );
}

export default MobileDrawer;
