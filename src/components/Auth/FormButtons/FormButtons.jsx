import { Box, Button } from "@mui/material";
import React from "react";
import ButtonLoader from "../../shared/button/ButtonLoader";
import { styles } from "./FormButtons.styles";

const FormButtons = ({ buttons, loading }) => {
  return (
    <Box sx={styles.container}>
      <Box
        sx={{
          display: "flex",
          justifyContent: buttons.length === 1 ? "center" : "space-between",
          width: "100%",
          gap: 2, // Add space between buttons
        }}
      >
        {buttons.map((button, index) => (
          <Box
            key={index}
            sx={{ width: buttons.length === 1 ? "100%" : "48%" }} // Adjust button width
          >
            {loading && button.loading ? (
              <ButtonLoader
                sx={styles.buttonLoader}
                fullWidth
                loading={true}
              >
                {button.text}
              </ButtonLoader>
            ) : (
              <Button
                sx={{
                  ...styles.button,
                  ...(button.text === "رجوع"
                    ? styles.backButton // Apply custom styles for "Back" button
                    : {}), // Default styles for other buttons
                }}
                type={button.type || "button"}
                fullWidth
                variant={button.text === "رجوع" ? "outlined" : "contained"} // Use "outlined" for "Back"
                onClick={button.onClick}
                disabled={button.disabled || loading}
              >
                {button.text}
              </Button>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FormButtons;
