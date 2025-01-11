import type { RootState } from "../../setupStore";

export const selectAccessToken = (state: RootState) => state.auth.accessToken;
export const selectRefreshToken = (state: RootState) => state.auth.refreshToken;
export const selectAuthUser = (state: RootState) => state.auth.user;
