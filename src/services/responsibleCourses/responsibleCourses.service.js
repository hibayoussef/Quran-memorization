import { _axios } from "../../interceptor/http-config";
import { HttpRequestInterceptor } from "../../interceptor/http-request.interceptor";

// Teacher Courses
export const _ResponsibleCoursesApi = {
  index: async ({ page, query, filters }) => {
    const { category_id } = filters;

    return {
      courses: [
        {
          id: 1,
          title: "test",
          image: "",
          description: "test test test test",
          category: {
            id: 1,
            name: "قراّّن",
            description: null,
          },
          level: {
            id: 1,
            name: "المستوى الأول",
            symbol: "A",
          },
          type: {
            id: 1,
            name: "مكثفة",
          },
          duration: "شهرين",
          start_date: "2024-09-26",
          end_date: "2024-09-30",
          start_time: "22:35:03",
          end_time: "18:35:03",
          status: "منتهي",
          students: [
            {
              id: 1,
              user: {
                id: 2,
                is_accepted: 1,
                first_name: "Hiba",
                last_name: "test",
                email: "hiba@gmail.com",
                phone_number: "0948858034",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T20:10:22.000000Z",
                rest_info: {
                  id: 1,
                  rate: 4,
                  level_id: 1,
                  level: {
                    id: 1,
                    name: "المستوى الأول",
                    symbol: "A",
                  },
                },
              },
            },
            {
              id: 2,
              user: {
                id: 9,
                is_accepted: 1,
                first_name: "sdfdg",
                last_name: "test",
                email: "ss@gmail.com",
                phone_number: "09488008334",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T23:38:24.000000Z",
                rest_info: {
                  id: 2,
                  rate: 4,
                  level_id: null,
                  level: null,
                },
              },
            },
          ],
          students_count: 2,
        },
        //
        {
          id: 2,
          title: "test",
          image: "",
          description: "test test test test",
          category: {
            id: 1,
            name: "قراّّن",
            description: null,
          },
          level: {
            id: 1,
            name: "المستوى الأول",
            symbol: "A",
          },
          type: {
            id: 1,
            name: "مكثفة",
          },
          duration: "شهرين",
          start_date: "2024-09-26",
          end_date: "2024-09-30",
          start_time: "22:35:03",
          end_time: "18:35:03",
          status: "منتهي",
          students: [
            {
              id: 1,
              user: {
                id: 2,
                is_accepted: 1,
                first_name: "Hiba",
                last_name: "test",
                email: "hiba@gmail.com",
                phone_number: "0948858034",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T20:10:22.000000Z",
                rest_info: {
                  id: 1,
                  rate: 4,
                  level_id: 1,
                  level: {
                    id: 1,
                    name: "المستوى الأول",
                    symbol: "A",
                  },
                },
              },
            },
            {
              id: 2,
              user: {
                id: 9,
                is_accepted: 1,
                first_name: "sdfdg",
                last_name: "test",
                email: "ss@gmail.com",
                phone_number: "09488008334",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T23:38:24.000000Z",
                rest_info: {
                  id: 2,
                  rate: 4,
                  level_id: null,
                  level: null,
                },
              },
            },
          ],
          students_count: 2,
        },
        //
        {
          id: 1,
          title: "test",
          image: "",
          description: "test test test test",
          category: {
            id: 1,
            name: "قراّّن",
            description: null,
          },
          level: {
            id: 1,
            name: "المستوى الأول",
            symbol: "A",
          },
          type: {
            id: 1,
            name: "مكثفة",
          },
          duration: "شهرين",
          start_date: "2024-09-26",
          end_date: "2024-09-30",
          start_time: "22:35:03",
          end_time: "18:35:03",
          status: "منتهي",
          students: [
            {
              id: 1,
              user: {
                id: 2,
                is_accepted: 1,
                first_name: "Hiba",
                last_name: "test",
                email: "hiba@gmail.com",
                phone_number: "0948858034",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T20:10:22.000000Z",
                rest_info: {
                  id: 1,
                  rate: 4,
                  level_id: 1,
                  level: {
                    id: 1,
                    name: "المستوى الأول",
                    symbol: "A",
                  },
                },
              },
            },
            {
              id: 2,
              user: {
                id: 9,
                is_accepted: 1,
                first_name: "sdfdg",
                last_name: "test",
                email: "ss@gmail.com",
                phone_number: "09488008334",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T23:38:24.000000Z",
                rest_info: {
                  id: 2,
                  rate: 4,
                  level_id: null,
                  level: null,
                },
              },
            },
          ],
          students_count: 2,
        },
        //
        {
          id: 3,
          title: "test",
          image: "",
          description: "test test test test",
          category: {
            id: 1,
            name: "قراّّن",
            description: null,
          },
          level: {
            id: 1,
            name: "المستوى الأول",
            symbol: "A",
          },
          type: {
            id: 1,
            name: "مكثفة",
          },
          duration: "شهرين",
          start_date: "2024-09-26",
          end_date: "2024-09-30",
          start_time: "22:35:03",
          end_time: "18:35:03",
          status: "منتهي",
          students: [
            {
              id: 1,
              user: {
                id: 2,
                is_accepted: 1,
                first_name: "Hiba",
                last_name: "test",
                email: "hiba@gmail.com",
                phone_number: "0948858034",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T20:10:22.000000Z",
                rest_info: {
                  id: 1,
                  rate: 4,
                  level_id: 1,
                  level: {
                    id: 1,
                    name: "المستوى الأول",
                    symbol: "A",
                  },
                },
              },
            },
            {
              id: 4,
              user: {
                id: 9,
                is_accepted: 1,
                first_name: "sdfdg",
                last_name: "test",
                email: "ss@gmail.com",
                phone_number: "09488008334",
                location: "damas",
                birthday: "1995-06-25",
                image: "",
                role: "student",
                created_at: "2024-09-24T23:38:24.000000Z",
                rest_info: {
                  id: 2,
                  rate: 4,
                  level_id: null,
                  level: null,
                },
              },
            },
          ],
          students_count: 2,
        },
      ],
      current_page: 1,
      per_page: 10,
      last_page: 1,
      total: 1,
    };
    // _axios.get(
    //         `/teacher/courses?page=${page}&per_page=10${
    //           query && query !== "" ? `&search=${query}` : ""
    //         }${category_id !== null ? `&category_id=${category_id}` : ""}`,
    //         {
    //           headers: {
    //             ...HttpRequestInterceptor(),
    //           },
    //         }
    //       )
    //       .then((res) => res.data);
  },
};
