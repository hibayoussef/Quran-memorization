import React from "react";
import CoursesHeader from "./CoursesHeader/header";
import BackgroundImageUrl from "../../../assets/images/Background.svg";
import { coursesStyles } from "./courses.styles";
import { Box } from "@mui/material";

const Courses = ({title}) => {
  return (
    <>
      <Box sx={coursesStyles.root}>
        <CoursesHeader
          imageUrl={BackgroundImageUrl}
          size="cover"
          position="center"
          title={title}
        />
      </Box>
    </>
  );
};

export default Courses;
