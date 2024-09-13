import React from "react";

// ============ Auth ============
export const CreateAccount = React.lazy(() => import("../pages/newAccount"));
export const ResetPassword = React.lazy(() =>
  import("../pages/forgotPassword")
);
export const VerificationCodeForm = React.lazy(() =>
  import("../pages/VerificationCodeForm")
);
