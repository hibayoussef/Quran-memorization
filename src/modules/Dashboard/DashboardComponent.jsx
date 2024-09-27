import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import "./MainPage.css";
import { Outlet } from "react-router-dom";

const DashboardComponent = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <>
         <Outlet />
    </>
  );
};

export default DashboardComponent;
