import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoutes } from "./PrivateRoutes";

const DashboardPage = lazy(() =>
  import("../pages/DashboardPage/DashboardPage").then((module) => ({
    default: module.DashboardPage,
  }))
);

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
    ],
  },
];
