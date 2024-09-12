import React from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import { TextFieldStyled } from "../../styled/TextField";
import { styles } from "./FormFields.styles";

const FormFields = ({ fields, register, errors }) => {
  return (
    <>
      {fields.map((field, index) => (
        <Box sx={styles.fieldContainer} key={index}>
          <Box sx={styles.labelBox}>
            <Typography variant="inputTitle">{field.label}</Typography>
          </Box>
          <TextFieldStyled
            type={field.type}
            sx={styles.textField}
            placeholder={field.placeholder}
            {...register(field.name)}
            error={errors[field.name]?.message}
            helperText={errors[field.name]?.message || ""}
            InputProps={
              field.showPasswordToggle
                ? {
                    endAdornment: (
                      <InputAdornment position="end">
                        {/* Password Visibility Toggle Logic Here */}
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
