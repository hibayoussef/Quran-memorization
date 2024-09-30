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

  const onSubmit = async (input) => {
    setLoading(true);
    try {
      await _AuthApi.login({ ...input });
      const role = _AuthApi.getRole();

      // توجيه المستخدم بناءً على الدور
      const routes = {
        admin: "/admin/dashboard",
        teacher: "/teacher/dashboard",
        student: "/student/courses/all", // التوجيه إلى صفحة الطلاب
      };

      navigate(routes[role] || "/"); // إذا لم يكن الدور موجودًا، انتقل إلى الصفحة الرئيسية
    } catch (error) {
      console.error("Login error:", error);
      // يمكنك إضافة معالجة الأخطاء هنا، مثل إظهار رسالة للمستخدم
    } finally {
      setLoading(false);
    }
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
