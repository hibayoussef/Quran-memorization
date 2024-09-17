import React from "react";
// start in MUI
import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// style css
import { styles } from "./AddTotalNumber.styles";
// img
import question from "../../../assets/images/double.svg";
// start in component
import Button from "../../shared/button/ButtonMain";

const AddTotalNumber = () => {
  const items = [
    "إِنَّ اللَّهَ وَمَلائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا [الأحزاب:56]",
    "مَنْ صلَّى عليَّ صلاَةً، صلَّى اللَّه علَيّهِ بِهَا عشْرًا",
    "أَوْلى النَّاسِ بِي يوْمَ الْقِيامةِ أَكْثَرُهُم عَليَّ صَلاَةً",
    "إنَّ مِن أَفْضلِ أيَّامِكُمْ يَوْمَ الجُمُعةِ، فَأَكْثِرُوا عليَّ مِنَ الصلاةِ فِيهِ، فإنَّ صَلاتَكُمْ معْرُوضَةٌ علَيَّ",
  ];

  return (
    <Box sx={styles.boxes}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* column Form add number */}
          <Grid size={{ sm: 12, md: 6 }}>
            <Box sx={styles.boxFormNumber}>
              {/* BOX title main and icon */}
              <Box sx={styles.boxTitleForm}>
                <Typography sx={styles.titleForm}>
                  حملة الصلاة على النبي ﷺ
                </Typography>
              </Box>
              <Box>
                <Container maxWidth="xl">
                  <Typography sx={styles.number}>
                    العدد الإجمالي :
                    <Typography
                      variant="subtitle"
                      sx={{ pr: "30px", fontSize: "24px" }}
                    >
                      {new Intl.NumberFormat().format(123000000)}
                    </Typography>
                  </Typography>
                  {/* start in form data */}
                  <form>
                    <Stack spacing={5} sx={styles.stack}>
                      <FormControl sx={styles.columnInput}>
                        <FormLabel sx={styles.label}>
                          البريد الالكتروني
                        </FormLabel>
                        <Input type="email" style={styles.Input} required />
                      </FormControl>
                      <FormControl sx={{ ...styles.columnInput }}>
                        <FormLabel sx={styles.label}>العدد</FormLabel>
                        <Input type="number" style={styles.Input} required />
                      </FormControl>
                      <Button title="اضف العدد" width="100%" radius="8px" />
                    </Stack>
                  </form>
                </Container>
              </Box>
            </Box>
          </Grid>
          {/* column title  */}
          <Grid size={{ sm: 12, md: 6 }}>
            <Box sx={styles.boxImg}>
              <Typography sx={styles.title}>الصلاة على الحبيب ﷺ </Typography>
              <img src={`${question}`} alt="" style={styles.styleImg} />
            </Box>
            <List
              sx={{
                listStyleType: "disc",
                pl: 2,
              }}
            >
              {items.map((text, index) => (
                <React.Fragment key={index}>
                  <ListItem sx={styles.list}>
                    <ListItemText
                      primary={text}
                      primaryTypographyProps={{ sx: styles.listItemText }}
                    />
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AddTotalNumber;
