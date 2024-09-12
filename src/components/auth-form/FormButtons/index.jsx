import React from "react";
import { Box, Button } from "@mui/material";
import ButtonLoader from "../../shared/button/ButtonLoader";

const FormButtons = ({ buttons, loading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 5,
      }}
    >
      {buttons.map((button, index) => (
        <Box key={index}>
          {loading && button.loading ? (
            <ButtonLoader
              sx={{
                color: "#fff",
                backgroundColor: "origin.main",
                "&:hover": { backgroundColor: "origin.hover" },
                width: 130,
              }}
              loading={true}
              fullWidth
            >
              {button.text}
            </ButtonLoader>
          ) : (
            <Button
              sx={{
                color: "#fff",
                backgroundColor: "origin.main",
                "&:hover": { backgroundColor: "origin.hover" },
                width: 130,
              }}
              type={button.type || "button"}
              fullWidth
              variant="contained"
              onClick={button.onClick}
              disabled={button.disabled || loading} // Add disabled state if needed
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
