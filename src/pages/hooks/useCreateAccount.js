import { useForm } from "react-hook-form";

export const useCreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loading = false;

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    // Here you would typically send data to the backend API
  };

  return {
    register,
    handleSubmit,
    errors,
    loading,
    onSubmit,
  };
};
