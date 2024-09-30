import React from "react";

export const CreateAccount = React.lazy(() =>
  import("../../pages/auth/pages/newAccount")
);
export const ResetPassword = React.lazy(() =>
  import("../../pages/auth/pages/forgotPassword")
);
export const VerificationCodeForm = React.lazy(() =>
  import("../../pages/auth/pages/VerificationCodeForm")
);
