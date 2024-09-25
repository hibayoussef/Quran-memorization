import { Box, Card, CardMedia } from "@mui/material";
import React from "react";

const MediaCard = ({
  imageUrl,
  title,
  maxWidth = 529,
  imageHeight = "auto", 
  margin, 
  borderRadius = "12px",
  showTitle = true, 
  cardContentStyles = {},
}) => {
  return (
    <Card sx={{ maxWidth }}>
      {/* Image Box with dynamic margin */}
      {margin ? (
        <>
          <Box sx={{ margin }}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt={title}
              sx={{
                borderRadius,
                objectFit: "cover",
                width: "100%",
                // height: imageHeight,
              }}
            />
          </Box>
        </>
      ) : (
        <>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={title}
            sx={{
              // borderRadius,
              objectFit: "cover",
              width: "100%",
              height: imageHeight,
            }}
          />
        </>
      )}
    </Card>
  );
};

export default MediaCard;
