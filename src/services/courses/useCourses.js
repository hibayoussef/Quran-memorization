import { useState } from "react";
import { useQuery } from "react-query";
import { _CoursesApi } from "./courses.service";

export const useCourses = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    type_id: null,
    level_id: null,
    category_id: null,
  });

  const { data, isLoading, refetch } = useQuery(
    ["courses", page, query, filters],
    () =>
      _CoursesApi
        .index({
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
