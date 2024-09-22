import React from "react";
import { Box, Typography } from "@mui/material";
import {
  containerStyles,
  titleSectionStyles,
  boldTextStyles,
  normalTextStyles,
} from "./general.styles"; 

const GeneralDescription = ({ title1, value1, title2, value2 }) => {
  return (
    <Box sx={containerStyles}>
      {/* Title 1 Section */}
      <Box sx={titleSectionStyles}>
        <Typography sx={boldTextStyles}>{title1}:</Typography>
        <Typography sx={normalTextStyles}>{value1}</Typography>
      </Box>

      {/* Title 2 Section */}
      <Box sx={titleSectionStyles}>
        <Typography sx={boldTextStyles}>{title2}:</Typography>
        <Typography sx={normalTextStyles}>{value2}</Typography>
      </Box>
    </Box>
  );
};

export default GeneralDescription;
