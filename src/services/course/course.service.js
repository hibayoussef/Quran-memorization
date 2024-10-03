import { _axios } from "../../interceptor/http-config";
import { HttpRequestInterceptor } from "../../interceptor/http-request.interceptor";

// All Courses / Quran - Hadith
export const _CourseApi = {
  index: async ({ course_id, page, query, filters }) => {
    const { type_id, level_id, category_id } = filters;

    return _axios
      .get(
        `/api/website/courses/${course_id}?page=${page}&per_page=10${
          query !== "" ? `&search=${query}` : ""
        }${type_id !== null && type_id !== undefined ? `&filters[type_id]=${type_id}` : ""}${
          level_id !== null && level_id !== undefined ? `&filters[level_id]=${level_id}` : ""
        }${category_id !== null && category_id !== undefined ? `&filters[category_id]=${category_id}` : ""}`,
        {
          headers: {
            ...HttpRequestInterceptor(),
          },
        }
      )
      .then((res) => res.data);
  },
};
