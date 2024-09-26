import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import Sidebar from "./components/sidebar/Sidebar";
import Content from "./components/content/Content";
import "./MainPage.css";
import { Outlet } from "react-router-dom";

const DashboardComponent = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={4} md={3} style={{ backgroundColor: "red" }}>
          <Sidebar onSelectItem={setSelectedItem} />
        </Grid> */}
        <Grid item xs={12} sm={8} md={9}>
         <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardComponent;
