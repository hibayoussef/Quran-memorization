import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useCreateAccount = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    email,
    formState: { errors },
  } = useForm();
  const loading = false;

  const onSubmit = (data) => {
    navigate(`/reset-password/check-code/${email}`);
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    onSubmit,
  };
};
