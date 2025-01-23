import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/data/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello &quot;/data/&quot;!</div>
}
