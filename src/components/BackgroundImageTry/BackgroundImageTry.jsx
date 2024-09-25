import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const BackgroundImageTry = ({
  imageUrl,
  size = "cover",
  position = "center",
  height = "100%", // Full height of the viewport
  width = "100vw", // Full width of the viewport
  borderRadius,
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
        position: "absolute", // Ensure it covers the parent
        top: 0,
        left: 0,
        zIndex: -1, // Send it to the back
      }}
    />
  );
};


BackgroundImageTry.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  position: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default BackgroundImageTry;
