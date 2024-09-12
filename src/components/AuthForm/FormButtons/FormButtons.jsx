import React from "react";
import { Box, Button } from "@mui/material";
import ButtonLoader from "../../shared/button/ButtonLoader";
import { styles } from "./FormButtons.styles";

const FormButtons = ({ buttons, loading }) => {
  return (
    <Box sx={styles.container}>
      {buttons.map((button, index) => (
        <Box key={index}>
          {loading && button.loading ? (
            <ButtonLoader sx={styles.buttonLoader} loading={true} fullWidth>
              {button.text}
            </ButtonLoader>
          ) : (
            <Button
              sx={styles.button}
              type={button.type || "button"}
              fullWidth
              variant="contained"
              onClick={button.onClick}
              disabled={button.disabled || loading}
            >
              {button.text}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default FormButtons;
