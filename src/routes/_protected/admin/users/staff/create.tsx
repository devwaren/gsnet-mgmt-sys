import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/users/staff/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/users/staff/create"!</div>
}
