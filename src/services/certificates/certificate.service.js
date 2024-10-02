import { _axios } from "../../interceptor/http-config";
import { HttpRequestInterceptor } from "../../interceptor/http-request.interceptor";

// Student Certificates
export const _CertificateApi = {
    index: async ({ page, query }) => {
        return _axios
        .get(
            `/student/certificates?page=${page}&per_page=10${query && query !== "" ? `&search=${query}` : ""
            }`,
            {
                headers: {
                    ...HttpRequestInterceptor(),
                },
            }
        )
            .then((res) => res.data);
    }
}