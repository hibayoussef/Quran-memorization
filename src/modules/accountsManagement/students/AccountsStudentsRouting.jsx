import { Route, Routes } from "react-router-dom";
import AccountsStudentsComponent from "./AccountsStudentsComponent";
import AccountsStudentsIndex from "./pages/AccountsStudentsIndex";

const AccountsStudentsRouting = () => {
  return (
    <Routes>
      <Route element={<AccountsStudentsComponent />}>
        <Route path="/" element={<AccountsStudentsIndex />} />
      </Route>

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AccountsStudentsRouting;
