// CertificateCard.jsx
// import React from "react";
// import { Card, CardMedia, CardContent, Typography } from "@mui/material";

// const MediaCard = ({ imageUrl, title }) => {
//   return (
//     <Card sx={{ maxWidth: 529}}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={imageUrl}
//         alt={title}
//         sx={{ objectFit: "cover", width: "100%" }}
//       />
//       </Card>
//   );
// };

// export default MediaCard;

// MediaCard.jsx
import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const MediaCard = ({
  imageUrl,
  title,
  maxWidth = 529, // default maxWidth, but can be overridden
  imageHeight = "auto", // dynamic image height
  margin, // default margin
  borderRadius = "12px", // borderRadius, dynamic
  showTitle = true, // optional title rendering
  cardContentStyles = {}, // custom styles for CardContent
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

