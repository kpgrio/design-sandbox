import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'danger'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

// Practice target: padding, radius and hover colour don't match the tokens.
const variants: Record<Variant, string> = {
  primary: 'bg-brand text-white hover:bg-[#4a42d8]',
  secondary: 'bg-surface text-text border border-border hover:bg-surface-muted',
  danger: 'bg-[#e11d48] text-white hover:bg-[#be123c]',
}

export function Button({ variant = 'primary', className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-[18px] py-[9px] rounded-md text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
