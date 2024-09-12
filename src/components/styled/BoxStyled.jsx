import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const BoxStyled = styled(Box)(({ theme }) => ({
  // backgroundColor: theme.palette?.card?.main,
  backgroundColor: theme.palette?.background?.paper,
  borderRadius: "10px",
  padding: "24px 0 24px 0",
  boxShadow:
    "rgb(145 158 171 / 10%) 0px 0px 1px 0px, rgb(145 158 171 / 30%) 0px 8px 16px -4px",
}));

// border: 1px solid ${theme.palette.borderColor.light} ;
