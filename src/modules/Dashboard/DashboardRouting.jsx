import { Route, Routes } from "react-router-dom";
import {
  AccountsStudentsRouting,
  AccountsTeachersRouting,
  AccountsUsersRouting,
  AllCoursesRouting,
  AllLevelsRouting,
  PlacementRequestsLevelsRouting,
  RegisterationRequestCoursesRouting,
  StudentsReviewsRouting,
  TeacherReviewsRouting,
  TeachingRequestsRouting,
} from "../../routes/route";
import DashboardComponent from "./DashboardComponent";
import AllNotificationsRouting from "../notificationsManagement/AllNotificationsRouting";

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
          <Route path="/courses/all/*" element={<AllCoursesRouting />} />
          <Route
            path="/courses/registration-requests/*"
            element={<RegisterationRequestCoursesRouting />}
          />
          {/* manage Levels */}
          <Route path="/levels/all/*" element={<AllLevelsRouting />} />
          <Route
            path="/levels/placement-requests/*"
            element={<PlacementRequestsLevelsRouting />}
          />
          {/* manage evaluations */}
          <Route
            path="/evaluations/student-reviews/*"
            element={<StudentsReviewsRouting />}
          />
          <Route
            path="/evaluations/teacher-reviews/*"
            element={<TeacherReviewsRouting />}
          />
          {/* Teaching requests */}
          <Route
            path="/teaching/teaching-requests/all/*"
            element={<TeachingRequestsRouting />}
          />
          {/* Notifications */}
          <Route
            path="/notifications/all/*"
            element={<AllNotificationsRouting />}
          />
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
