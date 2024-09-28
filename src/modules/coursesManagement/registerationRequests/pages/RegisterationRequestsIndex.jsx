import { Delete, Edit, Visibility } from "@mui/icons-material";
import TableComp from "../../../../components/shared/tableComp/TableComp";
import ContentWrapper from "../../../../components/styled/ContentWrapper";
import PageWrapper from "../../../../components/styled/PageWrapper";

const RegisterationRequestsIndex = () => {
  const columns = [
    { id: "name", label: "اسم الطّالب" },
    { id: "type", label: "تاريخ الطّلب" },
    { id: "date", label: "اسم الدّورة", align: "left" },
    { id: "teacher", label: "نوع الدّورة", align: "left" },
    { id: "teacher", label: "حالة الطّلب", align: "left" },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      type: 30,
      date: "11/5/2024",
      teacher: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 25,
      date: "11/5/2024",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Alex Johnson",
      age: 35,
      date: "11/5/2024",
      email: "alex.johnson@example.com",
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

export default RegisterationRequestsIndex;
