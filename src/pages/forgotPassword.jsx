import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import BackgroundImageUrl from "../assets/images/Background.svg";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
  };

  const newPassword = watch("newPassword");

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
      validate: (value) => value === newPassword || "Passwords do not match!",
    },
  ];

    const buttons = [
      {
        text: "حفظ",
        type: "submit",
        loading: false,
      },
      {
        text: "رجوع",
        type: "button",
        onClick: () => navigate(-1), // Navigate back
      },
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
      marginTop="60px"
    />
  );
};

export default ForgotPassword;
