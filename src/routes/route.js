import React from "react";

// ============ Auth ============
export const NewAccount = React.lazy(() =>
  import("../pages/forgotPassword")
);
export const ResetPassword = React.lazy(() => import("../pages/forgotPassword"));
// export const PasswordEditForm = React.lazy(() =>
//   import("pages/PasswordEditForm")
// );
export const VerificationCodeForm = React.lazy(() =>
  import("../pages/VerificationCodeForm")
);
// ============ DashboardRouting ============
// export const DashboardRouting = React.lazy(() =>
//   import("../modules/dashboard/DashboardRouting")
// );

