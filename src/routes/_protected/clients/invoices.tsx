import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/clients/invoices')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/client/invoices"!</div>
}
