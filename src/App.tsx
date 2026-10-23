import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { Card } from './components/Card'

export default function App() {
  return (
    <main className="mx-auto max-w-3xl p-8 space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">Design sandbox</h1>
        <p className="text-text-muted">A practice site for fixing UI inconsistencies through pull requests.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        <Card title="Buttons">
          <div className="flex gap-2 flex-wrap">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="danger">Delete</Button>
          </div>
        </Card>
        <Card title="Badges">
          <div className="flex gap-2 flex-wrap">
            <Badge>Draft</Badge>
            <Badge tone="brand">In review</Badge>
            <Badge tone="danger">Blocked</Badge>
          </div>
        </Card>
      </div>
    </main>
  )
}
