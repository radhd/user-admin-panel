import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "../components/templates/Layout/Layout";
import { publicRoutesList } from "./publicRoutesList";
import { UnauthorizedSpaceLayout } from "../components/templates/UnauthorizedSpaceLayout/UnauthorizedSpaceLayout";
import { privateRoutes } from "./privateRoutesList";
import { PrivateRoutes } from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      {
        element: <UnauthorizedSpaceLayout />,
        children: [...publicRoutesList.openRoutes],
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
