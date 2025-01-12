import { lazy, type FC } from "react";

type PageModule = {
  DashboardPage: FC;
  UsersManagementPage: FC;
};

export const loadPage = (page: keyof PageModule) =>
  lazy(() =>
    import("@/pages").then((module) => ({
      default: module[page],
    }))
  );
