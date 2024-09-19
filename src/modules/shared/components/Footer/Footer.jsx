import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  styled,
  useMediaQuery,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import BackgroundURL from "../../../../assets/images/Hero.png";

const FooterContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  backgroundImage: `url(${BackgroundURL})`, // Replace with your background image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  color: theme.palette.text.primary,
  direction: "ltr",
  width: "100%",
  position: "relative",
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: theme.breakpoints.values.lg,
  padding: theme.spacing(2),
}));

const Section = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  [theme.breakpoints.up("lg")]: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  width: "100%",
}));

const FooterSection = styled(Box)(({ theme }) => ({
  margin: theme.spacing(2),
  textAlign: "center",
}));

const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const Footer = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <FooterContainer>
      <FooterContent>
        <Section>
          {/* Follow Us */}
          <FooterSection>
            <Typography variant="h6">تابعنا</Typography>
            <Box>
              <IconButtonStyled>
                <LinkedInIcon />
              </IconButtonStyled>
              <IconButtonStyled>
                <InstagramIcon />
              </IconButtonStyled>
              <IconButtonStyled>
                <FacebookIcon />
              </IconButtonStyled>
            </Box>
          </FooterSection>

          {/* Contact Us */}
          <FooterSection>
            <Typography variant="h6">تواصل معنا</Typography>
            <Box>
              <Typography>
                <LocationOnIcon /> دمشق، المالكي
              </Typography>
              <Typography>
                <PhoneIcon /> 971 123 456 789+
              </Typography>
              <Typography>
                <MailIcon /> Hello@Hello.com
              </Typography>
            </Box>
          </FooterSection>

          {/* About Us */}
          <FooterSection>
            <Typography variant="h6">من نحن</Typography>
            <Typography> Lorem....... </Typography>
            <Typography> ............ </Typography>
          </FooterSection>

          {/* Sponsor */}
          <FooterSection>
            <Typography variant="h6">برعاية</Typography>
            <Box>
              <img
                src="/path/to/logo.png"
                alt="Logo Here"
                style={{ width: "150px", height: "auto" }}
              />
            </Box>
          </FooterSection>
        </Section>
      </FooterContent>
      {/* Horizontal Divider */}
      <Divider sx={{ width: "100%", my: 2 }} />
    </FooterContainer>
  );
};

export default Footer;
