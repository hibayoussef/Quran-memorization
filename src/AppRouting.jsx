import React from "react";
import { Route, Routes } from "react-router-dom";
// start in component
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouting;
