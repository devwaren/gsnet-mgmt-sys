import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/clients/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/clients/edit"!</div>
}
