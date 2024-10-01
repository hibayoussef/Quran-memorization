import { Navigate } from "react-router-dom";
import { _AuthApi } from "../services/auth/auth.service";

const AuthRedirect = ({ children, shouldBeLogged, allowedRoles }) => {
  const token = _AuthApi.getToken();
  const role = token ? _AuthApi.getRole() : null;

  if (shouldBeLogged) {
    if (!token) {
      return <Navigate to="/" />; 
    }

    if (allowedRoles && !allowedRoles.includes(role)) {
      return <Navigate to="/unauthorized" />; 
    }
  } else {
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

  return children; 
};

export default AuthRedirect;
