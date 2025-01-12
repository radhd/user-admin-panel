import { RouteObject } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { loadPage } from "./utils/loadPage";

const DashboardPage = loadPage("DashboardPage");
const TablePage = loadPage("TablePage");

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
        element: <TablePage />,
        path: "/table",
      },
    ],
  },
];
