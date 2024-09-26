import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { containerStyles, labelStyles, ratingStyles } from "./Rating.styles";

const RatingComponent = ({
  label,
  ratingValue = 0,
  maxRating = 5,
  containerCustomStyles = {},
  labelCustomStyles = {},
  ratingCustomStyles = {},
  labelWidth = "100px",
}) => {
  return (
    <Box sx={containerStyles(containerCustomStyles)}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            ...labelStyles(labelCustomStyles),
            width: labelWidth,
            textAlign: "right",
          }}
        >
          {label}
        </Typography>
        <Rating
          value={ratingValue}
          max={maxRating}
          readOnly
          sx={ratingStyles(ratingCustomStyles)}
        />
      </Box>
    </Box>
  );
};

export default RatingComponent;
