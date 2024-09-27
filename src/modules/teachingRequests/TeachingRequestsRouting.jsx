import { Route, Routes } from "react-router-dom";
import TeachingRequestsIndex from "./pages/TeachingRequestsIndex";
import TeachingRequestsComponent from "./TeachingRequestsComponent";

const TeachingRequestsRouting = () => {
  return (
    <Routes>
      <Route element={<TeachingRequestsComponent />}>
        <Route path="/" element={<TeachingRequestsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default TeachingRequestsRouting;
