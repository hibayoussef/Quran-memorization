import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
// start in in css
import { styles } from "./StudentExcellence.styles";

const StudentExcellence = () => {
  return (
    <Box sx={styles.student}>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          {/* start in title */}
          <Grid size={{ sm: 12, md: 6 }}>
            <h1 style={styles.title}>الطلاب المتميزين :</h1>
            <h3 style={styles.titleTow}>
              تم تكريم الطلاب المتميزين من دورات القرآم والحديث.
            </h3>
          </Grid>
          {/* start in img  */}
          <Grid size={{ sm: 12, md: 6 }}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StudentExcellence;
