// NoData.js
import React from "react";
import { StyledBox, StyledTypography } from "./NoData.styles"; 

const NoData = ({ text }) => {
  return (
    <StyledBox>
      <StyledTypography>{text}</StyledTypography>
    </StyledBox>
  );
};

export default NoData;
