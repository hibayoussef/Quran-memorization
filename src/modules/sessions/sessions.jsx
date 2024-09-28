import React from "react";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../shared/components/AppBar/CustomAppBar.config";
import Courses from "../courses/components/Courses";
import HalfLayout from "./pages/halfLayout";
import FirstSection from "./pages/firstSection";
import MainLayout from "../../layout/MainLayout";
// Hearing sessions
const Sessions = ({ imageUrl, children }) => {

  return (
    <>
      <MainLayout title="دورات القرآن/ وقفات مع الآيات / جلسات التسميع">
        <HalfLayout imageUrl={imageUrl}>
          <FirstSection />
        </HalfLayout>
      </MainLayout>
    </>
  );
};

export default Sessions;

