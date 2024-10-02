import { useQuery } from "react-query"
import { _ResponsibleCoursesApi } from "./responsibleCourses.service"
import { useState } from "react"

export const useResponsibleCourses = () => {

    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [filters, setFilters] = useState({
        Category_id: null
    })

    const { data, isLoading, refetch } = useQuery(
        ["responsibleCourses", page, query, filters.Category_id],
        () => 
           _ResponsibleCoursesApi.index({
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
        data, 
        isLoading, 
        page, 
        setPage, 
        query, 
        setQuery, 
        refetch, 
        filters,
        setFilters
    }

}