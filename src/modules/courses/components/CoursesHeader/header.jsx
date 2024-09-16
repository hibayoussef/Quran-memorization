import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { headerStyles } from "./header.styles";

const CoursesHeader = ({
  imageUrl,
  size = "cover",
  position = "center",
  title,
}) => {
  return (
    <Box
      sx={{
        ...headerStyles.root,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: size,
        backgroundPosition: position,
        display: "flex", // Use Flexbox
        justifyContent: "center", // Center horizontally
        alignItems: "center", // Center vertically
        color: "#fff", // Ensure text is visible
        textAlign: "center", // Center text
      }}
    >
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

CoursesHeader.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.string,
  position: PropTypes.string,
  title: PropTypes.string, // Add title as prop
};

export default CoursesHeader;
