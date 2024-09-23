export const containerBoxStyles = (containerStyles, gap) => ({
  display: "flex",
  alignItems: "center",
  gap: gap,
  ...containerStyles,
});

export const labelTypographyStyles = (labelStyles, fontWeight) => ({
  fontWeight: fontWeight || labelStyles.fontWeight || "bold", // Use the passed fontWeight, labelStyles fontWeight if present, otherwise use "bold"
  ...labelStyles,
});

export const valueTypographyStyles = (valueStyles) => ({
  ...valueStyles,
});
