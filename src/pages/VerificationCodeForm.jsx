import React from "react";
import BackgroundImageUrl from "../assets/images/Background.svg";
import AuthForm from "../components/Auth/AuthForm";
import CodeInput from "../components/Auth/FormFields/ResendCodeTimer";
import { useVerificationCode } from "./hooks/useVerificationCode";

const VerificationCodeForm = () => {
  const { errors, loading, onSubmit, register, handleSubmit } =
    useVerificationCode();

  const handleCodeSubmit = (code) => {
    console.log("Code submitted:", code);
    // Handle code submission here
  };

  const handleResendCode = () => {
    console.log("Resend code request");
    // Handle resend code here
  };

  const createAccountButtons = [
    {
      text: "تأكيد",
      type: "submit",
      loading: loading,
    },
  ];

  return (
    <AuthForm
      title="أدخل رمز التّحقّق"
      onSubmit={handleSubmit(onSubmit)}
      backgroundImageUrl={BackgroundImageUrl}
      register={register}
      buttons={createAccountButtons}
      marginTop="60px"
      errors={errors}
      loading={loading}
      extraSection1={
        <CodeInput
          onSubmitCode={handleCodeSubmit}
          resendCode={handleResendCode}
        />
      }
    />
  );
};

export default VerificationCodeForm;
