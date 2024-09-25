import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/pages/Login";
import {
  ResetPassword,
  VerificationCodeForm,
  CreateAccount,
  CoursesRouting,
} from "../src/routes/route";
import Loader from "./components/shared/Loader";
import DashboardSidebarRouting from "./modules/Dashboard/DashboardRouting";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/new-account" element={<CreateAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/reset-password/check-code/:email"
        element={<VerificationCodeForm />}
      />
      <Route path="/courses/*" element={<CoursesRouting />} />
      <Route
        path="Dashboard/*"
        element={
          // <ShouldBeLogged>
            <React.Suspense fallback={<Loader />}>
              {/* <QueryClientProvider client={queryClient}> */}
                <DashboardSidebarRouting />
                {/* <ReactQueryDevtools initialIsOpen={false} /> */}
              {/* </QueryClientProvider> */}
            </React.Suspense>
          // </ShouldBeLogged>
        }
      />
    </Routes>
  );
};

export default AppRouting;
