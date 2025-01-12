import type { IUser } from "./IUser.types";

export interface IUsersApiResponse {
  users: IUser[];
  total: number;
  skip: number;
  limit: number;
}
