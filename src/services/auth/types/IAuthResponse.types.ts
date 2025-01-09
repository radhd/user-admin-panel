import { IUser } from "./IUser.types";

export interface IAuthResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
