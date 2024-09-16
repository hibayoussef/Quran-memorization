import * as yup from "yup";
export const useAuthValidation = () => {

  let loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("invalid email address")
      .required("email is required"),

    password: yup
      .string()
      .required("password is required")
      .min(6, "the Password must be of six characters")
      .max(20, "the Password must be of 20 characters"),
  });
  let resetPassSchema = yup.object().shape({
    email: yup
      .string()
      .email("invalid email address")
      .required("email is required"),
  });
  let verifyCodeSchema = yup.object().shape({
    code: yup
      .string()
      .required("verification code is required")
      .length(6, "verification code must be 6 characters long")
      .matches(/^[0-9]+$/, "verification code must be a number"),
  });
  let passEditSchema = yup.object().shape({
    password: yup
      .string()
      .required("password is required")
      .min(6, "the Password must be of six characters")
      .max(20, "the Password must be of 20 characters"),

    new_password_confirmation: yup
      .string()
      .required("confirm password is required")
      .min(6, "the confirm password must be of six characters")
      .max(20, "the confirm password must be of 20 characters")
      .oneOf([yup.ref("password")], "your password does not match"),
    createdOn: yup.date().default(function () {
      return new Date();
    }),
  });
  return {
    loginSchema,
    passEditSchema,
    resetPassSchema,
    verifyCodeSchema,
  };
};
