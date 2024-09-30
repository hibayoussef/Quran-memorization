// src/routes/ProtectedRoute.js
import { Navigate } from "react-router-dom";
import { _AuthApi } from "../services/authService";

const ProtectedRoute = ({ role, children }) => {
  const userRole = _AuthApi.getRole();
  const token = _AuthApi.getToken();

  if (!token || userRole !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
