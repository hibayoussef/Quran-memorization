// /modules/shared/components/CustomAppBar/CustomAppBar.jsx

import React from "react";
import { Typography, IconButton, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { StyledAppBar, StyledToolbar, StyledBox } from "./CustomAppBar.styles";
import CustomDrawer from "./CustomDrawer"; // Import the drawer component

const CustomAppBar = React.memo(
  ({ title, height, backgroundColor, leftContent, rightContent }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isSmallScreen = useMediaQuery((theme) =>
      theme.breakpoints.down("sm")
    );

    // Handle drawer open/close
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };

    return (
      <>
        <StyledAppBar
          position="static"
          height={height}
          backgroundColor={backgroundColor}
        >
          <StyledToolbar>
            {isSmallScreen ? (
              <>
                <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  sx={{ flexGrow: 1, textAlign: "center" }}
                >
                  {title}
                </Typography>
              </>
            ) : (
              <>
                <StyledBox>{leftContent}</StyledBox>
                <Typography variant="h6">{title}</Typography>
                <StyledBox>{rightContent}</StyledBox>
              </>
            )}
          </StyledToolbar>
        </StyledAppBar>

        {/* Drawer for small screens */}
        <CustomDrawer drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
      </>
    );
  }
);

export default CustomAppBar;
