export const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    alignItems: "stretch", // Make buttons full width
    mt: 5,
  },
  buttonLoader: {
    color: "#fff",
    backgroundColor: "secondary.main",
  },
  button: {
    color: "#fff",
    backgroundColor: "secondary.main",
    // "&:hover": { backgroundColor: "origin.hover" },
  },
  backButton: {
    backgroundColor: "transparent", // Transparent background for "Back" button
    border: "1px solid", // Border for "Back" button
    borderColor: "secondary.main", // Secondary border color
    color: "secondary.main", // Secondary text color
  },
};
