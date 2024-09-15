// start in material ui
import { Box, Grid, Container, Typography } from "@mui/material"; // Correct import
// start in style css
import { styles } from "./Hero.styles";
// Import the image as a default export
import backgroundImage from "../../../assets/images/background.svg";
import titleHero from "../../../assets/images/titleHero.svg";
// start in component
import ButtonMain from "../../shared/button/ButtonMain";

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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6} sx={styles.enplaned}>
            <img src={`${titleHero}`} alt="" style={styles.styleImg} />
            <Box sx={styles.BoxTitle}>
              <Typography sx={styles.title}>
                يهدف المشروع إلى بناء موقع الكتروني لإدارة دورات <br /> تحفيظ
                القرآن الكريم. يقدم واجهة مستخدم متميزة تسهل
                <br /> عملية التصفح والتسجيل ومتابعة النتائج بشكل سلس وآمن.
              </Typography>
              <ButtonMain title="اشترك الأن" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
