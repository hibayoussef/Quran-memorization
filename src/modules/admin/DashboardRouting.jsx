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
  AllNotificationsRouting,
} from "../../routes/route";
import DashboardComponent from "./DashboardComponent";
import ShouldBeLogged from "../../middlewares/ShouldBeLogged";

const DashboardRouting = () => {
  return (
    <Routes>
      {
        <Route element={<DashboardComponent />}>
          {/* manage accounts */}
          <Route
            path="/accounts/students/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <AccountsStudentsRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/accounts/teachers/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <AccountsTeachersRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/accounts/users/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <AccountsUsersRouting />
              </ShouldBeLogged>
            }
          />
          {/* manage courses */}
          <Route
            path="/courses/all/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <AllCoursesRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/courses/registration-requests/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <RegisterationRequestCoursesRouting />
              </ShouldBeLogged>
            }
          />
          {/* manage Levels */}
          <Route
            path="/levels/all/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <AllLevelsRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/levels/placement-requests/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <PlacementRequestsLevelsRouting />
              </ShouldBeLogged>
            }
          />
          {/* manage evaluations */}
          <Route
            path="/evaluations/student-reviews/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <StudentsReviewsRouting />
              </ShouldBeLogged>
            }
          />
          <Route
            path="/evaluations/teacher-reviews/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <TeacherReviewsRouting />
              </ShouldBeLogged>
            }
          />
          {/* Teaching requests */}
          <Route
            path="/teaching/teaching-requests/all/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <TeachingRequestsRouting />
              </ShouldBeLogged>
            }
          />
          {/* Notifications */}
          <Route
            path="/notifications/all/*"
            element={
              <ShouldBeLogged allowedRoles={["admin"]}>
                <AllNotificationsRouting />
              </ShouldBeLogged>
            }
          />
        </Route>
      }

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default DashboardRouting;
