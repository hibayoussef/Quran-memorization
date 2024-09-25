import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const BackgroundImage = ({
  imageUrl,
  size = "cover",
  position = "center",
  height = "100%",
  width = "100%",
  borderRadius
}) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: size,
        backgroundPosition: position,
        height: height,
        width: width,
        backgroundRepeat: "no-repeat",
        borderRadius: borderRadius,
      }}
    />
  );
};

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BackgroundImage;
