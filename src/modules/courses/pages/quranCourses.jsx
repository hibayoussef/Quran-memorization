import React from "react";
import Courses from "../components/courses";
import CustomAppBar from "../../shared/components/CustomAppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig
} from "../../shared/components/CustomAppBar/CustomAppBar.config";

const QuranCourses = () => {

  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="دورات القرآن" />
    </>
  );
};

export default QuranCourses;

