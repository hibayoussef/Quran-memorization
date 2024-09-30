import { Grid } from "@mui/material";
import React from "react";
import imageUrl from '../../../assets/images/E5las.png';
import BackgroundImage from "../../../../../components/BackgroundImage/BackgroundImage";
const HalfLayout = ({  children }) => {
  return (
    <Grid container sx={{ height: "100vh", padding: "1rem" }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          marginTop: "3rem",
        }}
      >
        <BackgroundImage
          imageUrl={imageUrl}
          height="80%"
          width="85%"
          borderRadius="16px"
        />
      </Grid>
    </Grid>
  );
};

export default HalfLayout;
