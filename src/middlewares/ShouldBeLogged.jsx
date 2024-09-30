import { Navigate, useLocation } from "react-router-dom";
import { _AuthApi } from "../services/auth/auth.service";

const ShouldBeLogged = ({ children, allowedRoles }) => {
  const location = useLocation();
  const token = _AuthApi.getToken();
  const role = _AuthApi.getRole();

  if (!token) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    // إعادة توجيه المستخدم إلى صفحة غير مصرح له (مثلاً صفحة الخطأ 403) أو الصفحة الرئيسية
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ShouldBeLogged;


