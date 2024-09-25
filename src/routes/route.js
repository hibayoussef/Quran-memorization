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

//=========== Dashboard ============
export const AccountsStudentsRouting = loadable(() =>
  import("../modules/accountsManagement/students/AccountsStudentsRouting")
);
export const AccountsTeachersRouting = loadable(() =>
  import("../modules/accountsManagement/teachers/AccountsTeachersRouting")
);
export const AccountsUsersRouting = loadable(() =>
  import("../modules/accountsManagement/users/AccountsUsersRouting")
);