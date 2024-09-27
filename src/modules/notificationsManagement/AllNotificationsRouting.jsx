import { Route, Routes } from "react-router-dom";
import AllNotificationsComponent from "./AllNotificationsComponent";
import AllNotificationsIndex from "./pages/AllNotificationsIndex";

const AllNotificationsRouting = () => {
  return (
    <Routes>
      <Route element={<AllNotificationsComponent />}>
        <Route path="/" element={<AllNotificationsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AllNotificationsRouting;
