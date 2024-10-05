import { Route, Routes } from "react-router-dom";
import ResponsibleComponent from "./ResponsibleComponent";
import ResponsibleIndex from "./pages/ResponsibleIndex";

const ResponsibleRouting = () => {
  return (
    <Routes>
      <Route element={<ResponsibleComponent />}>
        <Route path="/" element={<ResponsibleIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default ResponsibleRouting;
