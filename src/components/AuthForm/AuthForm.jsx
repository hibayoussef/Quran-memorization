import React from "react";
import { Box } from "@mui/material";
import FormHeader from "./FormHeader/FormHeader";
import FormFields from "./FormFields/FormFields";
import FormButtons from "./FormButtons/FormButtons";
import { BoxStyled } from "../../components/styled/BoxStyled";
import { authFormStyles } from "./AuthForm.styles";

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
      <BoxStyled sx={authFormStyles.formContainer}>
        <FormHeader title={title} />
        <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
          <FormFields fields={fields} register={register} errors={errors} />
          <FormButtons buttons={buttons} loading={loading} />
        </Box>
      </BoxStyled>
    </Box>
  );
};

export default AuthForm;
