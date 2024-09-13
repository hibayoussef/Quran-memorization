import React from "react";
import AuthForm from "../components/AuthForm/AuthForm";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate(); // Initialize navigation

  const onSubmit = (data) => {
    // Handle form submission, such as sending data to the backend.
    console.log(data);
  };

  // Watch the newPassword field to compare with confirmPassword
  const newPassword = watch("newPassword");

  const fields = [
    {
      label: "إدخال كلمة المرور الجديدة",
      name: "newPassword",
      type: "password",
      placeholder: "أدخل كلمة المرور الجديدة",
      showPasswordToggle: true,
    },
    {
      label: "تأكيد كلمة المرور",
      name: "confirmPassword",
      type: "password",
      placeholder: "أدخل كلمة المرور مرة أخرى",
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
      register={register}
      errors={errors}
    />
  );
};

export default ForgotPassword;
