import {
  createRootRouteWithContext,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "react-hot-toast";

import { appHead, type MyRouterContext } from "#/lib/config";
import { TanstackDevToolsIntegration } from "../integrations/tanstack-query";
import { NotFound } from "../shared/pages";

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: appHead,
  shellComponent: RootDocument,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-200">
        <div className="max-w-440 mx-auto">{children}</div>
        <Toaster position="bottom-left" />
        <TanstackDevToolsIntegration />
        <Scripts />
      </body>
    </html>
  );
}
