import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/admin/plans/$planId/edit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/admin/plans/$planId/edit"!</div>
}
