import { createFileRoute, Outlet } from "@tanstack/react-router";

import { authMiddleware } from "../lib/server/middlewares";

export const Route = createFileRoute("/_protected")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
});

function RouteComponent() {
  return <Outlet />;
}
