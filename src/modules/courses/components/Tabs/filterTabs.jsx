// FilterTabs.jsx
import { Box } from "@mui/material";
import React, { useState } from "react";
import { StyledTab, StyledTabs } from "./FilterTabs.styles";

const FilterTabs = ({ tabsData }) => {
  const [value, setValue] = useState(0);
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ marginBottom: "1rem", width: "100%" }}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        // centered={!isSmallScreen} // Center tabs only on larger screens
      >
        {tabsData.map((tab, index) => (
          <StyledTab key={index} label={tab.label} />
        ))}
      </StyledTabs>
    </Box>
  );
};

export default FilterTabs;
