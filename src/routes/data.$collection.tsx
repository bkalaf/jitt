import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/data/$collection')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet />
}
