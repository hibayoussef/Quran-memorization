// // src/routes/AdminRoutes.js
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "../../middlewares/protectedRoute";
// import AdminDashboard from "../pages/admin/AdminDashboard"; // مثال

// const StudentRoutes = () => (
//   <Routes>
//     <Route
//       path="/admin/dashboard"
//       element={
//         <ProtectedRoute role="student">
//           <AdminDashboard />
//         </ProtectedRoute>
//       }
//     />
//   </Routes>
// );

// export default StudentRoutes;
// src/routes/StudentRoutes.js
import loadable from "@loadable/component";

export const AllRouting = loadable(() =>
  import("../../modules/students/pages/courses/all/AllRouting")
);
export const RegisteredRouting = loadable(() =>
  import("../../modules/students/pages/courses/registeredOn/RegisteredRouting")
);
export const QuranRouting = loadable(() =>
  import("../../modules/students/pages/courses/quranCourses/QuranRouting")
);
export const HadithRouting = loadable(() =>
  import("../../modules/students/pages/courses/hadith/HadithRouting")
);
export const StudentProfileRouting = loadable(() =>
  import("../../modules/students/pages/profile/ProfileRouting")
);
