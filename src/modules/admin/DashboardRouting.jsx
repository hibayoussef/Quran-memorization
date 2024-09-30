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
import AuthRedirect from "../../middlewares/AuthRedirect";

const DashboardRouting = () => {
  return (
    <Routes>
      {
        <Route element={<DashboardComponent />}>
          {/* manage accounts */}
          <Route
            path="/accounts/students/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <AccountsStudentsRouting />
              </AuthRedirect>
            }
          />

          <Route
            path="/accounts/teachers/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <AccountsTeachersRouting />
              </AuthRedirect>
            }
          />
          <Route
            path="/accounts/users/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <AccountsUsersRouting />
              </AuthRedirect>
            }
          />
          {/* manage courses */}
          <Route
            path="/courses/all/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <AllCoursesRouting />
              </AuthRedirect>
            }
          />
          <Route
            path="/courses/registration-requests/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <RegisterationRequestCoursesRouting />
              </AuthRedirect>
            }
          />
          {/* manage Levels */}
          <Route
            path="/levels/all/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <AllLevelsRouting />
              </AuthRedirect>
            }
          />
          <Route
            path="/levels/placement-requests/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <PlacementRequestsLevelsRouting />
              </AuthRedirect>
            }
          />
          {/* manage evaluations */}
          <Route
            path="/evaluations/student-reviews/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <StudentsReviewsRouting />
              </AuthRedirect>
            }
          />
          <Route
            path="/evaluations/teacher-reviews/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <TeacherReviewsRouting />
              </AuthRedirect>
            }
          />
          {/* Teaching requests */}
          <Route
            path="/teaching/teaching-requests/all/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <TeachingRequestsRouting />
              </AuthRedirect>
            }
          />
          {/* Notifications */}
          <Route
            path="/notifications/all/*"
            element={
              <AuthRedirect shouldBeLogged={true} allowedRoles={["admin"]}>
                <AllNotificationsRouting />
              </AuthRedirect>
            }
          />
        </Route>
      }

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default DashboardRouting;
