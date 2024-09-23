import { Route, Routes } from "react-router-dom";
import CourseComponent from "./CourseComponent";
import RegisteredCourses from "./pages/registeredCourses";
import QuranCourses from './pages/quranCourses';
import CourseOne from "./pages/Course/CourseOne";
import TeacherCourses from "../TeacherCourses/teacherCourses";
import StudentCourses from "../StudentCourses/studentCourses";
import StudentProfile from "../profile/studentProfile";

const RoleRouting = () => {
  return (
    <Routes>
      <Route element={<CourseComponent />}>
        <Route path="/registered-courses" element={<RegisteredCourses />} />
        <Route path="/quran-courses" element={<QuranCourses />} />
        <Route path="/course" element={<CourseOne />} />
        <Route path="/my-courses" element={<TeacherCourses />} /> {/*teachers*/}
        <Route path="/student-courses" element={<StudentCourses />} />{" "}
        {/*student*/}
        <Route path="/student-profile" element={<StudentProfile />} />{" "}
        {/*student*/}
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default RoleRouting;
