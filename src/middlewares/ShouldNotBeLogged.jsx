import { Navigate } from "react-router-dom";
import { _AuthApi } from "../services/auth/auth.service";

const ShouldNotBeLogged = ({ children }) => {
  const token = _AuthApi.getToken();
  if (token) {
    const role = _AuthApi.getRole();
    // توجيه المستخدم بناءً على الدور
    switch (role) {
      case "admin":
        return <Navigate to="/admin/dashboard" />;
      case "teacher":
        return <Navigate to="/teacher/dashboard" />;
      case "student":
        return <Navigate to="/student/courses/all" />; // تم التحديث: توجيه إلى صفحة /student/pr
      default:
        return <Navigate to="/" />;
    }
  }

  return children;
};

export default ShouldNotBeLogged;
