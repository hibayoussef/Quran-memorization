import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styles } from "./AddTotalNumber.styles";

const AddTotalNumber = () => {
  const items = [
    "إِنَّ اللَّهَ وَمَلائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا [الأحزاب:56]",
    "مَنْ صلَّى عليَّ صلاَةً، صلَّى اللَّه علَيّهِ بِهَا عشْرًا",
    "أَوْلى النَّاسِ بِي يوْمَ الْقِيامةِ أَكْثَرُهُم عَليَّ صَلاَةً",
    "إنَّ مِن أَفْضلِ أيَّامِكُمْ يَوْمَ الجُمُعةِ، فَأَكْثِرُوا عليَّ مِنَ الصلاةِ فِيهِ، فإنَّ صَلاتَكُمْ معْرُوضَةٌ علَيَّ",
  ];

  return (
    <Box sx={styles.boxes}>
      <Container>
        <Grid container spacing={6}>
          {/* column Form add number */}
          <Grid size={{ xs: 12, md: 6 }}></Grid>
          {/* column title  */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={styles.title}>الصلاة على الحبيب ﷺ</Typography>
            <List>
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
