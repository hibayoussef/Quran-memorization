import React from "react";
import BackgroundImageUrl from "../assets/images/Background.svg";
import AuthForm from "../components/Auth/AuthForm";
import AlreadyHaveAccount from "../components/Auth/RegisterationRestLink/AlreadyHaveAccount";
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
    {
      label: "نوع الحساب",
      name: "accountType",
      type: "radio",
      options: [
        { label: "طالب", value: "student" },
        { label: "مدرّس", value: "teacher" },
      ],
    }
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
      title="إنشاء حساب"
      fields={createAccountFields}
      buttons={createAccountButtons}
      onSubmit={handleSubmit(onSubmit)}
      backgroundImageUrl={BackgroundImageUrl}
      register={register}
      marginTop="30px"
      errors={errors}
      loading={loading}
      extraSection2={
        <AlreadyHaveAccount
          questionText="هل لديك حساب بالفعل؟"
          linkText="قم بتسجيل الدّخول الآن"
          linkUrl="/"
          showDivider={true}
        />
      }
    />
  );
};

export default CreateAccount;
