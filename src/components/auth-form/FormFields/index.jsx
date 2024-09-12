import React from "react";
import { Box, InputAdornment, Typography } from "@mui/material";
import { TextFieldStyled } from "../../styled/TextField";

const FormFields = ({ fields, register, errors }) => {
  return (
    <>
      {fields.map((field, index) => (
        <Box sx={{ width: "100%", mt: "20px" }} key={index}>
          <Box sx={{ margin: "0 0 8px 5px" }}>
            <Typography variant="inputTitle">{field.label}</Typography>
          </Box>
          <TextFieldStyled
            type={field.type}
            sx={{
              width: "100%",
              "& .MuiInputBase-input": { color: "white" },
            }}
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
                        {/* Add your visibility toggle button here */}
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
