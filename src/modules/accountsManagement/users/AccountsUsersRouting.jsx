import { Route, Routes } from "react-router-dom";
import AccountsUsersComponent from "./AccountsUsersComponents";
import AccountsUsersIndex from "./pages/AccountsUsersIndex";

const AccountsUsersRouting = () => {
  return (
    <Routes>
      <Route element={<AccountsUsersComponent />}>
        <Route path="/" element={<AccountsUsersIndex />} />
      </Route>

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AccountsUsersRouting;
