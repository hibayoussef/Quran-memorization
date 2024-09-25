import { Route, Routes } from "react-router-dom";
import AccountsTeachersComponent from "./AccountsTeachersComponents";
import AccountsTeachersIndex from "./pages/AccountsTeachersIndex";

const AccountsTeachersRouting = () => {
  return (
    <Routes>
      <Route element={<AccountsTeachersComponent />}>
        <Route path="/" element={<AccountsTeachersIndex />} />
      </Route>

      <Route path="*" element={<p>not found 404</p>} />
    </Routes>
  );
};

export default AccountsTeachersRouting;
