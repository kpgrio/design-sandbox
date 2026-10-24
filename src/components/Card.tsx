import type { ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
}

// Practice target: radius, padding and title colour are off-token.
export function Card({ title, children }: CardProps) {
  return (
    <section className="bg-surface border border-border rounded-card p-5 shadow-sm">
      <h3 className="text-[17px] font-semibold text-text mb-2">{title}</h3>
      <div className="text-sm text-text-muted">{children}</div>
    </section>
  )
}
