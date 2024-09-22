// ReusablePagination.js
import React from "react";
import { Pagination, Stack } from "@mui/material";
import { paginationStyles } from "./pagination.styles";

const PaginationComponent = ({
  count = 10, // Total pages
  page = 1, // Current page
  variant = "outlined", // Default variant
  shape = "rounded", // Default shape
  onChange, // Callback function when page changes
  color = "#2C3971", // Default color
  borderRadius = "8px", // Control borderRadius, default to 8px
}) => {
  return (
    <Stack spacing={2} alignItems="end" padding="1rem 1rem">
      <Pagination
        count={count}
        page={page}
        variant={variant}
        shape={shape}
        onChange={onChange}
        sx={paginationStyles(color, borderRadius)} // Use the styles from styles.js
      />
    </Stack>
  );
};

export default PaginationComponent;
