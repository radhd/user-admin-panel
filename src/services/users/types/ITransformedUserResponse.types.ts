import { TUserRole } from "./IUser.types";

export interface ITransformedUserResponse {
  id: number | string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: TUserRole;
}
