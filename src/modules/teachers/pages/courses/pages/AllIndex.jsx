import { Delete, Edit, Visibility } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import PaginationComponent from "../../../../../components/shared/pagination/pagination";
import TableComp from "../../../../../components/shared/tableComp/TableComp";
import MainLayout from "../../../../../layout/MainLayout";
import ViewAll from "../../../../../components/shared/viewAll/ViewAll";
import { useResponsibleCourses } from "../../../../../services/responsibleCourses/useResponsibleCourses";
import DynamicCourseCard from "../../../../students/components/card/DynamicCourseCard";
import NoData from "../../../../../components/shared/noData/NoData";

const columns = [
  { id: "title", label: "اسم الدّورة" },
  { id: "start_date", label: "تاريخ الجّلسة" },
  { id: "start_time", label: "موعد الجّلسة", align: "left" },
];

// Define dynamic actions
const actions = [
  { label: "View", value: "view", icon: <Visibility /> },
  { label: "Edit", value: "edit", icon: <Edit /> },
  { label: "Delete", value: "delete", icon: <Delete /> },
];

const handleActionClick = (action, row) => {
  alert(`Action: ${action} for course: ${row.name}`);
};

const AllIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch courses data from the API
  const {
    data, // Courses data
    isLoading, // Loading state
    page, // Current page
    setPage, // To change the page
    refetch, // To refetch the data
  } = useResponsibleCourses();
  console.log("datar: ", data);

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
    setCurrentPage(value);
    refetch(); // Refetch the data based on the new page
    console.log(`Current Page: ${value}`);
  };

  return (
    <>
      <MainLayout
        headerComponent={
          <ViewAll
            title="الدّورات المسؤول عنها:"
            showAllText={data?.courses?.length > 0 ? "عرض الكل" : undefined}
            redirectTo="/teacher/courses/responsible"
          />
        }
      >
        {isLoading ? (
          <p>جاري التحميل...</p>
        ) : data?.courses?.length === 0 ? (
          <>
            <NoData text="لا يوجد دورات" />
          </>
        ) : (
          <Grid container spacing={{ md: 5, xs: 2 }}>
            {data?.courses?.slice(0, 3).map((course, index) => (
              <Grid
                item
                xs={12} // Full width on extra small screens (mobile)
                sm={6} // 2 items per row on small screens (tablets)
                md={4} // 3 items per row on medium screens (desktop)
                lg={4} // 4 items per row on large screens
                key={index}
                style={{ marginBottom: "2rem" }}
              >
                <DynamicCourseCard course={course} type="responsible" />
              </Grid>
            ))}
          </Grid>
        )}

        <ViewAll title="جدول الدّورات:" />

        <div style={{ padding: "1rem" }}>
          <TableComp
            columns={columns}
            data={data?.courses || []} // Use real data from the API
            actions={actions} // Pass dynamic actions here
            onActionClick={handleActionClick}
          />
        </div>
      </MainLayout>
    </>
  );
};

export default AllIndex;
