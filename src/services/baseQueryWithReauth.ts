import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";
import { ENV_CONFIGURATION } from "../constants/api/envConfiguration";
import { authApi } from "./auth/authApi";
import { logout, setCredentials } from "./auth/authState";
import type { RootState } from "./setupStore";

const baseQuery = fetchBaseQuery({
  baseUrl: ENV_CONFIGURATION.baseApiUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 401) {
    const refreshToken = (api.getState() as RootState).auth.refreshToken;

    if (!refreshToken) {
      console.warn("No refresh token available, logging out.");
      api.dispatch(logout());
      return result;
    }

    try {
      const refreshResult = await api
        .dispatch(
          authApi.endpoints.refreshAuthSession.initiate({ refreshToken })
        )
        .unwrap();

      if (refreshResult?.accessToken) {
        api.dispatch(setCredentials(refreshResult));
        result = await baseQuery(args, api, extraOptions);
      } else {
        console.error("Token refresh response invalid, logging out.");
        api.dispatch(logout());
      }
    } catch (error) {
      console.error("Token refresh failed, logging out.", error);
      api.dispatch(logout());
    }
  }

  return result;
};
