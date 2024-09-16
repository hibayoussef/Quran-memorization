import { Route, Routes } from "react-router-dom";
import CourseComponent from "./CourseComponent";
import RegisteredCourses from "./pages/registeredCourses";

const RoleRouting = () => {
  return (
    <Routes>
      <Route element={<CourseComponent />}>
        <Route path="/registered-courses" element={<RegisteredCourses />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default RoleRouting;
