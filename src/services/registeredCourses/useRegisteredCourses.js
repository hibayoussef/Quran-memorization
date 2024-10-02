import { useState } from "react";
import { useQuery } from "react-query";
import { _RegisteredCoursesApi } from "./registeredCourses.service";

export const useRegisteredCourses = () => {
  const [page, setPage] = useState(1); 
  const [query, setQuery] = useState(""); // search about course
  const [filters, setFilters] = useState({
    Category_id: null
  })
 
  const { data, isLoading, refetch} = useQuery(
    ["registeredCourses", page, query, filters.Category_id], 
    () => 
      _RegisteredCoursesApi.index({
        page,
        query, 
        filters
      })
      .then((res) => res), {
         keepPreviousData: true, 
         staleTime: 5000
      }
  )

  return {
    data, // البيانات المسترجعة
    isLoading, // حالة التحميل
    page, // الصفحة الحالية
    setPage, // لتغيير الصفحة
    refetch, // لإعادة تحميل البيانات يدويًا
    query, 
    setQuery, // لتحديث البحث
    setFilters, // لتحديث الفلاتر
    filters, // الفلاتر الحالية
  };
}