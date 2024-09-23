import React from "react";
import { Box, Typography } from "@mui/material";
import { Rating } from "@mui/material";
import {
  containerBoxStyles,
  labelTypographyStyles,
  valueTypographyStyles,
} from "./Typography.styles";

const TypographyComponent = ({
  label,
  value,
  labelStyles = {},
  valueStyles = {},
  containerStyles = {},
  gap = 1,
  hideColon = false,
  ratingValue,
  fontWeight, // Added this prop
}) => {
  if (!label && !value && !ratingValue) return null;

  return (
    <Box sx={containerBoxStyles(containerStyles, gap)}>
      {label && (
        <Typography sx={labelTypographyStyles(labelStyles, fontWeight)}>
          {label}
          {!hideColon && label && (value || ratingValue) && ":"}
        </Typography>
      )}

      {ratingValue !== undefined ? (
        <Rating name="size-medium" defaultValue={ratingValue} readOnly />
      ) : (
        value && (
          <Typography sx={valueTypographyStyles(valueStyles)}>
            {value}
          </Typography>
        )
      )}
    </Box>
  );
};

export default TypographyComponent;
