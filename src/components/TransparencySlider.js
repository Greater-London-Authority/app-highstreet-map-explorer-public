import React from "react";

import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {
  Box,
  IconButton,
  Slider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRecoilState } from "recoil";
import { layerDefOpacitySelector } from "../layerDefs/selectors";

const MAX_OPACITY = 1;
const MIN_OPACITY = 0;

export default function TransparencySlider({ layerID }) {
  const [opacity, setOpacity] = useRecoilState(
    layerDefOpacitySelector(layerID)
  );

  const theme = useTheme();
  if (typeof opacity !== "number") {
    return null;
  }
  const step = (MAX_OPACITY - MIN_OPACITY) / 10;
  const buttonStep = step;
  const increaseSlider = () => {
    if (opacity === MAX_OPACITY) {
      return;
    }
    if (roundedAddition(opacity, buttonStep) > MAX_OPACITY) {
      setOpacity(MAX_OPACITY);
      return;
    }
    setOpacity((currentOpacity) => roundedAddition(currentOpacity, buttonStep));
  };

  const decreaseSlider = () => {
    if (opacity === MIN_OPACITY) {
      return;
    }
    if (roundedSubtraction(opacity, buttonStep) < MIN_OPACITY) {
      setOpacity(MIN_OPACITY);
      return;
    }
    setOpacity((currentOffset) =>
      roundedSubtraction(currentOffset, buttonStep)
    );
  };
  return (
    <Box
      sx={{
        mb: 1,
        ml: 3,
      }}
    >
      <Typography variant="caption" id="transparency-slider-title">
        Transparency:
      </Typography>
      <Stack
        spacing={2}
        direction="row"
        sx={{
          mb: 1,
          ml: 3,
          width: "350px",
          maxWidth: `calc(100% - ${theme.spacing(4)})`,
        }}
        alignItems="center"
      >
        <IconButton
          onClick={decreaseSlider}
          disabled={opacity === MIN_OPACITY}
          color="primary"
        >
          <RemoveCircleIcon />
        </IconButton>
        <Slider
          size="small"
          value={opacity}
          aria-label="Transparency"
          max={MAX_OPACITY}
          min={MIN_OPACITY}
          step={step}
          onChange={(event) => {
            setOpacity(event.target.value);
          }}
          marks
        />
        <IconButton
          onClick={increaseSlider}
          disabled={opacity === MAX_OPACITY}
          color="primary"
        >
          <AddCircleIcon />
        </IconButton>
      </Stack>
    </Box>
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
