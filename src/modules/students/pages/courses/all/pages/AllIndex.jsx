import { Grid } from "@mui/material";
import { useEffect } from "react";
import ViewAll from "../../../../../../components/shared/viewAll/ViewAll";
import ContentWrapper from "../../../../../../components/styled/ContentWrapper";
import MainLayout from "../../../../../../layout/MainLayout";
import { useCourses } from "../../../../../../services/courses/useCourses";
import DynamicCourseCard from "../../../../components/card/DynamicCourseCard";

const AllIndex = () => {
  const {
    data: quranData, 
    isLoading: quranLoading, 
    page: quranPage, 
    setPage: setQuranPage,
    refetch: refetchQuranCourses,
    setFilters: setQuranFilters,
  } = useCourses();

  useEffect(() => {
    setQuranFilters({ category_id: 1 });
    refetchQuranCourses(); 
  }, [quranPage, setQuranFilters, refetchQuranCourses]);

  return (
    <MainLayout>
      <ViewAll
        title="دورات القرآن:"
        showAllText="عرض الكل"
        redirectTo="/student/courses/quran" // Pass the redirection path
      />

      <ContentWrapper>
        <Grid container spacing={5}>
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
      </ContentWrapper>
    </MainLayout>
  );
};

export default AllIndex;
