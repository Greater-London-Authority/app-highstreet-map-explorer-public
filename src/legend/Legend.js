import React, { useState } from "react";

import {
  Card,
  CardContent,
  CardHeader,
  Fab,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Zoom,
} from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import { useRecoilValue } from "recoil";
import {
  layerDefLabelsSelector,
  layerDefsParentColourSelector,
  visibleLayerIDsSelector,
} from "../layerDefs/selectors";
import DashedLineIcon from "./DashedLineIcon";
import LineIcon from "./LineIcon";
import { selectedHighstreetAtom } from "../map/selectedRegionAtoms";
import { Resizable } from "react-resizable";
import "./resizable.css";

const LegendItem = ({ layerID, ...other }) => {
  const { parent: parentLabel } = useRecoilValue(
    layerDefLabelsSelector(layerID)
  );
  const colour = useRecoilValue(layerDefsParentColourSelector(layerID));

  return (
    <ListItem disablePadding {...other}>
      <ListItemIcon sx={{ minWidth: 30, color: colour }}>
        <CircleIcon />
      </ListItemIcon>
      <ListItemText
        primary={parentLabel}
        primaryTypographyProps={{ variant: "body2", color: "#000" }}
      ></ListItemText>
    </ListItem>
  );
};
const DashedLineLegendItem = () => {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: 30 }}>
        <DashedLineIcon />
      </ListItemIcon>
      <ListItemText
        primary={"Selected High Street Buffer Boundary"}
        primaryTypographyProps={{ variant: "body2", color: "#000" }}
      ></ListItemText>
    </ListItem>
  );
};
const LineLegendItem = () => {
  return (
    <ListItem disablePadding>
      <ListItemIcon sx={{ minWidth: 30 }}>
        <LineIcon />
      </ListItemIcon>
      <ListItemText
        primary={"Selected High Street Boundary"}
        primaryTypographyProps={{ variant: "body2", color: "#000" }}
      ></ListItemText>
    </ListItem>
  );
};
export default function Legend({ sx, ...other }) {
  const [legendOpen, setLegendOpen] = useState(true);
  const visibleLayerIDs = useRecoilValue(visibleLayerIDsSelector);
  const highstreet = useRecoilValue(selectedHighstreetAtom);
  const [legendCardHeight, setLegendCardHeight] = useState(200);

  const handleOpenLegend = () => {
    setLegendOpen(true);
  };

  const handleCloseLegend = () => {
    setLegendOpen(false);
  };

  if (!visibleLayerIDs?.length) {
    return null;
  }

  const handleResize = (event, { size }) => {
    if (size.height < 80) {
      return;
    }
    setLegendCardHeight(size.height);
  };

  return (
    <>
      <Zoom in={!legendOpen}>
        <Fab
          sx={{ position: "fixed", bottom: 40, left: 10 }}
          size="medium"
          color="primary"
          aria-label="open-legend"
          onClick={handleOpenLegend}
        >
          <LegendToggleIcon />
        </Fab>
      </Zoom>
      <Zoom in={legendOpen}>
        <span>
          <Resizable
            height={legendCardHeight}
            width={200}
            onResize={handleResize}
            className="box"
            resizeHandles={["n"]}
          >
            <Card
              sx={{
                position: "fixed",
                bottom: 40,
                left: 10,
                zIndex: 100,
                width: "250px",
                backgroundColor: "#fff",
                ...sx,
              }}
              {...other}
              component="div"
            >
              <CardHeader
                action={
                  <IconButton
                    onClick={handleCloseLegend}
                    sx={{ color: "#000" }}
                    aria-label="close"
                  >
                    <CloseFullscreenIcon />
                  </IconButton>
                }
                sx={{ color: "#000", p: 1 }}
                title="Legend"
              />
              <CardContent sx={{ p: 1 }}>
                <List
                  dense
                  sx={{ maxHeight: legendCardHeight, overflowY: "auto" }}
                >
                  <>
                    {highstreet && (
                      <>
                        <DashedLineLegendItem />
                        <LineLegendItem />
                      </>
                    )}
                    {visibleLayerIDs.map((layerID) => (
                      <LegendItem key={layerID} layerID={layerID} />
                    ))}
                  </>
                </List>
              </CardContent>
            </Card>
          </Resizable>
        </span>
      </Zoom>
    </>
  );
}
