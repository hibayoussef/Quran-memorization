import { Navigate } from "react-router-dom";
import { _AuthApi } from "../services/auth/auth.service";

const AuthRedirect = ({ children, shouldBeLogged, allowedRoles }) => {
  const token = _AuthApi.getToken();
  const role = token ? _AuthApi.getRole() : null;

  if (shouldBeLogged) {
    // تحقق من وجود توكن
    if (!token) {
      return <Navigate to="/" />; // إذا لم يكن هناك توكن، توجيه إلى صفحة تسجيل الدخول
    }

    // تحقق من الأدوار المسموح بها
    if (allowedRoles && !allowedRoles.includes(role)) {
      return <Navigate to="/unauthorized" />; // توجيه إلى صفحة غير مصرح له
    }
  } else {
    // تحقق من وجود توكن في حالة عدم تسجيل الدخول
    if (token) {
      switch (role) {
        case "admin":
          return <Navigate to="/admin/dashboard" />;
        case "teacher":
          return <Navigate to="/teacher/dashboard" />;
        case "student":
          return <Navigate to="/student/courses/all" />;
        default:
          return <Navigate to="/" />;
      }
    }
  }

  return children; // إذا كانت الشروط مستوفاة، يتم عرض العناصر الفرعية
};

export default AuthRedirect;
