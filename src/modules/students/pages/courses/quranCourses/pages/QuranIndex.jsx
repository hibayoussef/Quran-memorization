import React, { useEffect } from "react";
import MainLayout from "../../../../../../layout/MainLayout";
import { Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import FilterTabs from "../../../../components/tabs/FilterTabs";
import DynamicCourseCard from "../../../../components/card/DynamicCourseCard";
import { useCourses } from "../../../../../../services/courses/useCourses";
import ViewAll from "../../../../../../components/shared/ViewAll/ViewAll";
import ContentWrapper from "../../../../../../components/styled/ContentWrapper";

const QuranIndex = () => {
  const tabsData = [
    {
      label: "جميع الدّورات",
      type_id: null, // لا يوجد تصنيف محدد
    },
    {
      label: "دورات عاديّة",
      type_id: 1, // تصنيف الدورات العادية
    },
    {
      label: "دورات مكثّفة",
      type_id: 2, // تصنيف الدورات المكثفة
    },
  ];

  const {
    data: quranData,
    isLoading: quranLoading,
    setFilters: setQuranFilters,
    refetch: refetchQuranCourses,
  } = useCourses();

  // إعداد الفلتر لجلب دورات القرآن عند بداية تحميل الصفحة
  useEffect(() => {
    setQuranFilters({ category_id: 1, type_id: null }); // تعيين فلتر فئة دورات القرآن
    refetchQuranCourses(); // إعادة جلب البيانات بعد تعيين الفلتر
  }, [setQuranFilters, refetchQuranCourses]);

  return (
    <>
      <MainLayout title="دورات القرآن">
        <FilterTabs
          tabsData={tabsData.map((tab) => ({
            label: tab.label,
            onClick: () => {
              setQuranFilters({ category_id: 1, type_id: tab.type_id });
              refetchQuranCourses(); // إعادة جلب البيانات عند تغيير التاب
            },
          }))}
        />
        {/* المستوى الأول */}
        <ViewAll title="المستوى الأوّل" showAllText="عرض الكل" />
        <ContentWrapper>
          <Grid container spacing={{ md: 5, xs: 2 }}>
            {quranLoading ? (
              <p>Loading...</p>
            ) : (
              quranData?.data?.courses?.filter(course => course.level_id === 1).map((course, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <DynamicCourseCard course={course} type="quran" />
                </Grid>
              ))
            )}
          </Grid>
        </ContentWrapper>
        
        {/* المستوى الثاني */}
        <ViewAll title="المستوى الثّاني" showAllText="عرض الكل" />
        <ContentWrapper>
          <Grid container spacing={{ md: 5, xs: 2 }}>
            {quranLoading ? (
              <p>Loading...</p>
            ) : (
              quranData?.data?.courses?.filter(course => course.level_id === 2).map((course, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <DynamicCourseCard course={course} type="quran" />
                </Grid>
              ))
            )}
          </Grid>
        </ContentWrapper>
        
        {/* المستوى الثالث */}
        <ViewAll title="المستوى الثّالث" showAllText="عرض الكل" />
        <ContentWrapper>
          <Grid container spacing={{ md: 5, xs: 2 }}>
            {quranLoading ? (
              <p>Loading...</p>
            ) : (
              quranData?.data?.courses?.filter(course => course.level_id === 3).map((course, index) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                  <DynamicCourseCard course={course} type="quran" />
                </Grid>
              ))
            )}
          </Grid>
        </ContentWrapper>
        
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
