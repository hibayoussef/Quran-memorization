// start in material ui
import { Box, Grid } from "@mui/material"; // Correct import
// start in style css
import { styles } from "./Hero.styles";
// Import the image as a default export
import backgroundImage from "../../../assets/images/background.svg";

const Hero = () => {
  return (
    <Box
      sx={{
        ...styles.container,
        backgroundImage: `url(${backgroundImage})`, // Set the image URL here
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6} md={8}>
          asdffs
        </Grid>
        <Grid item xs={6} md={4}>
          afdsfads
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
