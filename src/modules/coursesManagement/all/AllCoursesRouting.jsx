import { Route, Routes } from "react-router-dom";
import AllCoursesComponent from "./AllCoursesComponent";
import AllCoursesIndex from "./pages/AllCoursesIndex";

const AllCoursesRouting = () => {
  return (
    <Routes>
      <Route element={<AllCoursesComponent />}>
        <Route path="/" element={<AllCoursesIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AllCoursesRouting;
