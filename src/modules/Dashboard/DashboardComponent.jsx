import React from "react";
import { Outlet } from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import "./MainPage.css";

const DashboardComponent = () => {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default DashboardComponent;
