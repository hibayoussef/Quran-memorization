import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import {
  CreateAccount,
  ResetPassword,
  VerificationCodeForm
} from "../src/routes/route";
import Loader from "./components/shared/Loader";
import ShouldBeLogged from "./middlewares/ShouldBeLogged";
import ShouldNotBeLogged from "./middlewares/ShouldNotBeLogged";
import DashboardRouting from "./modules/admin/DashboardRouting";
import Login from "./pages/auth/pages/Login";
import StudentsRouting from "./modules/students/StudentsRouting";
import TeachersRouting from "./modules/teachers/TeachersRouting";

const AppRouting = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ShouldNotBeLogged>
            <Login />
          </ShouldNotBeLogged>
        }
      />
      <Route path="/new-account" element={<CreateAccount />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/reset-password/check-code/:email"
        element={<VerificationCodeForm />}
      />

      {/* Admin */}
      {/* <Route
        path="dashboard/*"
        element={
          <ShouldBeLogged allowedRoles={["admin"]}>
            <React.Suspense fallback={<Loader />}>
              <QueryClientProvider client={queryClient}>
                <DashboardRouting />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </React.Suspense>
          </ShouldBeLogged>
        }
      /> */}

      {/* Teachers */}
      {/* <Route
        path="teacher/*"
        element={
          <ShouldBeLogged allowedRoles={["teacher"]}>
            <React.Suspense fallback={<Loader />}>
              <QueryClientProvider client={queryClient}>
                <TeachersRouting />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </React.Suspense>
          </ShouldBeLogged>
        }
      /> */}

      {/* Students */}
      <Route
        path="student/*"
        element={
          <ShouldBeLogged allowedRoles={["student"]}>
            <React.Suspense fallback={<Loader />}>
              <QueryClientProvider client={queryClient}>
                <StudentsRouting />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </React.Suspense>
          </ShouldBeLogged>
        }
      />
    </Routes>
  );
};

export default AppRouting;
