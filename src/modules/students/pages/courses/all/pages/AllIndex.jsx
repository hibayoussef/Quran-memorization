import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import PaginationComponent from "../../../../../../components/shared/pagination/pagination";
import Course from "../../../../components/card/Course";
import MainLayout from "../../../../../../layout/MainLayout";
import ContentWrapper from "../../../../../../components/styled/ContentWrapper";
import { useCourses } from "../../../../../../services/courses/useCourses";
import ViewAll from "../../../../../../components/shared/ViewAll/ViewAll";
import DynamicCourseCard from "../../../../components/card/DynamicCourseCard";
import { Navigate } from "react-router-dom";

const AllIndex = () => {
  // استخدام hook الخاص بجلب البيانات
  const {
    data: allData,
    isLoading: allLoading,
    page: allPage,
    setPage: setAllPage,
    refetch: refetchAllCourses,
    setFilters: setAllFilters,
  } = useCourses();

  const {
    data: quranData,
    isLoading: quranLoading,
    page: quranPage,
    setPage: setQuranPage,
    refetch: refetchQuranCourses,
    setFilters: setQuranFilters,
  } = useCourses();

  const {
    data: hadithData,
    isLoading: hadithLoading,
    page: hadithPage,
    setPage: setHadithPage,
    refetch: refetchHadithCourses,
    setFilters: setHadithFilters,
  } = useCourses();

  // إعداد التصفية لدورات القرآن عند التحميل
  useEffect(() => {
    setQuranFilters({ category_id: 1 });
    refetchQuranCourses();
  }, [quranPage, setQuranFilters, refetchQuranCourses]);

  // إعداد التصفية لدورات الحديث عند التحميل
  useEffect(() => {
    setHadithFilters({ category_id: 2 });
    refetchHadithCourses();
  }, [hadithPage, setHadithFilters, refetchHadithCourses]);


  return (
    <MainLayout>
      {/* الدورات المسجّل عليها */}
      <ViewAll title="الدّورات المسجّل عليها:" showAllText="عرض الكل" />
      <ContentWrapper>
        <Grid container spacing={5}>
          {allData?.data?.courses?.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <DynamicCourseCard course={course} type="registered" />;
            </Grid>
          ))}
        </Grid>
      </ContentWrapper>

      {/* دورات القرآن */}
      <ViewAll title="دورات القرآن:" showAllText="عرض الكل" />
      <ContentWrapper>
        <Grid container spacing={5}>
          {quranData?.data?.courses?.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <DynamicCourseCard course={course} type="quran" />;
            </Grid>
          ))}
        </Grid>
      </ContentWrapper>
      {/* <PaginationComponent
        count={20}
        page={quranPage}
        onChange={handleQuranPageChange}
      /> */}

      {/* دورات الحديث */}
      <ViewAll title="دورات الحديث:" showAllText="عرض الكل" />
      <ContentWrapper>
        <Grid container spacing={5}>
          {hadithData?.data?.courses?.map((course, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <DynamicCourseCard course={course} type="hadith" />;
            </Grid>
          ))}
        </Grid>
      </ContentWrapper>
      {/* <PaginationComponent
        count={20}
        page={hadithPage}
        onChange={handleHadithPageChange}
      /> */}
    </MainLayout>
  );
};

export default AllIndex;
