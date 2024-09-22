import { Route, Routes } from "react-router-dom";
import CourseComponent from "./CourseComponent";
import RegisteredCourses from "./pages/registeredCourses";
import QuranCourses from './pages/quranCourses';
import CourseOne from "./pages/Course/CourseOne";
import N from "../n/n";

const RoleRouting = () => {
  return (
    <Routes>
      <Route element={<CourseComponent />}>
        <Route path="/registered-courses" element={<RegisteredCourses />} />
        <Route path="/quran-courses" element={<QuranCourses />} />
        <Route path="/course" element={<CourseOne />} />
        <Route path="/courses-table" element={<N />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default RoleRouting;
