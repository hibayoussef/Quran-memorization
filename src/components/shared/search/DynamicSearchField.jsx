// DynamicSearchField.jsx
import React, { useState } from "react";
import { TextField, InputAdornment, useMediaQuery } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const DynamicSearchField = ({
  placeholder,
  onSearch,
  fullWidthOnSmallScreens = true,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <TextField
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder={placeholder || "بحث..."}
      variant="outlined"
      size="small"
      fullWidth={isSmallScreen && fullWidthOnSmallScreens}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{
          width: isSmallScreen ? "100%" : "300px",
      }}
    />
  );
};

export default DynamicSearchField;
