import { Route, Routes } from "react-router-dom";
import AllLevelsComponent from "./AllLevelsComponent";
import AllLevelsIndex from "./pages/AllLevelsIndex";

const AllLevelsRouting = () => {
  return (
    <Routes>
      <Route element={<AllLevelsComponent />}>
        <Route path="/" element={<AllLevelsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AllLevelsRouting;
