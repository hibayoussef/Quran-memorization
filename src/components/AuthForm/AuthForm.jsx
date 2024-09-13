import React from "react";
import { Box, Typography } from "@mui/material";
import FormHeader from "./FormHeader/FormHeader";
import FormFields from "./FormFields/FormFields";
import FormButtons from "./FormButtons/FormButtons";
import { BoxStyled } from "../../components/styled/BoxStyled";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { authFormStyles } from "./AuthForm.styles";
import { NavLink } from "react-router-dom";
const AuthForm = ({
  title,
  fields = [],
  buttons = [],
  onSubmit,
  register,
  errors,
  loading,
  backgroundImageUrl
}) => {
  return (
    <Box sx={authFormStyles.root}>
      <BackgroundImage
        imageUrl={backgroundImageUrl}
        size="cover"
        position="center"
      />

      <BoxStyled sx={authFormStyles.formContainer}>
        <FormHeader title={title} />
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{ width: "100%", marginTop: authFormStyles.content.marginTop }}
        >
          <FormFields fields={fields} register={register} errors={errors} />
          {title !== "تغيير كلمة المرور" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                height: "100%",
              }}
            >
              <NavLink to="/reset-password">
                <Typography
                  variant="inputTitle"
                  sx={{
                    color: "headerText.main",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  {"نسيت كلمة المرور؟"}
                </Typography>
              </NavLink>
            </Box>
          )}

          <FormButtons buttons={buttons} loading={loading} />
        </Box>
      </BoxStyled>
    </Box>
  );
};

export default AuthForm;
