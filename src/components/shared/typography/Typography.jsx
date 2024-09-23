import React from "react";
import { Box, Typography } from "@mui/material";
import {
  containerBoxStyles,
  labelTypographyStyles,
  valueTypographyStyles,
} from "./Typography.styles"; // استيراد الأنماط

const TypographyComponent = ({
  label,
  value,
  labelStyles = {},
  valueStyles = {},
  containerStyles = {},
  gap = 1,
  hideColon = false,
}) => {
  if (!label && !value) return null;

  return (
    <Box sx={containerBoxStyles(containerStyles, gap)}>
      {label && (
        <Typography sx={labelTypographyStyles(labelStyles)}>
          {label}
          {!hideColon && label && value && ":"}
        </Typography>
      )}

      {value && (
        <Typography sx={valueTypographyStyles(valueStyles)}>{value}</Typography>
      )}
    </Box>
  );
};

export default TypographyComponent;
