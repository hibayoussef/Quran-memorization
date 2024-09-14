import { Box } from "@mui/material";
import React from "react";
import { BoxStyled } from "../../components/styled/BoxStyled";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { authFormStyles } from "./AuthForm.styles";
import FormButtons from "./FormButtons/FormButtons";
import FormFields from "./FormFields/FormFields";
import FormHeader from "./FormHeader/FormHeader";
const AuthForm = ({
  title,
  fields = [],
  buttons = [],
  onSubmit,
  register,
  errors,
  loading,
  backgroundImageUrl,
  marginTop,
  extraSection1,
  extraSection2
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
          sx={{ width: "100%", marginTop: marginTop }}
        >
          <FormFields fields={fields} register={register} errors={errors} />
          {extraSection1 && extraSection1}

          {extraSection2 && extraSection2}
          <FormButtons buttons={buttons} loading={loading} />
        </Box>
      </BoxStyled>
    </Box>
  );
};

export default AuthForm;
