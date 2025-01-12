import { createApi } from "@reduxjs/toolkit/query/react";
import { INVALIDATES_TAGS_ENUM } from "./constants/invalidatesTags";
import { baseQueryWithReauth } from "./baseQueryWithReauth";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: [INVALIDATES_TAGS_ENUM.Auth, INVALIDATES_TAGS_ENUM.Users],
  endpoints: () => ({}),
});
