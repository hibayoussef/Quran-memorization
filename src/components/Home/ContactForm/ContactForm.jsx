import React from "react";
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Input,
} from "@mui/material";
import { styles } from "./ContactForm.styles"; // Import your styles

const ContactForm = () => {
  return (
    <Container maxWidth="md">
      <Box sx={styles.formContainer}>
        {/* Left Section */}
        <Box sx={styles.rightSection}>
          <Typography variant="h5" sx={styles.formTitle}>
            قل مرحبا! نود التحدث معك.
          </Typography>
          <form>
            <Input placeholder="Type in here…" variant="outlined" />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={styles.submitButton}
            >
              إرسال
            </Button>
          </form>
        </Box>

        {/* Right Section */}
        <Box sx={styles.leftSection}>
          <Typography variant="h5" sx={styles.contactTitle}>
            معلومات التواصل
          </Typography>
          <Typography sx={styles.contactDescription}>
            املأ النموذج وسيقوم فريقنا بالرد عليك خلال 24 ساعة.
          </Typography>
          <Box sx={styles.contactInfo}>
            <Typography>📞 (+40) 772 100 200</Typography>
            <Typography>✉️ hello@creative-tim.com</Typography>
            <Typography>📂 Open Support Ticket</Typography>
          </Box>
          <Box sx={styles.socialIcons}>
            {/* Replace '#' with actual social media links */}
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-pinterest"></i>
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
