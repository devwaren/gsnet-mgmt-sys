import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users/$id/status')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/users/$Id/status"!</div>
}
