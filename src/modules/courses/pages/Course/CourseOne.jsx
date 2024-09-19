import React from "react";
import Courses from "../../components/courses";
import CustomAppBar from "../../../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,

} from "../../../shared/components/AppBar/CustomAppBar.config";
const CourseOne = () => {
  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="الدّورات المسجّل عليها/دورات القرآن" />
    </>
  );
};

export default CourseOne;
