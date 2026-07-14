import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/clients/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/client/profile"!</div>
}
