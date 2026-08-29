import type { ReactNode } from 'react'

type StaticActionProps = {
  children: ReactNode
  className?: string
}

export function StaticAction({ children, className = '' }: StaticActionProps) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  )
}
