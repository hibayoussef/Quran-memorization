import React from "react";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../shared/components/AppBar/CustomAppBar.config";
import Courses from "../courses/components/courses";
import { Grid } from "@mui/material";
import HalfLayout from "./pages/halfLayout";
import FirstSection from "./pages/firstSection";
// Hearing sessions
const Sessions = ({ imageUrl, children }) => {

  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="دورات القرآن/ وقفات مع الآيات / جلسات التسميع" />

      {/* ********************************************************************** */}
      <HalfLayout imageUrl={imageUrl}>
        <FirstSection />
      </HalfLayout>
      
    </>
  );
};

export default Sessions;

