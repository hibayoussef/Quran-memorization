// avatar.styles.js
import { styled } from "@mui/system";
import { Avatar } from "@mui/material";

export const StyledAvatar = styled(Avatar)(({ width, height }) => ({
  width: width,
  height: height,
}));
