import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { ResetPassword, VerificationCodeForm } from "../src/routes/route";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-account" element={<ResetPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/reset-password/check-code/:email"
        element={<VerificationCodeForm />}
      />
    </Routes>
  );
};

export default AppRouting;
