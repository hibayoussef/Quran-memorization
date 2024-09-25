// Footer.js
import React from "react";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import {
  FooterContainer,
  FooterContent,
  Section,
  FooterSection,
  IconButtonStyled,
} from "./Footer.styles";

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
