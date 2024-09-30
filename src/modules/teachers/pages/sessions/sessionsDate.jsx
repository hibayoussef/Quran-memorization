import React from "react";
import Courses from "../courses/components/Courses";
import CustomAppBar from "../../../shared/components/AppBar/CustomAppBar";
import {
    firstAppBarConfig,
    secondAppBarConfig,
} from "../../../shared/components/AppBar/CustomAppBar.config";
import FirstDateSection from "./pages/firstDateSection";
import HalfLayout from "./pages/halfLayout";
import MainLayout from "../../../../layout/MainLayout";

const SessionsDate = ({ imageUrl, children }) => {
  return (
    <>
      <MainLayout title="دورات القرآن/ وقفات مع الآيات / موعد جلسات التسميع">
        <HalfLayout imageUrl={imageUrl}>
          <FirstDateSection />
        </HalfLayout>
      </MainLayout>
    </>
  );
};

export default SessionsDate;
