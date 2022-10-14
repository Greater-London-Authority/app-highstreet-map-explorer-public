import React, { useEffect, useState } from "react";

import { useRecoilState, useRecoilValue } from "recoil";

import Collapse from "@mui/material/Collapse";

import TransparencySlider from "../components/TransparencySlider";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ContrastIcon from "@mui/icons-material/Contrast";

import {
  layerCanBeVisibleSelector,
  showColourPickerSelector,
  layerDefLabelsSelector,
  layerDefVisibilitySelector,
  layerDefsParentColourSelector,
  layerDefInfoSelector,
  layerDefFilterBySelectedRegionSelector,
  layerDefSourceDataSelector,
  layerDefsTypeSelector,
} from "../layerDefs/selectors";
import LayerInfo from "../components/LayerInfo";
import axios from "axios";
import {
  Box,
  Checkbox,
  CircularProgress,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { CirclePicker } from "react-color";
import { chartColoursList } from "../base/colours";

export default function LayerCheckbox({ layerID }) {
  const [collapseOpen, setCollapseOpen] = useState(false);
  const [layerCanBeVisible, setLayerCanBeVisible] = useRecoilState(
    layerCanBeVisibleSelector(layerID)
  );

  const [loading, setLoading] = useState(true);
  const filterBySelectedRegion = useRecoilValue(
    layerDefFilterBySelectedRegionSelector(layerID)
  );
  const layerUrl = useRecoilValue(layerDefSourceDataSelector(layerID));
  const layerType = useRecoilValue(layerDefsTypeSelector(layerID));
  const { parent: parentLabel } = useRecoilValue(
    layerDefLabelsSelector(layerID)
  );
  const [visibility, setVisibility] = useRecoilState(
    layerDefVisibilitySelector(layerID)
  );
  const info = useRecoilValue(layerDefInfoSelector(layerID));
  const [colour, setColour] = useRecoilState(
    layerDefsParentColourSelector(layerID)
  );
  const showColourPicker = useRecoilValue(showColourPickerSelector(layerID));

  const switchCollapseState = () => {
    setCollapseOpen((oldCollapseOpen) => !oldCollapseOpen);
  };

  const handleCheckboxClick = (event) => {
    setCollapseOpen(event.target.checked);
    setVisibility(event.target.checked);
  };

  const layerOnMap = visibility && layerCanBeVisible;

  useEffect(() => {
    setLoading(true);

    if (!filterBySelectedRegion || layerType === "raster") {
      setLayerCanBeVisible(true);
      setLoading(false);
      return;
    }
    if (!layerUrl) {
      setLayerCanBeVisible(false);
      setLoading(false);
      return;
    }
    axios
      .get(layerUrl)
      .then(function (response) {
        setLayerCanBeVisible(Boolean(response.data.features.length > 0));
      })
      .finally(() => {
        setLoading(false);
      });
  }, [layerUrl, setLayerCanBeVisible, filterBySelectedRegion, layerType]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Tooltip
          arrow
          placement="left"
          title={
            layerCanBeVisible
              ? ""
              : "Layer not visible within selected highstreet boundary"
          }
        >
          <span>
            <Checkbox
              disabled={!layerCanBeVisible}
              icon={
                loading ? (
                  <CircularProgress size={20.57} />
                ) : (
                  <CircleOutlinedIcon />
                )
              }
              checkedIcon={<CircleIcon />}
              indeterminateIcon={<ContrastIcon />}
              onChange={handleCheckboxClick}
              checked={layerOnMap}
              sx={{
                p: 1,
                color: colour,
                "&.Mui-checked": {
                  color: colour,
                },
              }}
            />
          </span>
        </Tooltip>
        <Typography
          sx={{ opacity: layerCanBeVisible ? 1 : 0.3 }}
          {...(layerOnMap
            ? { onClick: switchCollapseState, sx: { cursor: "pointer" } }
            : {})}
        >
          {parentLabel}
        </Typography>

        <LayerInfo {...info} />
        {layerOnMap && showColourPicker && (
          <IconButton onClick={switchCollapseState}>
            {collapseOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        )}
      </Box>

      {layerOnMap && showColourPicker && (
        <Collapse in={collapseOpen}>
          <Box sx={{ pb: 2, pl: 3 }}>
            <Typography variant="caption" id="colour-selector-title">
              Select Colour:
            </Typography>
            <Box sx={{ pt: 1 }}>
              <CirclePicker
                colors={chartColoursList}
                circleSize={25}
                width={"100%"}
                color={colour}
                onChange={(event) => {
                  setColour(event.hex);
                }}
              />
            </Box>
          </Box>
          <TransparencySlider layerID={layerID} />
        </Collapse>
      )}
    </>
  );
}
