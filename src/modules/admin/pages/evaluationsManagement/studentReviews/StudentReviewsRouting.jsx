import { Route, Routes } from "react-router-dom";
import StudentReviewsIndex from "./pages/StudentReviewsIndex";
import StudentReviewsComponent from "./StudentReviewsComponent";

const StudentReviewsRouting = () => {
  return (
    <Routes>
      <Route element={<StudentReviewsComponent />}>
        <Route path="/" element={<StudentReviewsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default StudentReviewsRouting;
