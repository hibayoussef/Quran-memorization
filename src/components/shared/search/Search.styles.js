// DynamicSearchField.styles.js
export const searchFieldStyles = (
  borderRadius,
  borderColor,
  hoverBorderColor,
  focusedBorderColor,
  isSmallScreen,
  width,
  customStyles
) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: borderRadius,
    "& fieldset": {
      borderColor: borderColor,
    },
    "&:hover fieldset": {
      borderColor: hoverBorderColor,
    },
    "&.Mui-focused fieldset": {
      borderColor: focusedBorderColor,
    },
  },
  width: isSmallScreen ? "100%" : width,
  ...customStyles,
});
