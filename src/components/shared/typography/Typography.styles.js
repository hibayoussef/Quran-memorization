// ملف الأنماط لمكون TypographyComponent

export const containerBoxStyles = (containerStyles, gap) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: gap,
  flexWrap: {
    sm: "nowrap",
    xs: "wrap",
  }, 

  width: "100%", 
  ...containerStyles,
});

export const labelTypographyStyles = (labelStyles, fontWeight) => ({
  fontWeight: fontWeight || labelStyles.fontWeight || "bold",
  whiteSpace: "nowrap", 
  fontSize: "16px",
  direction: "rtl", 
  ...labelStyles,
});

export const valueTypographyStyles = (valueStyles) => ({
  ...valueStyles,
});

export const ratingStyles = () => ({
  fontSize: "20px",
  marginLeft: "5px",
});
