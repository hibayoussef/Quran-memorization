import React from "react";
import Courses from "../components/courses";
import CustomAppBar from "../../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig
} from "../../shared/components/AppBar/CustomAppBar.config";
import Course from "../components/Card/course";
import { Box } from "@mui/material";

const QuranCourses = () => {

  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="دورات القرآن" />
      {/* <Footer /> */}
    </>
  );
};

export default QuranCourses;

