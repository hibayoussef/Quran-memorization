import loadable from "@loadable/component";

// ============ Dashboard - Accounts Management ============
export const AccountsStudentsRouting = loadable(() =>
  import(
    "../../modules/admin/pages/accountsManagement/students/AccountsStudentsRouting"
  )
);
export const AccountsTeachersRouting = loadable(() =>
  import(
    "../../modules/admin/pages/accountsManagement/teachers/AccountsTeachersRouting"
  )
);
export const AccountsUsersRouting = loadable(() =>
  import("../../modules/admin/pages/accountsManagement/users/AccountsUsersRouting")
);

// ============ Dashboard - Courses Management ============
export const AllCoursesRouting = loadable(() =>
  import("../../modules/admin/pages/coursesManagement/all/AllCoursesRouting")
);
export const RegisterationRequestCoursesRouting = loadable(() =>
  import(
    "../../modules/admin/pages/coursesManagement/registerationRequests/RegisterationRequestsRouting"
  )
);

// ============ Dashboard - Levels Management ============
export const AllLevelsRouting = loadable(() =>
  import("../../modules/admin/pages/levelsManagement/all/AllLevelsRouting")
);
export const PlacementRequestsLevelsRouting = loadable(() =>
  import(
    "../../modules/admin/pages/levelsManagement/placementRequests/PlacementRequestsRouting"
  )
);

// ============ Dashboard - Evaluations Management ============
export const StudentsReviewsRouting = loadable(() =>
  import(
    "../../modules/admin/pages/evaluationsManagement/studentReviews/StudentReviewsRouting"
  )
);
export const TeacherReviewsRouting = loadable(() =>
  import(
    "../../modules/admin/pages/evaluationsManagement/teacherReviews/TeachersReviewsRouting"
  )
);

// ============ Dashboard - Teaching Requests ============
export const TeachingRequestsRouting = loadable(() =>
  import("../../modules/admin/pages/teachingRequests/TeachingRequestsRouting")
);

// ============ Dashboard - Notifications ============
export const AllNotificationsRouting = loadable(() =>
  import(
    "../../modules/admin/pages/notificationsManagement/AllNotificationsRouting"
  )
);
