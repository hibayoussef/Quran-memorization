import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
          {field.type === "radio" ? (
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              {/* Label and Radio buttons on the same line */}
              <Typography variant="inputTitle" sx={{ ml: 2 }}>
                {" "}
                {field.label}
              </Typography>
              <RadioGroup row {...register(field.name)}>
                {field.options.map((option, idx) => (
                  <FormControlLabel
                    key={idx}
                    value={option.value}
                    control={
                      <Radio
                        sx={{
                          color: "secondary.main",
                          "&.Mui-checked": {
                            color: "secondary.main",
                          },
                          background: "none",
                          border: "none",
                        }}
                      />
                    }
                    label={
                      <Typography sx={{ color: "headerText.main" }}>
                        {" "}
                        {option.label}
                      </Typography>
                    }
                    sx={{ ml: idx !== 0 ? 2 : 8 }}
                  />
                ))}
              </RadioGroup>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={styles.labelBox}>
                <Typography variant="inputTitle">{field.label}</Typography>
              </Box>
              <TextFieldStyled
                type={
                  field.type === "password" && showPassword
                    ? "text"
                    : field.type
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
                            <IconButton
                              onClick={handleTogglePasswordVisibility}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }
                    : undefined
                }
              />
            </Box>
          )}
        </Box>
      ))}
    </>
  );
};

export default FormFields;
