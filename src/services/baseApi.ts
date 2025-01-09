import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INVALIDATES_TAGS_ENUM } from "./constants/invalidatesTags";
import { ENV_CONFIGURATION } from "../constants/api/envConfiguration";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: ENV_CONFIGURATION.baseApiUrl }),
  tagTypes: [INVALIDATES_TAGS_ENUM.Auth],
  endpoints: () => ({}),
});
