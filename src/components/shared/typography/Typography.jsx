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
  gap = 1,
  hideColon = false,
  ratingValue,
  ratings = [], // مصفوفة من التقييمات
  maxRating = 5,
  fontWeight,
  labelWidth = "120px", // إضافة خاصية labelWidth لضبط عرض التسميات
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

      {/* عرض التقييمات إن وجدت */}
      {ratings.length > 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {ratings.map((rating, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between", // لضمان أن التقييم يظهر في النهاية
                alignItems: "center",
                gap: 1,
                width: "100%", // اجعل الحاوية كاملة العرض
              }}
            >
              {/* الجزء الخاص بالتسمية مع تحديد عرض ثابت */}
              <Typography sx={{ minWidth: labelWidth, textAlign: "right", color: "text.secondary" }}>
                {rating.label}
              </Typography>
              {/* الجزء الخاص بالتقييم */}
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
        // عرض القيمة النصية إن وجدت
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
