import { APCircularProgress } from "@/components/atoms";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Suspense fallback={<APCircularProgress />}>
      <Outlet />
    </Suspense>
  );
};
