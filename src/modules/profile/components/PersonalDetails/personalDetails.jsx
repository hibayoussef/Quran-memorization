import { Box, Typography } from "@mui/material";

const PersonalDetails = ({ age, yearsOfExperience, placeOfResidence }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 17,
        flexDirection: {
          sm: "row",
          xs: "column",
        },
        padding: "30px 16px",
        alignItems: "flex-start", // Ensuring text is aligned correctly
      }}
    >
      {/* العمر */}
      <Box sx={{ display: "flex", color: "black", gap: 1 }}>
        <Typography sx={{ fontWeight: "bold" }}>العمر:</Typography>
        <Typography>{age} سنة</Typography>
      </Box>

      {/* سنوات الخبرة */}
      <Box sx={{ display: "flex", color: "black", gap: 1 }}>
        <Typography sx={{ fontWeight: "bold" }}>سنوات الخبرة:</Typography>
        <Typography>{yearsOfExperience} سنوات</Typography>
      </Box>

      {/* مكان الإقامة */}
      <Box sx={{ display: "flex", color: "black", gap: 1 }}>
        <Typography sx={{ fontWeight: "bold" }}>مكان الإقامة:</Typography>
        <Typography>{placeOfResidence}</Typography>
      </Box>
    </Box>
  );
};

export default PersonalDetails;
