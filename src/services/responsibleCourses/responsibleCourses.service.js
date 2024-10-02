import { _axios } from "../../interceptor/http-config"
import { HttpRequestInterceptor } from "../../interceptor/http-request.interceptor";

// Teacher Courses
export const _ResponsibleCoursesApi = {

    index: async({page, query, filters}) => {
        const { category_id } = filters;

        return _axios.get(
            `/teacher/courses?page=${page}&per_page=10${
              query && query !== "" ? `&search=${query}` : ""
            }${category_id !== null ? `&category_id=${category_id}` : ""}`,
            {
              headers: {
                ...HttpRequestInterceptor(),
              },
            }
          )
          .then((res) => res.data);
    }
}