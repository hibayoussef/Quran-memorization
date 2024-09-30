import { Route, Routes } from "react-router-dom";
import TeachersReviewsIndex from "./pages/TeachersReviewsIndex";
import TeachersReviewsComponent from "./TeachersReviewsComponent";

const TeachersReviewsRouting = () => {
  return (
    <Routes>
      <Route element={<TeachersReviewsComponent />}>
        <Route path="/" element={<TeachersReviewsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default TeachersReviewsRouting;
