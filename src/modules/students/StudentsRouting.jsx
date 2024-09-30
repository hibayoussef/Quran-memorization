import { Route, Routes } from "react-router-dom";
import ShouldBeLogged from "../../middlewares/ShouldBeLogged";
import {
  AllRouting,
  HadithRouting,
  QuranRouting,
  RegisteredRouting,
  StudentProfileRouting
} from "../../routes/route";
import StudentsComponent from "./StudentsComponent";

const StudentsRouting = () => {
  return (
    <Routes>
      {
        <Route element={<StudentsComponent />}>
          {/* Student Profile */}
          <Route
            path="/profile/*"
            element={
              <ShouldBeLogged allowedRoles={["student"]}>
                <StudentProfileRouting />
              </ShouldBeLogged>
            }
          />
          {/* Students Courses */}
          <Route
            path="/courses/all/*"
            element={
              <ShouldBeLogged allowedRoles={["student"]}>
                <AllRouting />
              </ShouldBeLogged>
            }
          />
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
          />
        </Route>
      }

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default StudentsRouting;
