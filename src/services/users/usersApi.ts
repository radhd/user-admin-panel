import { baseApi } from "../baseApi";
import { ENDPOINTS_URL_ENUM } from "../constants/endpointsUrl";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ENDPOINTS_URL_ENUM.getAllUsers,
      transformResponse: (response) => ({
        transformed: response.users.map((user: any) => ({
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          age: user.age,
          role: user.role,
        })),
        raw: response.users,
      }),
    }),
  }),
});

export const { useGetAllUsersQuery } = usersApi;
