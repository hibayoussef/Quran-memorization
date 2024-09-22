// styles.js
export const paginationStyles = (color, borderRadius) => ({
  "& .MuiPaginationItem-root": {
    color: color, // Set the default color
    borderRadius: borderRadius, // Set the borderRadius
    borderColor: color, // Set border color if variant="outlined"
    "&:hover": {
      backgroundColor: color, // Set background color on hover
      color: "#fff", // Set text color to white on hover
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    color: color, // Set ellipsis color
  },
  "& .Mui-selected": {
    backgroundColor: color, // Set background color for selected item
    color: "#fff", // Set text color to white when selected
    "&:hover": {
      backgroundColor: color, // Keep the same color on hover for selected
    },
  },
  // Arrow customization
  "& .MuiPaginationItem-icon": {
    color: color, // Set the arrow color
  },
});
