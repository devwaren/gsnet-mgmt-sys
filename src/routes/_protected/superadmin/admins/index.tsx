import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/superadmin/admins/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/users/admins/"!</div>
}
