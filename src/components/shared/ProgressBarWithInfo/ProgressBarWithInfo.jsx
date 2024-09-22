import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";
import {
  containerStyle,
  progressBarStyle,
  textContainerStyle,
  leftTextStyle,
  rightTextStyle,
} from "./ProgressBarWithInfo.styles";

const ProgressBarWithInfo = ({ value, leftText, rightText }) => {
  return (
    <Box sx={containerStyle}>
      {/* Progress Bar */}
      <LinearProgress
        variant="determinate"
        value={value}
        sx={progressBarStyle}
      />

      {/* Text Information below Progress Bar */}
      <Box sx={textContainerStyle}>
        {/* Left text (e.g., "6 hours, 40 min") */}
        <Typography sx={leftTextStyle}>{leftText}</Typography>

        {/* Right text (e.g., "70%") */}
        <Typography sx={rightTextStyle}>{rightText}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBarWithInfo;
