import { Route, Routes } from "react-router-dom";
import QuranComponent from "./QuranComponent";
import QuranIndex from "./pages/QuranIndex";

const QuranRouting = () => {
  return (
    <Routes>
      <Route element={<QuranComponent />}>
        <Route path="/" element={<QuranIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default QuranRouting;
