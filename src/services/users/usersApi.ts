import { baseApi } from "../baseApi";
import { ENDPOINTS_URL_ENUM } from "../constants/endpointsUrl";
import type { IUsersApiResponse } from "@/services/users/types";

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ENDPOINTS_URL_ENUM.getAllUsers,
      transformResponse: (response: IUsersApiResponse) => ({
        transformed: response.users.map((user) => ({
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
