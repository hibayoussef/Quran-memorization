import React from "react";
import BackgroundImageUrl from "../assets/images/Background.svg";
import AuthForm from "../components/Auth/AuthForm";
import { useCreateAccount } from "./hooks/useCreateAccount"; // Custom hook for handling form logic

const CreateAccount = () => {
  const { errors, loading, onSubmit, register, handleSubmit } =
    useCreateAccount();

  const createAccountFields = [
    {
      label: "الاسم الثلاثي",
      name: "fullName",
      type: "text",
      placeholder: "أدخل اسمك الكامل",
    },
    {
      label: "البريد الإلكتروني",
      name: "email",
      type: "email",
      placeholder: "أدخل بريدك الإلكتروني",
    },
    {
      label: "كلمة المرور",
      name: "password",
      type: "password",
      placeholder: "أدخل كلمة المرور",
      showPasswordToggle: true, // Option to show/hide password
    },
    {
      label: "رقم الهاتف",
      name: "phoneNumber",
      type: "tel",
      placeholder: "أدخل رقم هاتفك",
    },
    {
      label: "تاريخ الميلاد",
      name: "birthDate",
      type: "date",
      placeholder: "أدخل تاريخ ميلادك",
    },
  ];

  const createAccountButtons = [
    {
      text: "التّالي",
      type: "submit",
      loading: loading,
    },
  ];

  return (
    <AuthForm
      title="أدخل رمز التّحقّق"
      fields={createAccountFields}
      buttons={createAccountButtons}
      onSubmit={handleSubmit(onSubmit)}
      backgroundImageUrl={BackgroundImageUrl}
      register={register}
      marginTop="30px"
      errors={errors}
      loading={loading}
    />
  );
};

export default CreateAccount;
