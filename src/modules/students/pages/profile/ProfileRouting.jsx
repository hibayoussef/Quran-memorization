import { Route, Routes } from "react-router-dom";
import StudentIndex from "./pages/ProfileIndex";
import ProfileComponent from "./ProfileComponent";

const ProfileRouting = () => {
  return (
    <Routes>
      <Route element={<ProfileComponent />}>
        <Route path="/" element={<StudentIndex />} />
      </Route>
      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default ProfileRouting;
