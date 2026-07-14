import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/clients/billing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/client/billing"!</div>
}
