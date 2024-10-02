import React from "react";
import { useNavigate } from "react-router-dom";
import BackgroundImageUrl from "../../../assets/images/Background.svg";
import AuthForm from "../../../components/Auth/AuthForm";
import { useResetPassword } from "../hooks/useResetPassword";

const ForgotPassword = () => {
  const { register, handleSubmit, errors, loading, onSubmit, watch } =
    useResetPassword();
  const navigate = useNavigate();

  const fields = [
    {
      label: "كلمة المرور الجّديدة",
      name: "newPassword",
      type: "password",
      placeholder: "أدخل كلمة المرور الجّديدة",
      showPasswordToggle: true,
    },
    {
      label: "تأكيد كلمة المرور",
      name: "confirmPassword",
      type: "password",
      placeholder: "أدخل كلمة المرور مرّة أخرى",
      showPasswordToggle: true,
      validate: (value) =>
        value === watch("newPassword") || "Passwords do not match!",
    },
  ];

  const buttons = [
    {
      text: "حفظ",
      type: "submit",
      loading: false,
      noBackground: false, // Solid button with background
      customStyles: { backgroundColor: "primary.main" },
    },
    {
      text: "رجوع",
      type: "button",
      noBackground: true, 
      onClick: () => navigate(-1), // Navigate back
    }
  ];

  return (
    <AuthForm
      title="تغيير كلمة المرور"
      fields={fields}
      buttons={buttons}
      onSubmit={handleSubmit(onSubmit)}
      backgroundImageUrl={BackgroundImageUrl} // Pass dynamic background image URL
      register={register}
      errors={errors}
      loading={loading}
      marginTop="60px"
    />
  );
};

export default ForgotPassword;
