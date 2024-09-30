import { Route, Routes } from "react-router-dom";
import ProfileIndex from "./pages/ProfileIndex";
import ProfileComponent from "./ProfileComponent";

const ProfileRouting = () => {
  return (
    <Routes>
      <Route element={<ProfileComponent />}>
        <Route path="/" element={<ProfileIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default ProfileRouting;
