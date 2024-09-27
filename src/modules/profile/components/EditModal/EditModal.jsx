// EditModal.js
import React from "react";
import { Modal, Box } from "@mui/material";
import PropTypes from "prop-types";

const EditModal = ({
  open,
  handleClose,
  children,
  width = 300,
  maxWidth = "90%",
}) => {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="edit-modal-title">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
          width: width,
          maxWidth: maxWidth,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};

EditModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default EditModal;
