// Header.js
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import {
  viewAllContainer,
  titleStyle,
  showAllTextStyle,
} from "./ViewAll.styles"; // Import styles
import TypographyComponent from "../typography/Typography";

const ViewAll = ({ title = "العنوان:", showAllText }) => {
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
            <Typography variant="subtitle1" sx={showAllTextStyle}>
              {showAllText}
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default ViewAll;
