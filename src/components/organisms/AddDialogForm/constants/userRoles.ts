import { TUserRole } from "@/services";

interface RoleOptions {
  value: TUserRole;
}

export const USER_ROLES: RoleOptions[] = [
  { value: "user" },
  { value: "admin"},
  { value: "moderator"},
];
