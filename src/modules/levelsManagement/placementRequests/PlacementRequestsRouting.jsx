import { Route, Routes } from "react-router-dom";
import PlacementRequestsIndex from "./pages/PlacementRequestsIndex";
import PlacementRequestsComponent from "./PlacementRequestsComponent";

const PlacementRequestsRouting = () => {
  return (
    <Routes>
      <Route element={<PlacementRequestsComponent />}>
        <Route path="/" element={<PlacementRequestsIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default PlacementRequestsRouting;
