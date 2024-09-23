export const containerBoxStyles = (containerStyles, gap) => ({
  display: "flex",
  alignItems: "center",
  gap: gap,
  ...containerStyles,
});

export const labelTypographyStyles = (labelStyles) => ({
  fontWeight: "bold",
  ...labelStyles,
});

export const valueTypographyStyles = (valueStyles) => ({
  ...valueStyles,
});
