// Tabs.jsx
import { Box } from "@mui/material";
import React, { useState } from "react";
import { StyledTab, StyledTabs } from "./FilterTabs.styles";

const FilterTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledTabs value={value} onChange={handleChange}>
        <StyledTab label="جميع الدورات" />
        <StyledTab label="دورات القرآن" />
        <StyledTab label="دورات الحديث" />
      </StyledTabs>

      {/* Content based on selected tab */}
      {/* <Box sx={{ p: 2 }}>
        {value === 0 && <Typography>Content for جميع الدورات</Typography>}
        {value === 1 && <Typography>Content for دورات القرآن</Typography>}
        {value === 2 && <Typography>Content for دورات الحديث</Typography>}
      </Box> */}
    </Box>
  );
};

export default FilterTabs;
