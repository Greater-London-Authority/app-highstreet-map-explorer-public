import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  layerDefGroupingSelector,
  layerDefGroupVisibilitySelector,
} from "../layerDefs/selectors";

import { Box, Checkbox, Typography, IconButton, Collapse } from "@mui/material";

import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import ContrastIcon from "@mui/icons-material/Contrast";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import LayerCheckbox from "./LayerCheckbox";
import LayerInfo from "../components/LayerInfo";

import { layerGroupCanBeVisible } from "../layerDefs/selectors";
import { groupingInfo, groupingLabels } from "../layerDefs/layerDefs";

export default function LayerGroupCheckboxList({ layerIDs }) {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const grouping = useRecoilValue(layerDefGroupingSelector(layerIDs[0]));

  const groupLabel = groupingLabels[grouping];

  const info = groupingInfo.hasOwnProperty(grouping)
    ? groupingInfo[grouping]
    : null;

  const [groupVisibility, setGroupVisibility] = useRecoilState(
    layerDefGroupVisibilitySelector(grouping)
  );

  const someLayersCanBeVisible = useRecoilValue(
    layerGroupCanBeVisible(layerIDs)
  );

  const switchCollapseState = () => {
    setCollapseOpen((oldCollapseOpen) => !oldCollapseOpen);
  };

  const handleChange = (event) => {
    setGroupVisibility(event.target.checked);
  };

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
        <Checkbox
          disabled={!someLayersCanBeVisible}
          sx={{ p: 1 }}
          icon={<CircleOutlinedIcon />}
          checkedIcon={<CircleIcon />}
          indeterminateIcon={<ContrastIcon />}
          indeterminate={groupVisibility === "some"}
          checked={groupVisibility === "all"}
          onChange={handleChange}
        />
        <Typography
          sx={{ cursor: "pointer", opacity: someLayersCanBeVisible ? 1 : 0.3 }}
          onClick={switchCollapseState}
        >
          {groupLabel}
        </Typography>
        {info && <LayerInfo {...info} />}

        <IconButton onClick={switchCollapseState}>
          {collapseOpen ? (
            <KeyboardDoubleArrowUpIcon />
          ) : (
            <KeyboardDoubleArrowDownIcon />
          )}
        </IconButton>
      </Box>

      <Collapse in={collapseOpen}>
        {layerIDs.map((layerID) => (
          <Box
            key={layerID}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: 1,
              pl: "30px",
              overflowY: "auto",
            }}
          >
            <LayerCheckbox layerID={layerID} />
          </Box>
        ))}
      </Collapse>
    </>
  );
}
