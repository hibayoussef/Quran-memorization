// ButtonLoader.styles.js
export const buttonStyles = {
  width: 110,
  backgroundColor: "origin.main",
  "&:hover": {
    backgroundColor: "origin.main",
  },
};

export const loaderContainerStyles = {
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const textStyles = (loading) => ({
  visibility: loading ? "hidden" : "visible",
});
