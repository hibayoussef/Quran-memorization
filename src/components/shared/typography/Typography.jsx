import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import {
  containerBoxStyles,
  labelTypographyStyles,
  valueTypographyStyles,
  ratingStyles,
} from "./Typography.styles";

const TypographyComponent = ({
  label,
  value,
  labelStyles = {},
  valueStyles = {},
  containerStyles = {},
  gap = 2,
  hideColon = false,
  ratingValue,
  ratings = [], 
  maxRating = 5,
  fontWeight,
  labelWidth = "120px"
}) => {
  if (!label && !value && ratingValue === undefined && ratings.length === 0)
    return null;

  return (
    <Box sx={containerBoxStyles(containerStyles, gap)}>
      {/* جزء التسمية */}
      {label && (
        <Typography sx={labelTypographyStyles(labelStyles, fontWeight)}>
          {label}
          {!hideColon &&
            label &&
            (value || ratingValue !== undefined || ratings.length > 0) &&
            ":"}
        </Typography>
      )}

      {ratings.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {ratings.map((rating, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: {
                  sm: 6, 
                  xs: 1
                },
                width: "100%", 
              }}
            >
              <Typography sx={{ minWidth: labelWidth, textAlign: "right", color: "text.secondary" }}>
                {rating.label}
              </Typography>
              <Rating
                value={rating.value}
                max={maxRating}
                readOnly
                sx={ratingStyles()}
              />
            </Box>
          ))}
        </Box>
      ) : ratingValue !== undefined ? (
        <Rating
          value={ratingValue}
          max={maxRating}
          readOnly
          sx={ratingStyles()}
        />
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
