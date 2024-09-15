import { Button } from "@mui/material";

const ButtonMain = ({ title }) => {
  return (
    <Button
      sx={{
        bgcolor: "#F8B641",
        width: "210px",
        height: "60px",
        borderRadius: "35px",
        color: "#fff",
        mt: "40px",
        fontSize: "24px",
      }}
    >
      {title}
    </Button>
  );
};

export default ButtonMain;
