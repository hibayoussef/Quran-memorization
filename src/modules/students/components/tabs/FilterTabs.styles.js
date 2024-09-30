// Tabs.styles.js
import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#fff",
  },
}));

export const StyledTab = styled(Tab)(({ theme, selected }) => ({
  borderRadius: "4px",
  minWidth: 120,
  height: 40,
  margin: "0 4px",
  textTransform: "none",
  backgroundColor: selected ? theme.palette.secondary.main : "transparent",
  color: selected ? "#fff" : theme.palette.secondary.main,
  border: `1px solid ${theme.palette.secondary.main}`,
  "&.Mui-selected": {
    backgroundColor: theme.palette.secondary.main,
    color: "#fff",
  },

  // Add styles for smaller screens
  [theme.breakpoints.down("sm")]: {
    minWidth: 80, // Adjust the minimum width for small screens
    height: 30, // Adjust the height for small screens
    margin: "0 2px", // Reduce margin
    fontSize: "0.75rem", // Reduce font size
  },
}));
