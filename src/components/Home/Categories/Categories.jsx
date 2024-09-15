// start in MUI
import { Box, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
// import style css
import { styles } from "./Categories.styles";
// imported images
import QuranImg from "../../../assets/images/categories/PolygonQuran.png";
import HadithImg from "../../../assets/images/categories/PolygonHadith.png";
import ImgHadith from "../../../assets/images/categories/Hadith.svg";
import IconQuran from "../../../assets/images/categories/Quran.svg";

const Categories = () => {
  const itemData = [
    {
      img: HadithImg,
      icon: IconQuran,
      title: "القرأن الكريم",
      notFound: "Breakfast",
    },
    {
      img: QuranImg,
      icon: ImgHadith,
      title: "الحديث",
      notFound: "Breakfast",
    },
  ];
  return (
    <Box>
      <Typography sx={styles.title}>التصنيفات</Typography>
      <ImageList sx={styles.listItem} cols={3}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <Box sx={styles.boxImg}>
              {/* main img */}
              <img src={`${item.img}`} alt={item.title} loading="lazy" />
              {/* icon inside first img */}
              <img
                src={`${item.icon}`}
                alt={item.notFound}
                loading="lazy"
                style={styles.icon}
              />
              <Typography sx={styles.titleImg}> {item.title}</Typography>
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Categories;
