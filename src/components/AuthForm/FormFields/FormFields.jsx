import React, { useState } from "react";
import { Box, IconButton, InputAdornment, Typography } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { TextFieldStyled } from "../../styled/TextField";
import { styles } from "./FormFields.styles";

const FormFields = ({ fields, register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {fields.map((field, index) => (
        <Box sx={styles.fieldContainer} key={index}>
          <Box sx={styles.labelBox}>
            <Typography variant="inputTitle">{field.label}</Typography>
          </Box>
          <TextFieldStyled
            type={
              field.type === "password" && showPassword ? "text" : field.type
            }
            sx={{
              ...styles.textField,
              direction: field.type === "email" ? "ltr" : "rtl", // Set text direction for email fields
            }}
            placeholder={field.placeholder}
            {...register(field.name)}
            error={!!errors[field.name]?.message}
            helperText={errors[field.name]?.message || ""}
            InputProps={
              field.type === "password"
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : undefined
            }
          />
        </Box>
      ))}
    </>
  );
};

export default FormFields;
