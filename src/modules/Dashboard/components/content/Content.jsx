import React from "react";
import { Outlet } from "react-router-dom";

const Content = ({ selectedItem }) => {
  return (
    <Outlet/>
  );
};

export default Content;
