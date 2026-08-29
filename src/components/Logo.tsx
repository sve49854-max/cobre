type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <span className={`inline-flex items-center ${className}`} aria-label="Cobre">
      <img src="/logo-cobre.svg" alt="Cobre" className="h-8 w-auto" />
    </span>
  )
}
