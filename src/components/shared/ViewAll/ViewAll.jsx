import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import TypographyComponent from "../typography/Typography";
import {
  showAllTextStyle,
  titleStyle,
  viewAllContainer,
} from "./ViewAll.styles"; // Import styles

const ViewAll = ({ title = "العنوان:", showAllText, redirectTo }) => {
  const navigate = useNavigate(); // Initialize navigate

  const handleViewAllClick = () => {
    if (redirectTo) {
      navigate(redirectTo); // Redirect to the specified path
    }
  };

  return (
    <Box sx={viewAllContainer}>
      <Grid container alignItems="center" justifyContent="space-between">
        {/* Right-aligned title */}
        <Grid item>
          <TypographyComponent
            label={title}
            labelStyles={titleStyle}
            hideColon={false}
          />
        </Grid>
        {showAllText && (
          <Grid item>
            <Typography
              variant="subtitle1"
              sx={showAllTextStyle}
              onClick={handleViewAllClick} // Handle click event
              style={{ cursor: "pointer" }} // Add cursor pointer
            >
              {showAllText}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ViewAll;
