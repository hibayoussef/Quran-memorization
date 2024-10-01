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
import AuthRedirect from "./middlewares/AuthRedirect";
import StudentsRouting from "./modules/students/StudentsRouting";
import Login from "./pages/auth/pages/Login";

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
          <AuthRedirect shouldBeLogged={false}>
            <Login />
          </AuthRedirect>
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
      {/* Students */}
      <Route
        path="student/*"
        element={
          <AuthRedirect shouldBeLogged={true} allowedRoles={["student"]}>
            <React.Suspense fallback={<Loader />}>
              <QueryClientProvider client={queryClient}>
                <StudentsRouting />
                <ReactQueryDevtools initialIsOpen={false} />
              </QueryClientProvider>
            </React.Suspense>
          </AuthRedirect>
        }
      />
    </Routes>
  );
};

export default AppRouting;
