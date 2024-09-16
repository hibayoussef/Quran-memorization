import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/pages/Login";
import {
  ResetPassword,
  VerificationCodeForm,
  CreateAccount,
  CoursesRouting,
} from "../src/routes/route";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-account" element={<CreateAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/reset-password/check-code/:email"
        element={<VerificationCodeForm />}
      />
      <Route path="/courses/*" element={<CoursesRouting />} />
    </Routes>
  );
};

export default AppRouting;
