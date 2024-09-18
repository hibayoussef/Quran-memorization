import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/pagination"; // Swiper pagination styles
import "swiper/css/autoplay"; // Swiper autoplay styles

import { Pagination, Autoplay } from "swiper/modules"; // Correct import for modules
// start in MUI
import { Box, Container, Typography } from "@mui/material";
// style css
import { styles } from "./HadithToday.styles";

const HadithToday = () => {
  return (
    <Box sx={styles.container}>
      <Container maxWidth="xl">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]} // Add the modules you need
          style={styles.swiperStyle} // Apply styles here
        >
          <SwiperSlide style={styles.SwiperSlide}>
            <h3 style={styles.title}>حديث اليوم</h3>
            <Typography sx={styles.subTitle}>
              عن عبد الله بن عباس رضي الله عنهما قال : كنت خلف النبي صلى الله
              عليه وسلم فقال لي : “ يا غلام إني أعلمك كلمات : احفظ الله يحفظك ،
              احفظ الله تجده تجاهك ، إذا سألت فاسأل الله ، وإذا استعنت فاستعن
              بالله ، واعلم أن الأمة لو اجتمعت على أن ينفعوك بشيء ، لم ينفعوك
              إلا بشيء قد كتبه الله لك ، وإن اجتمعوا على أن يضروك بشيء ، لم
              يضروك إلا بشيء قد كتبه الله عليك ، رفعت الأقلام وجفت الصحف. “ 
            </Typography>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default HadithToday;
