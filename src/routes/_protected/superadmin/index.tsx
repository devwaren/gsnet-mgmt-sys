import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/superadmin/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/superadmin/"!</div>
}
