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
      <CustomAppBar {...firstAppBarConfig} />
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="دورات القرآن" />
    </>
  );
};

export default QuranCourses;
