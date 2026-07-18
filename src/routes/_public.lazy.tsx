import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

import { publicMiddleware } from "../lib/server/middlewares";

export const Route = createLazyFileRoute("/_public")({
  component: RouteComponent,
  server: {
    middleware: [publicMiddleware],
  },
});

function RouteComponent() {
  return <Outlet />;
}
