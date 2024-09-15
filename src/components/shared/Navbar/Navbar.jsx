// start in material ui
import { Box, Container, Typography } from "@mui/material";
// start in react router for link
import { NavLink } from "react-router-dom";
// start in style navbar
import { styles } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={styles.boxContainer}>
        {/* ----- logo website ----- */}
        <Typography>Logo Here </Typography>
        {/* ----- start in list navbar ----- */}
        <Box sx={styles.routing}>
          <NavLink to="#">
            <Typography sx={styles.linkRouter}>| من نحن |</Typography>
          </NavLink>
          <NavLink to="#">
            <Typography sx={styles.linkRouter}>التصنيفات |</Typography>
          </NavLink>
          <NavLink to="#">
            <Typography sx={styles.linkRouter}>الصلاة على النبي ﷺ |</Typography>
          </NavLink>
          <NavLink to="#">
            <Typography sx={styles.linkRouter}>الخلق الأسبوعي |</Typography>
          </NavLink>
          <NavLink to="#">
            <Typography sx={styles.linkRouter}>حديث اليوم |</Typography>
          </NavLink>
          <NavLink to="#">
            <Typography sx={styles.linkRouter}>تواصل معنا |</Typography>
          </NavLink>
        </Box>
      </Box>
    </Container>
  );
};

export default Navbar;
