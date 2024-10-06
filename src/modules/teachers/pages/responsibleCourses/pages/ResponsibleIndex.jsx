import { Delete, Edit, Visibility } from "@mui/icons-material";
import { CircularProgress, Grid } from "@mui/material";
import { useState } from "react";
import PaginationComponent from "../../../../../components/shared/pagination/pagination";
import MainLayout from "../../../../../layout/MainLayout";
import DynamicCourseCard from "../../../../students/components/card/DynamicCourseCard";
import { useResponsibleCourses } from "../../../../../services/responsibleCourses/useResponsibleCourses";

const ResponsibleIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // استخدام البيانات القادمة من الـ API
  const {
    data, // بيانات الكورسات
    isLoading, // حالة التحميل
    setPage, // لتغيير الصفحة
    refetch, // لإعادة جلب البيانات
  } = useResponsibleCourses();

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value); // تغيير الصفحة
    setCurrentPage(value); // تحديث حالة الصفحة الحالية
    refetch(); // إعادة جلب البيانات بناءً على الصفحة الجديدة
  };

  return (
    <>
      <MainLayout title="الدّورات المسؤول عنها">
        <Grid container spacing={{ md: 5, xs: 2 }}>
          {isLoading ? (
            <>
            <CircularProgress color="text.secondary" />
            </>
          ) : (
            data?.courses?.map((course, index) => (
              <Grid
                item
                xs={12} // Full width on extra small screens (mobile)
                sm={6} // 2 items per row on small screens (tablets)
                md={4} // 3 items per row on medium screens (desktop)
                lg={4} // 4 items per row on large screens
                key={index}
              >
                <DynamicCourseCard course={course} type="responsible" />
              </Grid>
            ))
          )}
        </Grid>

        {/* Pagination component */}
        <PaginationComponent
          currentPage={data?.current_page || currentPage} // استخدام الصفحة الحالية من البيانات
          totalPages={data?.last_page || 1} // استخدام عدد الصفحات من البيانات
          onPageChange={handlePageChange} // تحديث الصفحة عند التغيير
        />
      </MainLayout>
    </>
  );
};

export default ResponsibleIndex;
