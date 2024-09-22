// ResponsiveTitles.styles.js
export const containerStyles = {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: {
    xs: "column", // On small screens, stack the items
    sm: "row", // On larger screens, display items in a row
  },
  gap: 2, // Add some spacing between items
  padding: 1,
};

export const titleSectionStyles = {
  display: "flex",
  flexDirection: "row",
  gap: 0.5,
  color: "card.secondary",
};

export const boldTextStyles = {
  fontSize: "14px",
  fontWeight: "bold",
  whiteSpace: "nowrap", // Prevent text from wrapping
};

export const normalTextStyles = {
  fontSize: "14px",
};
