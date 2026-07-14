import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/superadmin/staff/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/users/staff/"!</div>
}
