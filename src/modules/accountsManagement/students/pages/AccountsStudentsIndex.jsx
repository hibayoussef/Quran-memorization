import { Delete, Edit, Visibility } from "@mui/icons-material";
import TableComp from "../../../../components/shared/tableComp/TableComp";
import ContentWrapper from "../../../../components/styled/ContentWrapper";
import PageWrapper from "../../../../components/styled/PageWrapper";

const AccountsStudentsIndex = () => {
  const columns = [
    { id: "name", label: "اسم الطّالب" },
    { id: "age", label: "البريد الإلكتروني" },
    { id: "email", label: "مكان الإقامة", align: "left" },
  ];

  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
    { id: 3, name: "Alex Johnson", age: 35, email: "alex.johnson@example.com" },
  ];

  // Define dynamic actions
  const actions = [
    { label: "View", value: "view", icon: <Visibility /> },
    { label: "Edit", value: "edit", icon: <Edit /> },
    { label: "Delete", value: "delete", icon: <Delete /> },
  ];

  const handleActionClick = (action, row) => {
    alert(`Action: ${action} for row: ${row.name}`);
  };
  return (
    <>
            <TableComp
              columns={columns}
              data={data}
              actions={actions} // Pass dynamic actions here
              onActionClick={handleActionClick}
            />
    </>
  );
};

export default AccountsStudentsIndex;
