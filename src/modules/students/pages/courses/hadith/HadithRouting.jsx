import { Route, Routes } from "react-router-dom";
import HadithComponent from "./HadithComponent";
import HadithIndex from "./pages/HadithIndex";

const HadithRouting = () => {
  return (
    <Routes>
      <Route element={<HadithComponent />}>
        <Route path="/" element={<HadithIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default HadithRouting;
