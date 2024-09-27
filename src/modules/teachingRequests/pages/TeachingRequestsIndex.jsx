import { Delete, Edit, Visibility } from "@mui/icons-material";
import PageWrapper from "../../../components/styled/PageWrapper";
import ContentWrapper from "../../../components/styled/ContentWrapper";
import TableComp from "../../../components/shared/tableComp/TableComp";
import CustomAppBar from "../../shared/components/AppBar/CustomAppBar";
import { firstAppBarConfig, secondAppBarConfig } from "../../shared/components/AppBar/CustomAppBar.config";

const TeachingRequestsIndex = () => {
  const columns = [
    { id: "name", label: "اسم المدرّس" },
    { id: "type", label: "البريد الإلكتروني" },
    { id: "teacher", label: "تاريح الطّلب", align: "left" },
    { id: "teacher", label: "العمر", align: "left" },
    { id: "teacher", label: "المؤهل العلمي", align: "left" },
    { id: "teacher", label: "الحالة", align: "left" },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      type: 30,
      date: "11/5/2024",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      date: "11/5/2024",
    },
    {
      id: 3,
      name: "Alex Johnson",
      age: 35,
      date: "11/5/2024",
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

export default TeachingRequestsIndex;
