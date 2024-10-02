import { _axios } from "../../interceptor/http-config";
import { HttpRequestInterceptor } from "../../interceptor/http-request.interceptor";

export const _CoursesApi = {
  index: async ({ page, query, filters }) => {
    const { type_id, level_id, category_id } = filters;

    return _axios
      .get(
        `/courses?page=${page}&per_page=10${
          query !== "" ? `&search=${query}` : ""
        }${type_id !== null ? `&type_id=${type_id}` : ""}${
          level_id !== null ? `&level_id=${level_id}` : ""
        }${category_id !== null ? `&category_id=${category_id}` : ""}`,
        {
          headers: {
            ...HttpRequestInterceptor(),
          },
        }
      )
      .then((res) => res.data);
  },
};
