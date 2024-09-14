import React from "react";
import AuthForm from "../components/Auth/AuthForm";
import { useLogin } from "./hooks/useLogin";
import BackgroundImageUrl from "../assets/images/Background.svg";
import ForgotPasswordLink from "../components/Auth/LoginRestLink/ForgotPasswordLink";
import AlreadyHaveAccount from "../components/Auth/LoginRestLink/AlreadyHaveAccount";
const Login = () => {
  const { errors, loading, onSubmit, register, handleSubmit } = useLogin();

  const loginFields = [
    {
      label: "البريد الإلكتروني",
      name: "email",
      type: "email",
      placeholder: "enter your email",
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: "password",
      placeholder: "enter your password",
      showPasswordToggle: true
    },
  ];

  const loginButtons = [
    {
      text: "تسجيل الدّخول",
      type: "submit",
      loading: false,
    },
  ];

  return (
    <AuthForm
      title="تسجيل الدّخول"
      fields={loginFields}
      buttons={loginButtons}
      onSubmit={handleSubmit(onSubmit)}
      backgroundImageUrl={BackgroundImageUrl}
      register={register}
      marginTop="60px"
      errors={errors}
      loading={loading}
      extraSection1={<ForgotPasswordLink />}
      extraSection2={
        <AlreadyHaveAccount
          questionText="ليس لديك حساب, "
          linkText="إنشاء حساب"
          linkUrl="/new-account"
          showDivider={true}
        />
      }
    />
  );
};

export default Login;
