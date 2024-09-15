// start in MUI
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
// start in style component
import { about } from "./AboutUs.styles";
// import image
import iconVideo from "../../../assets/images/icon-video.svg";

const AboutUs = () => {
  return (
    <Box sx={about.container}>
      <Container maxWidth="xl">
        <Grid container spacing={6} sx={about.containerGrid}>
          {/* first column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={about.title}>من نحن</Typography>
            <Typography sx={about.subTitle}>
              يهدف المشروع إلى بناء موقع الكتروني لإدارة دورات تحفيظ القرآن
              الكريم. يقدم واجهة مستخدم متميزة تسهل عملية التصفح والتسجيل
              ومتابعة النتائج بشكل سلس وآمن. يتضمن الموقع والتطبيق كتالوجا
              شاملاً للمدربين والدورات ونظام اشعارات، وإدارة حساب الطلاب
              والأساتذة، وصفحات إضافية لمعلومات الاتصال والشركة.
            </Typography>
          </Grid>
          {/* second column */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={about.video}>
              <img src={`${iconVideo}`} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUs;
