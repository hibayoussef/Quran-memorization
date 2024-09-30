import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useState } from "react";
import PaginationComponent from "../../components/shared/pagination/pagination";
import TableComp from "../../components/shared/tableComp/TableComp";
import ViewAll from "../../components/shared/viewAll/ViewAll";
import MainLayout from "../../layout/MainLayout";
import Course from "../courses/components/card/Course";

// Define the columns
// const columns = [
//   { id: "name", label: "اسم الدّورة", minWidth: 110 },
//   {
//     id: "population",
//     label: "تاريخ الجّلسة",
//     minWidth: 110,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "موعد الجلسة",
//     minWidth: 110,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },

//   // Add an extra column for the button without a label
//   {
//     id: "startSession",
//     label: "", // No label
//     minWidth: 110,
//     align: "center",
//     render: () => (
//       <Button
//         sx={{ backgroundColor: "secondary.main", color: "text.buttonText" }}
//         variant="contained"
//       >
//         أبدأ الجلسة
//       </Button>
//     ),
//   },
// ];

// const createData = (name, code, population, size) => {
//   const density = population / size;
//   return { name, code, population, size, density };
// };

// const rows = [
//   createData("وقفات مع القرأن", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

// Define the rows

const columns = [
  { id: "name", label: "Name" },
  { id: "age", label: "Age" },
  { id: "email", label: "Email", align: "left" },
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

const AllIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log(`Current Page: ${value}`);
    // You can also fetch new data based on `value`
  };

  return (
    <>
      <MainLayout
        title="الدّورات المسجّل عليها"
        headerComponent={
          <ViewAll title="الدّورات المسؤول عنها:" showAllText="عرض الكل" />
        }
      >
        {/* Responsive Grid Layout */}
        <Grid container spacing={{ md: 5, xs: 2 }}>
          {Array.from({ length: 3 }).map((_, index) => (
            <Grid
              item
              xs={12} // Full width on extra small screens (mobile)
              sm={6} // 2 items per row on small screens (tablets)
              md={4} // 3 items per row on medium screens (desktop)
              lg={4} // 4 items per row on large screens
              key={index}
            >
              <Course />
            </Grid>
          ))}
        </Grid>
        <PaginationComponent
          count={20} // Total number of pages
          page={currentPage} // Controlled page state
          onChange={handlePageChange} // Handle page change
        />

        <ViewAll title="جدول الدّورات:" />

        <div style={{ padding: "1rem" }}>
          {/* <TableComponent
              columns={columns}
              rows={rows}
              rowsPerPageOptions={[5, 10, 25]} // Customizable rows per page options
              initialRowsPerPage={5} // Set the initial rows per page
              containerMaxHeight={500} // Control the max height
            /> */}

          <TableComp
            columns={columns}
            data={data}
            actions={actions} // Pass dynamic actions here
            onActionClick={handleActionClick}
          />
        </div>
      </MainLayout>
    </>
  );
};

export default AllIndex;
