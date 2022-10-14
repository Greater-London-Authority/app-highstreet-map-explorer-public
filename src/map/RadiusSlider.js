import React from "react";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { IconButton, Slider, Stack, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { bufferRadiusAtom } from "./selectedRegionAtoms";

const MAX_RADIUS = 1.4;
const MIN_RADIUS = 0.02;
const STEP = 0.2;

const VALUE_LABELS = {
  0.02: "20m",
  0.2: "200m",
  0.4: "400m",
  0.6: "600m",
  0.8: "800m",
  1: "1.0km",
  1.2: "1.2km",
  1.4: "1.4km",
};

export default function RadiusSlider({ isMobile = false, sx, ...other }) {
  const [bufferRadius, setBufferRadius] = useRecoilState(bufferRadiusAtom);

  const marks = Object.keys(VALUE_LABELS).map((value) => ({
    value: Number(value),
    label: VALUE_LABELS[value],
  }));

  const buttonStep = STEP;
  const increaseSlider = () => {
    if (bufferRadius === MAX_RADIUS) {
      return;
    }
    if (roundedAddition(bufferRadius, buttonStep) > MAX_RADIUS) {
      setBufferRadius(MAX_RADIUS);
      return;
    }
    setBufferRadius((currentOffset) =>
      roundedAddition(currentOffset, buttonStep)
    );
  };

  const decreaseSlider = () => {
    if (bufferRadius === MIN_RADIUS) {
      return;
    }
    if (roundedSubtraction(bufferRadius, buttonStep) < MIN_RADIUS) {
      setBufferRadius(MIN_RADIUS);
      return;
    }
    setBufferRadius((currentOffset) =>
      roundedSubtraction(currentOffset, buttonStep)
    );
  };
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        mb: 3,
        ml: 3,
        ...sx,
      }}
      alignItems="center"
      className="radius-slider"
    >
      <Typography variant="caption" id="input-slider">
        Radius:
      </Typography>
      <IconButton
        onClick={decreaseSlider}
        disabled={bufferRadius === MIN_RADIUS}
        color="primary"
      >
        <RemoveCircleIcon />
      </IconButton>
      <Slider
        size={isMobile ? "small" : "medium"}
        value={bufferRadius}
        aria-label="Buffer Radius"
        valueLabelDisplay={isMobile ? "on" : "off"}
        valueLabelFormat={(value) => VALUE_LABELS[value]}
        max={MAX_RADIUS}
        min={MIN_RADIUS}
        step={STEP}
        marks={marks}
        onChange={(event) => {
          setBufferRadius(event.target.value);
        }}
      />
      <IconButton
        onClick={increaseSlider}
        disabled={bufferRadius === MAX_RADIUS}
        color="primary"
      >
        <AddCircleIcon />
      </IconButton>
    </Stack>
  );
}

const roundedAddition = (value1, value2) => {
  const result = value1 + value2;
  return Math.round(result * 10) / 10;
};

const roundedSubtraction = (value1, value2) => {
  const result = value1 - value2;
  return Math.round(result * 10) / 10;
};
