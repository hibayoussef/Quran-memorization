import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthValidation } from "../validation/useAuthValidation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

export const useVerificationCode = () => {
  const { verifyCodeSchema } = useAuthValidation();
  const { email } = useParams();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const formOptions = { resolver: yupResolver(verifyCodeSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
      navigate("/login");
  };

  const resendCode = async () => {
    console.log("Code resent");
    // You can implement resend code logic here
  };

  return {
    code,
    email,
    errors,
    setCode,
    onSubmit,
    navigate,
    register,
    resendCode,
    handleSubmit,
    loading,
  };
};
