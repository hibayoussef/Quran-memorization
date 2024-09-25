// ButtonLoader.js
import React from "react";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import PropTypes from "prop-types";
import {
  buttonStyles,
  loaderContainerStyles,
  textStyles,
} from "./ButtonLoader.styles";

const ButtonLoader = (props) => {
  const { loading, disableOnLoading, ...rest } = props;

  return (
    <Button
      {...rest}
      disabled={disableOnLoading === true && loading}
      sx={buttonStyles}
    >
      {loading && (
        <Box sx={loaderContainerStyles}>
          <CircularProgress sx={{ color: "white" }} size="25px" />
        </Box>
      )}
      <Typography sx={textStyles(loading)}>{props.children}</Typography>
    </Button>
  );
};

ButtonLoader.propTypes = {
  loading: PropTypes.bool,
  disableOnLoading: PropTypes.bool,
};

export default ButtonLoader;
