import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AvatarComponent from "../../../../components/shared/avatar/avatar";
import TypographyComponent from "../../../../components/shared/typography/Typography";
import EditModal from "../EditModal/EditModal"; // Import the reusable modal
import {
  profileCardContainerStyles,
  avatarStyles,
  textContainerStyles,
  mainLabelStyles,
  subLabelStyles,
} from "./profileCard.styles";

const ProfileCard = ({
  avatarSrc,
  name,
  email,
  nameLabelStyles = mainLabelStyles,
  emailLabelStyles = subLabelStyles,
  onEdit,
  modalContent,
}) => {
  const [open, setOpen] = useState(false);

  // Functions to handle modal open/close
  const handleOpen = () => {
    setOpen(true);
    if (onEdit) onEdit();
  };
  const handleClose = () => setOpen(false);

  return (
    <Box sx={profileCardContainerStyles}>
      <AvatarComponent
        alt="Profile image"
        src={avatarSrc}
        height={{ sm: avatarStyles.sm.height, xs: avatarStyles.xs.height }}
        width={{ sm: avatarStyles.sm.width, xs: avatarStyles.xs.width }}
      />
      <Box sx={textContainerStyles}>
        <Box display="flex" alignItems="center" gap={1}>
          <TypographyComponent
            label={name}
            labelStyles={nameLabelStyles}
            hideColon={false}
          />
          <IconButton
            size="small"
            onClick={handleOpen}
            aria-label="edit"
            color="primary"
          >
            <EditIcon />
          </IconButton>
        </Box>

        <TypographyComponent
          label={email}
          fontWeight={300}
          labelStyles={emailLabelStyles}
          hideColon={false}
        />
      </Box>

      {/* Use the dynamic EditModal */}
      <EditModal open={open} handleClose={handleClose}>
        {modalContent ? (
          modalContent
        ) : (
          <TypographyComponent
            label="Edit Content"
            fontWeight={600}
            labelStyles={{ fontSize: "20px", marginBottom: 2 }}
          />
        )}
      </EditModal>
    </Box>
  );
};

export default ProfileCard;
