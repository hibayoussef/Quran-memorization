import { Grid, Typography } from "@mui/material";
import React from "react";
import { styles } from "./FormHeader.styles";

const FormHeader = ({ title }) => {
  return (
    <Grid
      container={styles.container.container}
      direction={styles.container.direction}
      justifyContent={styles.container.justifyContent}
      alignItems={styles.container.alignItems}
    >
      <Typography variant="h6" sx={styles.title}>
        {title}
      </Typography>
    </Grid>
  );
};

export default FormHeader;
