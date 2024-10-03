import React, { useEffect } from "react";
import MainLayout from "../../../../../../layout/MainLayout";
import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FilterTabs from "../../../../components/tabs/FilterTabs";
import Course from "../../../../components/card/Course";
import DynamicCourseCard from "../../../../components/card/DynamicCourseCard";
import { useCourses } from "../../../../../../services/courses/useCourses";

const QuranIndex = () => {
  const tabsData = [
    {
      label: "جميع الدّورات",
      content: <Typography>Content for جميع الدورات</Typography>,
    },
    {
      label: "دورات عاديّة",
      content: <Typography>Content for دورات القرآن</Typography>,
    },
    {
      label: "دورات مكثّفة",
      content: <Typography>Content for دورات الحديث</Typography>,
    },
  ];
  const {
    data: quranData, // البيانات القادمة من الـ API
    isLoading: quranLoading, // حالة التحميل
    page: quranPage, // الصفحة الحالية
    setPage: setQuranPage, // تغيير الصفحة
    refetch: refetchQuranCourses, // إعادة جلب البيانات
    setFilters: setQuranFilters, // تغيير الفلاتر
  } = useCourses();

  // إعداد الفلتر لجلب دورات القرآن فقط عند بداية تحميل الصفحة
  useEffect(() => {
    setQuranFilters({ category_id: 1 }); // تعيين فلتر فئة دورات القرآن
    refetchQuranCourses(); // إعادة جلب البيانات بعد تعيين الفلتر
  }, [quranPage, setQuranFilters, refetchQuranCourses]);


  return (
    <>
      <MainLayout title="دورات القرآن">
        <FilterTabs tabsData={tabsData} />

        <Grid container spacing={{ md: 5, xs: 2 }}>
        {quranLoading ? (
            <p>Loading...</p> 
          ) : (
            quranData?.data?.courses?.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                <DynamicCourseCard course={course} type="quran" />
              </Grid>
            ))
          )}
        </Grid>
        <Stack
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "2rem",
          }}
        >
          <Pagination count={10} variant="outlined" shape="rounded" />
        </Stack>
      </MainLayout>
    </>
  );
};

export default QuranIndex;
