import { createFileRoute } from "@tanstack/react-router";

import { collection } from "#/lib/server/env";

export const Route = createFileRoute("/api/v1/ppp/$id/validate/$email")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        const ppp = await collection.pppId.findOne({
          pppId: params.id,
          email: params.email.toLowerCase(),
        });

        if (!ppp) {
          return Response.json(
            {
              message: "PPP ID is not assigned to this email.",
            },
            { status: 404 },
          );
        }

        return Response.json({
          exists: true,
          pppId: ppp.pppId,
          email: ppp.email,
        });
      },
    },
  },
});
