import { Route, Routes } from "react-router-dom";
import AllComponent from "./allComponent";
import AllIndex from "./pages/allIndex";


const AllRouting = () => {
  return (
    <Routes>
      <Route element={<AllComponent />}>
        <Route path="/" element={<AllIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AllRouting;
