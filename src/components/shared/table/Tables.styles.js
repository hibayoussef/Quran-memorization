import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import TableCell from "@mui/material/TableCell";

export const StyledButton = styled(Button)({
  backgroundColor: "#F8B641",
  "&:hover": {
    backgroundColor: "#e5a234", // Slightly darker shade on hover
  },
});

export const StyledTableCell = styled(TableCell)({
  fontWeight: "bold",
  color: "#19213D",
});
