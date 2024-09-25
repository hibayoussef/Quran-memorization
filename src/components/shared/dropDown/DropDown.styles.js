// DynamicStyles.js
import ArrowDropDownIcon from "@mui/icons-material/ExpandMore";
import {
  Avatar,
  Box,
  IconButton,
  Typography
} from "@mui/material";
import { styled } from "@mui/system";

// Styled components
export const StyledBox = styled(Box)(({ marginLeft }) => ({
  display: "flex",
  alignItems: "center",
  direction: "ltr",
  marginLeft: marginLeft || 10,
}));

export const StyledAvatar = styled(Avatar)({
  height: 50,
  width: 50,
});

export const StyledTypography = styled(Typography)(({ textColor }) => ({
  marginLeft: 8,
  marginRight: 8,
  color: textColor || "black",
}));

export const StyledIconButton = styled(IconButton)({
  backgroundColor: "transparent",
  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const StyledArrowDropDownIcon = styled(ArrowDropDownIcon)(
  ({ arrowSize }) => ({
    fontSize: arrowSize || 24, // Default to 24 if no size is provided
  })
);