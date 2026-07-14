import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/users/$Id/profile"!</div>
}
