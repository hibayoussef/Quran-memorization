import React from "react";
import AuthForm from "../components/auth-form";
import { useLogin } from "./hooks/useLogin";

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
      register={register}
      errors={errors}
      loading={loading}
    />
  );
};

export default Login;
