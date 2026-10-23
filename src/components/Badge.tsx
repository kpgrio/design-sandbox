type BadgeProps = {
  tone?: 'neutral' | 'brand' | 'danger'
  children: string
}

// Practice target: no focus/hover states needed, but spacing and font size are inconsistent.
const tones = {
  neutral: 'bg-surface-muted text-text-muted',
  brand: 'bg-indigo-100 text-brand',
  danger: 'bg-red-100 text-danger',
}

export function Badge({ tone = 'neutral', children }: BadgeProps) {
  return (
    <span className={`inline-block px-2.5 py-[3px] rounded-full text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  )
}
