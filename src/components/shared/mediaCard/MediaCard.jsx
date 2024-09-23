// CertificateCard.jsx
import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

const MediaCard = ({ imageUrl, title }) => {
  return (
    <Card sx={{ maxWidth: 529}}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: "cover", width: "100%" }}
      />
      </Card>
  );
};

export default MediaCard;
