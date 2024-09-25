export const containerStyles = (containerCustomStyles) => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
  width: "100%",
  ...containerCustomStyles,
});

export const labelStyles = (labelCustomStyles) => ({
  fontWeight: "bold",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis", 
  fontSize: "16px",
  direction: "rtl",
  ...labelCustomStyles,
  color: "black",
});

export const ratingStyles = (ratingCustomStyles) => ({
  fontSize: "20px",
  ...ratingCustomStyles,
  color: "black"
});
