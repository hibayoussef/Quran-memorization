import React from "react";
import loadable from "@loadable/component";


// ============ Auth ============
export const CreateAccount = React.lazy(() => import("../pages/auth/pages/newAccount"));
export const ResetPassword = React.lazy(() =>
  import("../pages/auth/pages/forgotPassword")
);
export const VerificationCodeForm = React.lazy(() =>
  import("../pages/auth/pages/VerificationCodeForm")
);

// =========== Courses ============
export const CoursesRouting
  = loadable(() => import("../modules/courses/CourseRouting"));

//=========== Dashboard - accounts Management ============
export const AccountsStudentsRouting = loadable(() =>
  import("../modules/accountsManagement/students/AccountsStudentsRouting")
);
export const AccountsTeachersRouting = loadable(() =>
  import("../modules/accountsManagement/teachers/AccountsTeachersRouting")
);
export const AccountsUsersRouting = loadable(() =>
  import("../modules/accountsManagement/users/AccountsUsersRouting")
);
//=========== Dashboard - Courses Management ============
export const AllCoursesRouting = loadable(() =>
  import("../modules/coursesManagement/all/AllCoursesRouting")
);
export const RegisterationRequestCoursesRouting = loadable(() =>
  import("../modules/coursesManagement/registerationRequests/RegisterationRequestsRouting")
);
//=========== Dashboard - Levels Management ============
export const AllLevelsRouting = loadable(() =>
  import("../modules/levelsManagement/all/AllLevelsRouting")
);
export const PlacementRequestsLevelsRouting = loadable(() =>
  import(
    "../modules/levelsManagement/placementRequests/PlacementRequestsRouting"
  )
);
//=========== Dashboard - Evaluations Management ============
export const StudentsReviewsRouting = loadable(() =>
  import("../modules/evaluationsManagement/studentReviews/StudentReviewsRouting")
);
export const TeacherReviewsRouting = loadable(() =>
  import(
    "../modules/evaluationsManagement/teacherReviews/TeachersReviewsRouting"
  )
);
//=========== Dashboard - TeachingRequestsRouting ============
export const TeachingRequestsRouting = loadable(() =>
  import(
    "../modules/teachingRequests/TeachingRequestsRouting"
  )
);
//=========== Dashboard - AllNotificationsRouting ============
export const AllNotificationsRouting = loadable(() =>
  import(
    "../modules/notificationsManagement/AllNotificationsRouting"
  )
);

