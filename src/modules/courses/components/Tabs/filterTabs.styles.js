// Tabs.styles.js
import { styled } from "@mui/material/styles";
import { Tabs, Tab } from "@mui/material";

export const StyledTabs = styled(Tabs)(({ theme }) => ({
  // Optionally, you can style the tabs container here if needed
  // If you want to change the position or the style of the tab indicator, you can do it here
  "& .MuiTabs-indicator": {
    backgroundColor: "#fff", // Color for the tab indicator
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
    backgroundColor: theme.palette.secondary.main, // Background color for selected tab
    color: "#fff", // Text color for selected tab
    // borderBottom: `2px solid ${theme.palette.secondary.main}`, // Red bottom border for selected tab
  },
}));
