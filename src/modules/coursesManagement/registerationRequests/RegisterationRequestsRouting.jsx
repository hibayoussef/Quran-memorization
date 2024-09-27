import { Route, Routes } from "react-router-dom";
import RegisterationRequestsComponent from "./RegisterationRequestsComponent";
import RegisterationRequestsIndex from "./pages/RegisterationRequestsIndex";

const RegisterationRequestsRouting = () => {
  return (
    <Routes>
      <Route element={<RegisterationRequestsComponent />}>
        <Route path="/" element={<RegisterationRequestsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default RegisterationRequestsRouting;
