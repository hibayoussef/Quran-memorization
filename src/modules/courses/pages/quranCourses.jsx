import React from "react";
import CustomeNavbar from "../../shared/components/customNavbar/customeNavbar";
import Courses from "../components/courses";

const QuranCourses = () => {
  const handleMenuClick = () => {
    console.log("Menu clicked");
  };

  const handleLoginClick = () => {
    console.log("Login clicked");
  };

  return (
    <>
      <CustomeNavbar
        onMenuClick={handleMenuClick}
        phoneNumber="+1234567890"
        onLoginClick={handleLoginClick}
        backgroundColor="headerText.main"
        height={40} // Set height to 40px
      />
      <CustomeNavbar
        title="My App"
        onMenuClick={handleMenuClick}
        height={63} // Set height to 63px
        showMenuIcon={true}
        backgroundColor={"background.paper"}
      />
      <Courses title="دورات القرآن" />
    </>
  );
};

export default QuranCourses;
