import { createFileRoute, Outlet } from "@tanstack/react-router";

import { publicMiddleware } from "../lib/server/middlewares";

export const Route = createFileRoute("/_public")({
  component: RouteComponent,
  server: {
    middleware: [publicMiddleware],
  },
});

function RouteComponent() {
  return <Outlet />;
}
