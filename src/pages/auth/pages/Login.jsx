import React from "react";
import BackgroundImageUrl from "../../../assets/images/Background.svg";
import AuthForm from "../../../components/Auth/AuthForm";
import AlreadyHaveAccount from "../../../components/Auth/RegisterationRestLink/AlreadyHaveAccount";
import ForgotPasswordLink from "../../../components/Auth/RegisterationRestLink/ForgotPasswordLink";
import { useLogin } from "../hooks/useLogin";
const Login = () => {
  const {
    errors,
    loading,
    onSubmit,
    register,
    showPassword,
    handleSubmit,
    handleTogglePasswordVisibility,
  } = useLogin();

  const loginFields = [
    {
      label: "البريد الإلكتروني",
      name: "email",
      type: "email",
      placeholder: "أدخل بريدك الإلكتروني",
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: showPassword ? "text" : "password",
      placeholder: "أدخل كلمة المرور",
      showPasswordToggle: true, // Option to show/hide password
      handleTogglePasswordVisibility, // Function to toggle password visibility
    }
  ];


  const loginButtons = [
    {
      text: loading ? "تحميل" : "تسجيل الدّخول",
      type: "submit",
      loading: loading,
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
