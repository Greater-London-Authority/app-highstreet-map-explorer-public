import React, { useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import InfoDialog from "./InfoDialog";

import { Typography } from "@mui/material";

const LayerInfo = ({
  shortDescription,
  longDescription,
  longDescriptionTitle,
}) => {
  const [longDescriptionOpen, setLongDescriptionOpen] = useState(false);
  if (!shortDescription && !longDescription) return null;

  const tooltipTitle = longDescription
    ? shortDescription
      ? `${shortDescription} Click here to read more.`
      : "Click here to read more."
    : shortDescription;

  return (
    <>
      <Tooltip title={tooltipTitle} placement="top">
        {longDescription ? (
          <IconButton onClick={() => setLongDescriptionOpen(true)}>
            <InfoIcon fontSize="small"></InfoIcon>
          </IconButton>
        ) : (
          <InfoIcon fontSize="small" sx={{ pl: 1 }}></InfoIcon>
        )}
      </Tooltip>
      {longDescription && (
        <InfoDialog
          open={longDescriptionOpen}
          setOpen={setLongDescriptionOpen}
          DialogTitle={
            typeof longDescriptionTitle === "string"
              ? () => <span>{longDescriptionTitle}</span>
              : longDescriptionTitle
          }
          DialogBody={
            typeof longDescription === "string"
              ? () => (
                  <Typography variant="body1" paragraph>
                    {longDescription}
                  </Typography>
                )
              : longDescription
          }
          showCiuLogo={false}
          showTour={false}
        />
      )}
    </>
  );
};

export default LayerInfo;
