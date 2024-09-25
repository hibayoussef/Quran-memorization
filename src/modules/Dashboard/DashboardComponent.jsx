import { Box, Divider } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import DrawerComponent from "./components/Drawer/Drawer";

export const drawerWidth = 270;
const DashboardComponent = () => {
  const [open, setOpen] = useState(true);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.main",
        minHeight: "100vh",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row-reverse",
        }}
      >
        <DrawerComponent />
      </Box>

      
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginInlineEnd: open ? { xs: 0, md: 33 } : 10
        }}
      >
        <Box sx={{ marginTop: "100px", marginX: { xs: "1px", md: "50px" } }}>
          <Outlet />
        </Box>
      </Box>
      <Box>
        <Divider />

        {/* <Footer open={open} /> */}
      </Box>
    </Box>
  );
};

export default DashboardComponent;
