import { useState } from "react";
import { useQuery } from "react-query";
import { _CourseApi } from "./course.service";

export const useCourse = (course_id) => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    type_id: null,
    level_id: null,
    category_id: null,
  });

  const { data, isLoading, refetch } = useQuery(
    ["course", course_id, page, query, filters],
    () =>
      _CourseApi
        .index({
          course_id,  // Pass course_id dynamically
          page,
          query,
          filters,
        })
        .then((res) => res)
  );

  return {
    data,
    isLoading,
    page,
    setPage,
    refetch,
    setQuery,
    setFilters,
    filters,
  };
};
