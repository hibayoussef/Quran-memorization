import { Box } from "@mui/material";
import React from "react";
import { BoxStyled } from "../../components/styled/BoxStyled";
import { authFormStyles } from "./AuthForm.styles";
import FormButtons from "./FormButtons/FormButtons";
import FormFields from "./FormFields/FormFields";
import FormHeader from "./FormHeader/FormHeader";
import BackgroundImageTry from "../BackgroundImageTry/BackgroundImageTry";
import Basmalah from '../../assets/images/basmalah.png';
  
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
  extraSection2,
}) => {
  return (
    <Box sx={{ ...authFormStyles.root, position: "relative" }}>
      <BackgroundImageTry
        imageUrl={backgroundImageUrl}
        size="cover"
        position="center"
      />

      {/* Display the "بسم الله الرحمن الرحيم" image above the form */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "2rem",
          marginTop: "1rem",
          zIndex: 10001, // Ensure it's above the background image but below other content
        }}
      >
        <img
          src={Basmalah} // Adjust this path according to your file location
          alt="بسم الله الرحمن الرحيم"
          style={{
            maxWidth: "500px", // Adjust the max-width as needed
            width: "100%",
            // height: "auto",
          }}
        />
      </Box>

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
