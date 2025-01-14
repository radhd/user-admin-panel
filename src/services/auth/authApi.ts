import { baseApi } from "../baseApi";
import { ENDPOINTS_URL_ENUM } from "../constants/endpointsUrl";
import { INVALIDATES_TAGS_ENUM } from "../constants/invalidatesTags";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: ({ username, password }) => ({
        url: ENDPOINTS_URL_ENUM.login,
        method: "POST",
        body: { username, password },
      }),
      invalidatesTags: [INVALIDATES_TAGS_ENUM.Auth],
    }),

    getCurrentUser: builder.query({
      query: () => ENDPOINTS_URL_ENUM.currentUser,
    }),

    refreshAuthSession: builder.mutation({
      query: ({ refreshToken }) => ({
        url: ENDPOINTS_URL_ENUM.refreshToken,
        method: "POST",
        body: { refreshToken },
      }),
      invalidatesTags: [INVALIDATES_TAGS_ENUM.Auth],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useGetCurrentUserQuery,
  useRefreshAuthSessionMutation,
} = authApi;
