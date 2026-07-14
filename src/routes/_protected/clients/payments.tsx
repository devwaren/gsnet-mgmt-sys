import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/clients/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/client/payments"!</div>
}
