import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/superadmin/admins/$adminId/edit')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/_protected/admin/users/admins/$adminId"!</div>
}
