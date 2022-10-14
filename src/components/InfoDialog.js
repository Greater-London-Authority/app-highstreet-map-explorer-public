import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RouteIcon from "@mui/icons-material/Route";
import { useSetRecoilState } from "recoil";
import { skipTourAtom, tourMoveToStepSelector } from "../tour/tourAtom";

export default function InfoDialog({
  open,
  setOpen,
  DialogTitle: InfoDialogTitle,
  DialogBody,
  showCiuLogo = true,
  showTour = true,
}) {
  const tourMoveToStep = useSetRecoilState(tourMoveToStepSelector);
  const setSkipTour = useSetRecoilState(skipTourAtom);
  const handleClose = () => {
    setOpen(false);
  };

  const handleRestartTour = () => {
    setOpen(false);
    tourMoveToStep(0);
    setSkipTour(false);
  };

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="info-dialog"
      PaperProps={{ sx: { borderRadius: 0 } }}
    >
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <InfoDialogTitle />
          <IconButton onClick={handleClose} size="large" variant="contained">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent sx={{ backgroundColor: "white" }}>
        <DialogContentText
          id="alert-dialog-slide-description"
          sx={{ color: "black", pt: 2 }}
          component="div"
        >
          <DialogBody />
        </DialogContentText>
        {(showCiuLogo || showTour) && (
          <Grid container justifyContent={"space-between"}>
            <Grid item xs={7}>
              {showCiuLogo && (
                <Box sx={{ display: "flex", flexDirection: "column", mt: 2 }}>
                  <img
                    width={120}
                    src="./logo_ciu.svg"
                    alt="City Intelligence Logo"
                  />
                  <Typography variant="caption">
                    Map designed and developed by City Intelligence
                  </Typography>
                </Box>
              )}
            </Grid>
            <Grid item xs={5}>
              {showTour && (
                <Button
                  variant="contained"
                  startIcon={<RouteIcon />}
                  onClick={handleRestartTour}
                >
                  Restart Tour
                </Button>
              )}
            </Grid>
          </Grid>
        )}
      </DialogContent>
    </Dialog>
  );
}
