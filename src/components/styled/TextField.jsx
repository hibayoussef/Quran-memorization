import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export const TextFieldStyled = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    "&::placeholder": {
      color: theme.palette.text.secondary, // Update to the correct placeholder color
      opacity: 0.7, // Adjust opacity for better visibility
    },
    color: theme.palette.text.primary, // Ensure text color is not white
    borderRadius: "14px !important",
  },
  "& label": {
    color: theme.palette.primary.main, // Update label color
  },
  "& label.Mui-focused": {
    color: theme.palette.primary.main,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.origin.main,
    },
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.origin.main,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "14px",
    borderColor: theme.palette.text.main,
  },
  "& .MuiFilledInput-root": {
    border: "1px solid #e2e2e1",
    overflow: "hidden",
    backgroundColor: "#fcfcfb",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      borderColor: theme.palette.origin.main,
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      borderColor: theme.palette.origin.main,
    },
  },
}));
