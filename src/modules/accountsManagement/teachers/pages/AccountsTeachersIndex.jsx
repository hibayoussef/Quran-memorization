

import { Delete, Edit, Visibility } from "@mui/icons-material";
import { firstAppBarConfig, secondAppBarConfig } from "../../../shared/components/AppBar/CustomAppBar.config";
import CustomAppBar from "../../../shared/components/AppBar/CustomAppBar";
import PageWrapper from "../../../../components/styled/PageWrapper";
import ContentWrapper from "../../../../components/styled/ContentWrapper";
import TableComp from "../../../../components/shared/tableComp/TableComp";

const AccountsTeachersIndex = () => {
  const columns = [
    { id: "name", label: "اسم المدرّس" },
    { id: "age", label: "البريد الإلكتروني" },
    { id: "email", label: "مكان الإقامة", align: "left" },
    { id: "year", label: "سنوات الخبرة", align: "left" },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 30,
      email: "john.doe@example.com",
      year: 6,
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      email: "jane.smith@example.com",
      year: 6,
    },
    {
      id: 3,
      name: "Alex Johnson",
      age: 35,
      email: "alex.johnson@example.com",
      year: 6,
    },
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
      {/* Use first app bar configuration */}
      <CustomAppBar {...firstAppBarConfig} />
      {/* Main content */}

      {/* Use second app bar configuration */}
      <CustomAppBar {...secondAppBarConfig} />

      <PageWrapper>
        <ContentWrapper>
          <TableComp
            columns={columns}
            data={data}
            actions={actions} // Pass dynamic actions here
            onActionClick={handleActionClick}
          />
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default AccountsTeachersIndex;
