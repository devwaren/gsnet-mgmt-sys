import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/superadmin/system/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/superadmin/system/settings"!</div>
}
