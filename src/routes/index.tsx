import { createFileRoute } from "@tanstack/react-router";

import { authMiddleware, publicMiddleware } from "../lib/server/middlewares";

export const Route = createFileRoute("/")({
  server: {
    middleware: [authMiddleware, publicMiddleware],
  },
});
