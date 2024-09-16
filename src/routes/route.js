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