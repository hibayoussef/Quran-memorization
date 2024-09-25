import { Route, Routes } from "react-router-dom";
import CourseComponent from "./CourseComponent";
import RegisteredCourses from "./pages/RegisteredCourses";
import QuranCourses from './pages/QuranCourses';
import CourseOne from "./pages/course/CourseOne";
import TeacherCourses from "../teacherCourses/teacherCourses";
import StudentCourses from "../studentCourses/studentCourses";
import StudentProfile from "../profile/studentProfile";
import TeacherProfile from "../profile/teacherProfile";
import Sessions from "../sessions/sessions";
import SessionsDate from "../sessions/sessionsDate";

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
        <Route path="/teacher-profile" element={<TeacherProfile />} />{" "}
        <Route path="/hearing" element={<Sessions />} /> {/*student*/}
        <Route path="/hearing-date" element={<SessionsDate />} /> {/*student*/}
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default RoleRouting;
