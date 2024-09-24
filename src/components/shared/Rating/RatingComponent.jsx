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
  labelWidth = "100px", // تحديد عرض ثابت للنص
}) => {
  return (
    <Box sx={containerStyles(containerCustomStyles)}>
      {/* ضبط الحاوية لتظهر التقييم والنص في نفس المحاذاة */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* تحديد عرض ثابت للنص لضمان أن جميع التسميات تبدأ بنفس المكان */}
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
