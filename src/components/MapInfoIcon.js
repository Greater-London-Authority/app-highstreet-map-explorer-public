import React, { useState } from "react";

import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import InfoDialog from "./InfoDialog";

const MapInfoIcon = ({ infoDialogProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpen(true)} sx={{ ml: 1 }}>
        <InfoIcon fontSize="large" />
      </IconButton>
      <InfoDialog open={open} setOpen={setOpen} {...infoDialogProps} />
    </>
  );
};

export default MapInfoIcon;
