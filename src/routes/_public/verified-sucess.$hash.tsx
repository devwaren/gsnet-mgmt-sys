import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/verified-sucess/$hash')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_public/verified-sucess/$hash"!</div>
}
