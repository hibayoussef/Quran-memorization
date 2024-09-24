import React from "react";
import { Box, Grid } from "@mui/material";
import imageUrl from '../../../assets/images/E5las.png'
const HalfLayout = ({  children }) => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* القسم الأول لصورة */}

      {/* القسم الثاني لمكون "First" */}
      <Grid
        item
        xs={12}
        sm={6}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        {children}
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "red",
        }}
      >
        <img
          src={imageUrl}
          alt={imageUrl}
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Grid>
    </Grid>
  );
};

export default HalfLayout;
