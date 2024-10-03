import { Grid } from "@mui/material";
import { useEffect } from "react";
import ViewAll from "../../../../../../components/shared/ViewAll/ViewAll";
import ContentWrapper from "../../../../../../components/styled/ContentWrapper";
import MainLayout from "../../../../../../layout/MainLayout";
import { useCourses } from "../../../../../../services/courses/useCourses";
import DynamicCourseCard from "../../../../components/card/DynamicCourseCard";

const AllIndex = () => {
  // استخدام hook الخاص بجلب بيانات دورات القرآن
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

  // عرض البيانات في الواجهة
  return (
    <MainLayout>
      {/* عنوان القسم */}
      <ViewAll
        title="دورات القرآن:"
        showAllText="عرض الكل"
        redirectTo="/student/courses/quran" // Pass the redirection path
      />

      {/* محتوى الدورات */}
      <ContentWrapper>
        <Grid container spacing={5}>
          {/* عرض دورات القرآن في بطاقات */}
          {quranLoading ? (
            <p>Loading...</p> // عرض رسالة التحميل إذا كانت البيانات قيد الجلب
          ) : (
            quranData?.data?.courses?.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
                {/* عرض بيانات الدورة باستخدام مكون DynamicCourseCard */}
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
