import React from "react";

import PropTypes from "prop-types";

import { Box, Tab, Tabs, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ParkIcon from "@mui/icons-material/Park";
import MapIcon from "@mui/icons-material/Map";
import GroupsIcon from "@mui/icons-material/Groups";
import CategoryCheckboxList from "../checkboxes/CategoryCheckboxList";
import styled from "@emotion/styled";
import { useRecoilValue } from "recoil";
import { selectedHighstreetAtom } from "../map/selectedRegionAtoms";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#1b2021",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function DrawerTabsContainer({ sx, ...other }) {
  const [tabValue, setTabValue] = React.useState(0);
  const highstreet = useRecoilValue(selectedHighstreetAtom);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!highstreet) {
    return (
      <StyledBox
        sx={{
          pl: 2,
          pt: 2,
        }}
      >
        <Typography variant="h5">
          Select a high street on the map to begin exploring.
        </Typography>
      </StyledBox>
    );
  }

  return (
    <Box sx={{ maxHeight: "100%", height: "100%", ...sx }} {...other}>
      <Typography variant="h5" sx={{ pt: 2, pb: 2, pl: 2 }}>
        Exploring: {highstreet?.properties["highstreet_name"]}
      </Typography>
      <Box className="layers-tabs" sx={{ height: "80px" }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          aria-label="map-tabs"
          selectionFollowsFocus
          variant="fullWidth"
        >
          <Tab
            icon={<DesignServicesIcon />}
            disableRipple
            label={"Planning"}
            aria-label="planning"
          />

          <Tab
            icon={<GroupsIcon />}
            disableRipple
            label={"Culture"}
            aria-label="culture"
          />
          <Tab
            icon={<ParkIcon />}
            disableRipple
            label={"Environment"}
            aria-label="environment"
          />
          <Tab
            icon={<MapIcon />}
            disableRipple
            label={"Context"}
            aria-label="context"
          />
        </Tabs>
      </Box>
      <Box
        className="layer-check-boxes"
        sx={{
          height: "100%",
          overflowY: "auto",
        }}
      >
        <TabPanel value={tabValue} index={0}>
          <CategoryCheckboxList category="planning" />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <CategoryCheckboxList category="culture" />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
          <CategoryCheckboxList category="environment" />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
          <CategoryCheckboxList category="base" />
        </TabPanel>
      </Box>
    </Box>
  );
}

export default DrawerTabsContainer;
