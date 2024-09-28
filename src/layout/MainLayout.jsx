// MainLayout.jsx
import React from "react";
import CustomAppBar from "../modules/shared/components/AppBar/CustomAppBar";
import { firstAppBarConfig, secondAppBarConfig } from "../modules/shared/components/AppBar/CustomAppBar.config";
import Courses from "../modules/courses/components/Courses";
import PageWrapper from "../components/styled/PageWrapper";
import ContentWrapper from "../components/styled/ContentWrapper";


const MainLayout = ({ title, headerComponent, children }) => {
  return (
    <>
      {/* First app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />

      {/* Second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />

      {/* Course Title if provided */}
      {title && <Courses title={title} />}

      <PageWrapper>
        {/* If a headerComponent prop is passed, render it here */}
        {headerComponent && headerComponent}

        <ContentWrapper>{children}</ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default MainLayout;
