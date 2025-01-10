import { baseApi } from "../baseApi";
import { ENDPOINTS_URL_ENUM } from "../constants/endpointsUrl";
import { INVALIDATES_TAGS_ENUM } from "../constants/invalidatesTags";
import type { IAuthParams, IAuthResponse, IUser } from "./types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<{ users: IUser[] }, void>({
      query: () => ({
        url: ENDPOINTS_URL_ENUM.users,
      }),
    }),

    checkAuth: builder.mutation<IAuthResponse, IAuthParams>({
      query: ({ username, password }) => ({
        url: ENDPOINTS_URL_ENUM.users,
        params: { username, password },
      }),
      transformResponse: (response: { users: IUser[] }, _meta, arg) => {
        const { username, password } = arg;

        const user = response.users.find(
          (user) => user.email === username && user.password === password
        );

        if (!user) {
          throw new Error("Invalid credentials or user does not exist.");
        }

        const authResponse: IAuthResponse = {
          accessToken: "mock_access_token_" + Date.now(),
          refreshToken: "mock_refresh_token_" + Date.now(),
          user,
        };

        localStorage.setItem("accessToken", authResponse.accessToken);
        localStorage.setItem("refreshToken", authResponse.refreshToken);

        return authResponse;
      },
      invalidatesTags: [INVALIDATES_TAGS_ENUM.Auth],
    }),
  }),
});

export const { useGetUsersQuery, useCheckAuthMutation } = authApi;
