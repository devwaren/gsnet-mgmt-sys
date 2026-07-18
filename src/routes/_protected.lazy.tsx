import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

import { authMiddleware } from "../lib/server/middlewares";

export const Route = createLazyFileRoute("/_protected")({
  component: RouteComponent,
  server: {
    middleware: [authMiddleware],
  },
});

function RouteComponent() {
  return <Outlet />;
}
