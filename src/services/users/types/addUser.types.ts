export interface IAddUserRequest {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: string;
}

export interface IAddUserResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  role: string;
}
