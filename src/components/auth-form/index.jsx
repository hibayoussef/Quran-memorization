import { Box, InputAdornment, Typography } from "@mui/material";
import  FormButtons from "../auth-form/FormButtons/index";
import  FormHeader  from "../auth-form/FormHeader/index";
import { BoxStyled } from "../styled/BoxStyled";
import { TextFieldStyled } from "../styled/TextField";

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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backdropFilter: "blur(20px)",
      }}
    >
      <BoxStyled
        sx={{
          minWidth: "350px",
          width: "30%",
          padding: "40px",
          zIndex: 10000,
          backgroundColor: "transparent",
          border: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(3px)",
        }}
      >
        <FormHeader title={title} />

        <Box component="form" onSubmit={onSubmit} sx={{ width: "100%" }}>
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
          <FormButtons buttons={buttons} loading={loading} />
        </Box>
      </BoxStyled>
    </Box>
  );
};

export default AuthForm;
