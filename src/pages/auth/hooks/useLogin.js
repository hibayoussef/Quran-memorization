import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthValidation } from "../validation/useAuthValidation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { _AuthApi } from "../../../services/auth/auth.service";


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

     _AuthApi
       .login({ ...input })
       .then((res) => {
         navigate("/dashboard");
         setLoading(true);
       })
       .finally(() => setLoading(false));
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
