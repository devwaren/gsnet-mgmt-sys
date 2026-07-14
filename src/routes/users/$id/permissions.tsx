import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id/permissions')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/users/$id/permissions"!</div>
}
