import React from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import { useRecoilState } from "recoil";
import { tourAtom, skipTourAtom } from "./tourAtom";

import {
  TourStep1,
  TourStep2,
  TourStep3,
  TourStep4,
  TourStep5,
  TourStepFinal,
} from "../copy/tour";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";

const getTourSteps = (isMobile) =>
  [
    {
      target: ".map-test-classname",
      content: <TourStep1 />,
      placement: "bottom",
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
    {
      target: ".radius-slider",
      content: <TourStep2 />,
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
    {
      target: ".layers-tabs",
      content: <TourStep3 />,
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
    {
      target: ".layer-check-boxes",
      content: <TourStep4 />,
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
    !isMobile && {
      target: ".drawer-actions",
      content: <TourStep5 />,
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
    {
      target: ".map-test-classname",
      content: <TourStepFinal />,
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true,
      },
    },
  ].filter((element) => Boolean(element));

const Tour = () => {
  const [tourState, setTourState] = useRecoilState(tourAtom);
  const [skipTour, setSkipTour] = useRecoilState(skipTourAtom);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleJoyrideCallback = (data) => {
    const { action, index, status, type } = data;

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      // Update state to advance the tour
      setTourState((currentTourState) => ({
        ...currentTourState,
        run: action !== ACTIONS.CLOSE,
        stepIndex: index + (action === ACTIONS.PREV ? -1 : 1),
      }));
      // setTourRun(action !== ACTIONS.CLOSE);
    } else if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
      // Need to set our running state to false, so we can restart if we click start again.
      setTourState((currentTourState) => ({ ...currentTourState, run: false }));
      setSkipTour(true);
    }
  };

  return (
    <>
      {!skipTour && (
        <Joyride
          {...tourState}
          showSkipButton={true}
          callback={handleJoyrideCallback}
          debug
          locale={{
            back: "Back",
            close: "Close",
            last: "Finish",
            next: "Next",
            skip: "Skip Tour",
          }}
          steps={getTourSteps(isMobile)}
          styles={{
            options: {
              primaryColor: "#00AEEF",
              zIndex: 1000000,
            },
            buttonNext: {
              borderRadius: 0,
            },
          }}
        />
      )}
    </>
  );
};

export default Tour;
