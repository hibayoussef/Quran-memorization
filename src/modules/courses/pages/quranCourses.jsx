import React from "react";
import Courses from "../components/Courses";
import CustomAppBar from "../../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../../shared/components/AppBar/CustomAppBar.config";
import MainLayout from "../../../layout/MainLayout";

const QuranCourses = () => {
  return (
    <>
      <MainLayout title="دورات القرآن"></MainLayout>
    </>
  );
};

export default QuranCourses;
