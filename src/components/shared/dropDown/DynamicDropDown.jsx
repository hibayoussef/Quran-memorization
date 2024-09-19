import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import {
  StyledBox,
  StyledAvatar,
  StyledTypography,
  StyledIconButton,
  StyledArrowDropDownIcon,
} from "./DynamicDropDown.styles"; // Import the styled components

const DynamicDropdown = ({
  avatarUrl,
  userName,
  menuItems = [],
  onMenuItemClick = () => {},
  textColor = "black", // Default color
  arrowSize = 24, // Default arrow size (you can adjust it)
  marginLeft,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledBox marginLeft={marginLeft}>
      <StyledAvatar alt={userName} src={avatarUrl} />
      <StyledTypography textColor={textColor}>{userName}</StyledTypography>
      <StyledIconButton size="small" onClick={handleClick}>
        <StyledArrowDropDownIcon arrowSize={arrowSize} />
      </StyledIconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              onMenuItemClick(item);
              handleClose();
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </StyledBox>
  );
};

export default DynamicDropdown;
