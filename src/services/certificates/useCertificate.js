import { useState } from "react"
import { useQuery } from "react-query"
import { _CertificateApi } from "./certificate.service";


export const useRegisteredCourses = () => {

    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");

    const { data, isLoading, refetch } = useQuery(["certificate", page, query],
        () =>
            _CertificateApi.index({ page })
                .then((res) => res), {
        keepPreviousData: true,
        staleTime: 5000
    }
    )


    return {
        data,
        isLoading,
        page,
        setPage,
        refetch, 
        query, 
        setQuery
    }
}