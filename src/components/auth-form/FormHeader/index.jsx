import React from 'react';
import { Grid, Typography } from "@mui/material";

const FormHeader = ({ title }) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h6" sx={{ color: "gray", mt: "10px" }}>
        {title}
      </Typography>
    </Grid>
  );
};

export default FormHeader;
