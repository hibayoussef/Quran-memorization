import { Route, Routes } from "react-router-dom";
import ShouldBeLogged from "../../middlewares/ShouldBeLogged";
import {
  AllResponsibleRouting,
  // AllRouting,
  //   HadithRouting,
  //   QuranRouting,
  //   RegisteredRouting,
  TeacherProfileRouting,
} from "../../routes/route";
import TeacherComponent from "./TeachersComponent";
import AllRouting from "./pages/courses/AllRouting";

const TeachersRouting = () => {
  return (
    <Routes>
      {
        <Route element={<TeacherComponent />}>
          <Route
            path="/courses/all/*"
            element={
              // <ShouldBeLogged allowedRoles={["student"]}>
              <AllRouting />
              // </ShouldBeLogged>
            }
          />

          <Route
            path="/courses/responsible/*"
            element={
              // <ShouldBeLogged allowedRoles={["student"]}>
              <AllResponsibleRouting />
              // </ShouldBeLogged>
            }
          />

          {/* Student Profile */}
          <Route
            path="/profile/*"
            element={
              // <ShouldBeLogged allowedRoles={["teacher"]}>
              <TeacherProfileRouting />
              // </ShouldBeLogged>
            }
          />
          {/* <Route
            path="/courses/all/*"
            element={
              // <ShouldBeLogged allowedRoles={["student"]}>
                <AllRouting />
              // </ShouldBeLogged>
            }
          /> */}
          {/* Students Courses */}
          {/*
          <Route
            path="/courses/registered/*"
            element={
              <ShouldBeLogged allowedRoles={["student"]}>
                <RegisteredRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/courses/quran/*"
            element={
              <ShouldBeLogged allowedRoles={["student"]}>
                <QuranRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/courses/hadith/*"
            element={
              <ShouldBeLogged allowedRoles={["student"]}>
                <HadithRouting />
              </ShouldBeLogged>
            }
          /> */}
        </Route>
      }

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default TeachersRouting;
