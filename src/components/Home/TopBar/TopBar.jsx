// start in materia ui
import { Box, Container, Typography } from "@mui/material";
// import WhatsApp icon from Material UI icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// start in style css
import { styles } from "./TopBar.styles";

const TopBar = () => {
  return (
    <div>
      <Box sx={styles.BoxContainer}>
        <Container maxWidth="xl">
          <Box sx={styles.flexible}>
            <Typography>تسجيل الدخول</Typography>
            <Box sx={styles.whatsApp}>
              <Typography>+971 123 456 789</Typography>
              <WhatsAppIcon sx={{ marginRight: 1 }} />
            </Box>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default TopBar;
