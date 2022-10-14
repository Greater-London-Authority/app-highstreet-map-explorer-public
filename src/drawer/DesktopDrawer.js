import React from "react";

import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Button, Grid, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DownloadIcon from "@mui/icons-material/Download";
import DesktopDrawerHeader from "./DesktopDrawerHeader";
import RadiusSlider from "../map/RadiusSlider";
import DrawerTabsContainer from "./DrawerTabsContainer";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { selectedHighstreetAtom } from "../map/selectedRegionAtoms";
import { useMap } from "react-map-gl";
import FileSaver from "file-saver";
import html2canvas from "html2canvas";

import { useResetLayerDefsAtom } from "../layerDefs/hooks";

const drawerBleeding = 40;
const drawerWidth = 600;

const StyledBox = styled(Box)(() => ({
  backgroundColor: "#1b2021",
}));

function DesktopDrawer({ open, setOpen }) {
  const { map } = useMap();
  const resetSelectedHighstreet = useResetRecoilState(selectedHighstreetAtom);
  const selectedHighstreet = useRecoilValue(selectedHighstreetAtom);
  const resetLayerDefsAtom = useResetLayerDefsAtom();

  const handleResetSelection = () => {
    resetSelectedHighstreet();
    resetLayerDefsAtom();
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleDownloadMap = async () => {
    const fileName = `high-streets-map-explorer-export.png`;

    const mapboxCanvas = map.getCanvas();
    const legendHtml = document.getElementById("legend");
    if (legendHtml?.style?.visibility === "hidden") {
      mapboxCanvas.toBlob((blob) => {
        FileSaver.saveAs(blob, fileName);
      });
      return;
    }

    const legendCanvas = await html2canvas(legendHtml);

    let merge = document.createElement("canvas");
    merge.width = mapboxCanvas.width;
    merge.height = mapboxCanvas.height;

    const context = merge.getContext("2d");

    context.globalAlpha = 1.0;
    context.drawImage(mapboxCanvas, 0, 0);
    context.globalAlpha = 1.0;
    context.drawImage(legendCanvas, 10, 10);

    merge.toBlob((blob) => {
      FileSaver.saveAs(blob, fileName);
    });
  };

  return (
    <>
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            width: `calc(${drawerWidth}px - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <SwipeableDrawer
        variant="persistent"
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        disableSwipeToOpen={true}
        hideBackdrop
        ModalProps={{
          keepMounted: true,
        }}
      >
        <StyledBox
          sx={{
            position: "absolute",
            left: -drawerBleeding,
            visibility: "visible",
            right: drawerWidth - drawerBleeding - 1,
            top: 0,
            pointerEvents: "auto",
          }}
        >
          <IconButton disableRipple onClick={toggleDrawer(!open)}>
            {open ? <ArrowForwardIosIcon /> : <ArrowBackIosNewIcon />}
          </IconButton>
        </StyledBox>
        <StyledBox
          sx={{
            px: 2,
            pb: 2,
            height: "101px",
          }}
        >
          <DesktopDrawerHeader />
        </StyledBox>
        <StyledBox
          sx={{
            ml: 2,
            height: "61px",
          }}
        >
          <RadiusSlider sx={{ width: "470px" }} />
        </StyledBox>

        <StyledBox sx={{ height: "100%", maxHeight: "100%", ml: 4, pb: 40 }}>
          <DrawerTabsContainer />
        </StyledBox>
        <Box
          sx={{
            position: "fixed",
            bottom: 0,
            right: 0,
            display: "flex",
            width: drawerWidth - drawerBleeding,
          }}
        >
          <Grid
            className="drawer-actions"
            container
            spacing={1}
            sx={{ pl: 3, pr: 3, pb: 2 }}
          >
            <Grid item xs={4}>
              <Button
                disabled={!selectedHighstreet}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                startIcon={<ClearIcon />}
                onClick={handleResetSelection}
              >
                Clear Selection
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadMap}
              >
                Download Map View
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  width={140}
                  alt="Mayor of London Logo"
                  src="./mayoroflondon.svg"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </SwipeableDrawer>
    </>
  );
}

export default DesktopDrawer;
