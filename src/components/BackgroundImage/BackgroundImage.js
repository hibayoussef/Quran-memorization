import { Box } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { backgroundImageStyles } from "./BackgroundImage.styles";

const BackgroundImage = ({ imageUrl, size = "cover", position = "center" }) => {
  return (
    <Box
      sx={{
        ...backgroundImageStyles.root,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: size,
        backgroundPosition: position,
      }}
    />
  );
};

BackgroundImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  position: PropTypes.string,
};

export default BackgroundImage;
