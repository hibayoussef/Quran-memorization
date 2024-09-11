import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthValidation } from "../../pages/validation/useAuthValidation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const { loginSchema } = useAuthValidation();

  const navigate = useNavigate();
  const formOptions = { resolver: yupResolver(loginSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const onSubmit = (input) => {
    setLoading(true);
    navigate("/dashboard");
  };

  return {
    errors,
    loading,
    onSubmit,
    register,
    showPassword,
    handleSubmit,
    handleTogglePasswordVisibility,
  };
};
