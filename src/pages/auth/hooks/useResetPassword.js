import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuthValidation } from "../validation/useAuthValidation";

export const useResetPassword = () => {
  const { resetPassSchema } = useAuthValidation();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const formOptions = { resolver: yupResolver(resetPassSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (input) => {
     setLoading(true);
     navigate("/dashboard");
   };


  return {
    errors,
    loading,
    navigate,
    register,
    onSubmit,
    handleSubmit
  };
};
