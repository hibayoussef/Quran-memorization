import { Delete, Edit, Visibility } from "@mui/icons-material";
import TableComp from "../../../components/shared/tableComp/TableComp";


const AllNotificationsIndex = () => {
  const columns = [
    { id: "name", label: "عنوان الإشعار" },
    { id: "type", label: "وصف الإشعار" },
    { id: "teacher", label: "تاريخ الإشعار", align: "left" },
    { id: "teacher", label: "وقت الإشعار", align: "left" },
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
          <TableComp
            columns={columns}
            data={data}
            actions={actions} // Pass dynamic actions here
            onActionClick={handleActionClick}
          />
    </>
  );
};

export default AllNotificationsIndex;
