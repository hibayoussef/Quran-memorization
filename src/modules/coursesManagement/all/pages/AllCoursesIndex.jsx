import { Delete, Edit, Visibility } from "@mui/icons-material";
import TableComp from "../../../../components/shared/tableComp/TableComp";
import CustomAppBar from "../../../shared/components/AppBar/CustomAppBar";
import {
  firstAppBarConfig,
  secondAppBarConfig,
} from "../../../shared/components/AppBar/CustomAppBar.config";
import PageWrapper from "../../../../components/styled/PageWrapper";
import ContentWrapper from "../../../../components/styled/ContentWrapper";

const AllCoursesIndex = () => {
  const columns = [
    { id: "name", label: "اسم الدّورة" },
    { id: "type", label: "نوع الدّورة" },
    { id: "date", label: "تاريخ بدءالدّورة", align: "left" },
    { id: "teacher", label: "مدرّس الدّورة", align: "left" },
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

export default AllCoursesIndex;
