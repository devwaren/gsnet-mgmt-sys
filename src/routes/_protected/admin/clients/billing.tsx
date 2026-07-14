import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/clients/billing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/clients/billing"!</div>
}
