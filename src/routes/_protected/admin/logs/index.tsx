import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/logs/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/logs/"!</div>
}
