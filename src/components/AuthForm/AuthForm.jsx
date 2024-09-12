import React from "react";
import { Box } from "@mui/material";
import FormHeader from "./FormHeader/FormHeader";
import FormFields from "./FormFields/FormFields";
import FormButtons from "./FormButtons/FormButtons";
import { BoxStyled } from "../../components/styled/BoxStyled";
import { authFormStyles } from "./AuthForm.styles";
import BackgroundImage from '../../assets/images/Background.svg';

const AuthForm = ({
  title,
  fields = [],
  buttons = [],
  onSubmit,
  register,
  errors,
  loading,
}) => {
  return (
    <Box sx={authFormStyles.root}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1, // Ensure this is behind the form
        }}
      />
      <BoxStyled sx={authFormStyles.formContainer}>
        <FormHeader title={title} />
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{ width: "100%", marginTop: authFormStyles.content.marginTop }}
        >
          <FormFields fields={fields} register={register} errors={errors} />
          <FormButtons buttons={buttons} loading={loading} />
        </Box>
      </BoxStyled>
    </Box>
  );
};

export default AuthForm;
