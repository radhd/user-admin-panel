import { RouteObject } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { loadPage } from "./utils/loadPage";

const DashboardPage = loadPage("DashboardPage");
const UsersManagementPage = loadPage("UsersManagementPage");

export const privateRoutes: RouteObject[] = [
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <DashboardPage />,
        index: true,
      },
      {
        element: <DashboardPage />,
        path: "/dashboard",
      },
      {
        element: <UsersManagementPage />,
        path: "/table",
      },
    ],
  },
];
