import { Button } from "@mui/material";

const ButtonMain = ({ title, width, radius }) => {
  return (
    <Button
      sx={{
        bgcolor: "#F8B641",
        width: { width },
        height: "60px",
        borderRadius: { radius },
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
