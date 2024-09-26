import React from "react";
import { Box } from "@mui/material";
import AvatarComponent from "../../../../components/shared/avatar/avatar";
import TypographyComponent from "../../../../components/shared/typography/Typography";
import {
  profileCardContainerStyles,
  avatarStyles,
  textContainerStyles,
  mainLabelStyles,
  subLabelStyles,
} from "./profileCard.styles"; // Import your styles

const ProfileCard = () => {
  return (
    <Box sx={profileCardContainerStyles}>
      <AvatarComponent
        alt="Profile image"
        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
        height={{ sm: avatarStyles.sm.height, xs: avatarStyles.xs.height }}
        width={{ sm: avatarStyles.sm.width, xs: avatarStyles.xs.width }}
      />
      <Box sx={textContainerStyles}>
        <TypographyComponent
          label="أحمد أحمد"
          labelStyles={mainLabelStyles}
          hideColon={false}
        />

        <TypographyComponent
          label="ahmad@ahmad.com"
          fontWeight={300}
          labelStyles={subLabelStyles}
          hideColon={false}
        />
      </Box>
    </Box>
  );
};

export default ProfileCard;
