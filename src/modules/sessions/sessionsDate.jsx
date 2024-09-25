import React from "react";
import Courses from "../courses/components/Courses";
import CustomAppBar from "../shared/components/AppBar/CustomAppBar";
import {
    firstAppBarConfig,
    secondAppBarConfig,
} from "../shared/components/AppBar/CustomAppBar.config";
import FirstDateSection from "./pages/firstDateSection";
import HalfLayout from "./pages/halfLayout";

const SessionsDate = ({ imageUrl, children }) => {
  return (
    <>
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />
      <Courses title="دورات القرآن/ وقفات مع الآيات / موعد جلسات التسميع" />

      {/* ********************************************************************** */}
      <HalfLayout imageUrl={imageUrl}>
        <FirstDateSection />
      </HalfLayout>
    </>
  );
};

export default SessionsDate;
