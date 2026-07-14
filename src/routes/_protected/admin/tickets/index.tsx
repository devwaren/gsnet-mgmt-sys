import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/tickets/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/tickets/"!</div>
}
