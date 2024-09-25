import { Route, Routes } from "react-router-dom";
import {
  AccountsStudentsRouting,
  AccountsTeachersRouting,
  AccountsUsersRouting,
} from "../../routes/route";
import DashboardComponent from "./DashboardComponent.jsx";

const DashboardSidebarRouting = () => {
  return (
    <Routes>
      {
        <Route element={<DashboardComponent />}>
          {/* manage accounts */}
          <Route
            path="/accounts/students/*"
            element={<AccountsStudentsRouting />}
          />
          <Route
            path="/accounts/teachers/*"
            element={<AccountsTeachersRouting />}
          />
          <Route path="/accounts/users/*" element={<AccountsUsersRouting />} />
          {/* manage courses */}
          {/* <Route path="/courses/all/*" element={<AdsHomeRouting />} />
          <Route
            path="/courses/registration-requests/*"
            element={<AdsLobbyRouting />}
          /> */}
          {/* manage Levels */}
          {/* <Route path="/levels/all/*" element={<AdsHomeRouting />} />
          <Route
            path="/levels/placement-requests/*"
            element={<AdsHallRouting />}
          /> */}
          {/* manage evaluations */}
          {/* <Route path="/evaluations/all/*" element={<AdsHomeRouting />} />
          <Route
            path="/evaluations/student-reviews/*"
            element={<AdsHallRouting />}
          />
          <Route
            path="/evaluations/teacher-reviews/*"
            element={<AdsHallRouting />}
          /> */}
          {/* Teaching requests */}
          {/* <Route
            path="/teaching/teaching-requests/all/*"
            element={<AcademicLevelRouting />}
          /> */}
          {/* site management */}
          {/* <Route
            path="/settings/site-management/*"
            element={<AcademicLevelRouting />}
          /> */}
        </Route>
      }

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default DashboardSidebarRouting;
