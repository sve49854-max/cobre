type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <a href="#inicio" className={`inline-flex items-center ${className}`} aria-label="Cobre">
      <img src="/logo-cobre.svg" alt="" className="h-8 w-auto" />
    </a>
  )
}
