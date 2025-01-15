import { IUser } from "./IUser.types";

export interface IDeleteUserResponse extends IUser {
  isDeleted?: boolean;
  deletedOn?: string;
}
