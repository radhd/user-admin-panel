import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { PrivateRoutes } from "./PrivateRoutes";

const AuthorizedPage = lazy(() =>
  import("../pages/AuthorizedPage").then((module) => ({
    default: module.AuthorizedPage,
  }))
);

export const privateRoutes: RouteObject[] = [
  {
    element: <PrivateRoutes />,
    children: [
      {
        element: <AuthorizedPage />,
        index: true,
      },
    ],
  },
];
