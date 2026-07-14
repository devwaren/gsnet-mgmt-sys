import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/plans/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/plans/create"!</div>
}
