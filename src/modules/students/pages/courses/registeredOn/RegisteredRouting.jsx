import { Route, Routes } from "react-router-dom";
import RegisteredComponent from "./RegisteredComponent";
import RegisteredIndex from "./pages/RegisteredIndex";

const RegisteredRouting = () => {
  return (
    <Routes>
      <Route element={<RegisteredComponent />}>
        <Route path="/" element={<RegisteredIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default RegisteredRouting;
