import { useState } from 'react'
import { Logo } from './Logo'
import { StaticAction } from './StaticAction'

const PRODUCTS = [
  { title: 'Local Payments', desc: 'Pagos inmediatos 24/7 en Colombia y México' },
  { title: 'Cross Border Payments', desc: 'Pagos internacionales en minutos, no días' },
  { title: 'Connect', desc: 'Consolida tus bancos en una misma plataforma' },
  { title: 'Bre-B para empresas', desc: 'Pagos instantáneos 24/7 con llaves y QR' },
]

const RESOURCES = [
  { title: 'Blog', desc: 'Novedades y consejos de tesorería' },
  { title: 'Noticias', desc: 'Cobertura y anuncios de producto' },
  { title: 'Casos de éxito', desc: 'Cómo empresas lideran con Cobre' },
]

function Flag({ country }: { country: 'mx' | 'us' }) {
  if (country === 'mx') {
    return (
      <span className="relative inline-flex size-7 overflow-hidden rounded-full ring-1 ring-white/20" title="México">
        <span className="h-full w-1/3 bg-[#006847]" />
        <span className="flex h-full w-1/3 items-center justify-center bg-white">
          <span className="size-1.5 rounded-full bg-[#ce1126]" />
        </span>
        <span className="h-full w-1/3 bg-[#ce1126]" />
      </span>
    )
  }

  return (
    <span className="relative inline-flex size-7 overflow-hidden rounded-full ring-1 ring-white/20" title="Estados Unidos">
      <svg viewBox="0 0 28 28" className="size-full" aria-hidden>
        <rect width="28" height="28" fill="#b22234" />
        {[4, 8, 12, 16, 20, 24].map((y) => (
          <rect key={y} y={y} width="28" height="2" fill="#fff" />
        ))}
        <rect width="12" height="14" fill="#3c3b6e" />
      </svg>
    </span>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="flex items-center justify-center gap-4 bg-banner px-4 py-3 text-center text-[13px] text-white sm:px-6">
        <p className="max-w-[42rem] leading-snug sm:max-w-none">
          Descubre cómo Servientrega duplicó sus entregas con Bre-B gracias a Cobre
        </p>
        <StaticAction className="hidden shrink-0 rounded-full bg-ink px-3 py-1 text-xs text-white sm:inline-flex">
          Agendar una demo
        </StaticAction>
      </div>

      <div className="border-b border-white/5 bg-ink">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center gap-8 px-5 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-8 text-[15px] text-cream md:flex">
            <Dropdown label="Productos" items={PRODUCTS} />
            <Dropdown label="Recursos" items={RESOURCES} />
            <StaticAction className="transition hover:text-white">Documentación</StaticAction>
          </nav>

          <div className="ml-auto flex items-center gap-3 lg:gap-5">
            <div className="hidden items-center gap-2 lg:flex">
              <span className="text-[13px] text-cream/80">Regiones</span>
              <Flag country="mx" />
              <Flag country="us" />
            </div>
            <a
              href="#login"
              className="hidden rounded-full border border-white/80 px-[18px] py-1.5 text-[15px] text-cream transition hover:bg-white/10 sm:inline-flex"
            >
              Iniciar sesión
            </a>
            <StaticAction className="rounded-full bg-white px-[18px] py-1.5 text-[15px] text-ink">
              Comienza hoy
            </StaticAction>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-cream md:hidden"
              onClick={() => setOpen((value) => !value)}
              aria-label="Abrir menú"
            >
              <span className="text-lg">{open ? '×' : '☰'}</span>
            </button>
          </div>
        </div>
        {open ? (
          <nav className="grid gap-1 border-t border-white/10 px-5 py-4 text-cream md:hidden">
            <StaticAction className="py-2 text-left">Productos</StaticAction>
            <StaticAction className="py-2 text-left">Recursos</StaticAction>
            <StaticAction className="py-2 text-left">Documentación</StaticAction>
            <a href="#login" className="py-2" onClick={() => setOpen(false)}>
              Iniciar sesión
            </a>
          </nav>
        ) : null}
      </div>
    </header>
  )
}

function Dropdown({
  label,
  items,
}: {
  label: string
  items: { title: string; desc: string }[]
}) {
  return (
    <div className="group relative">
      <button type="button" className="inline-flex items-center gap-1 text-cream transition hover:text-white">
        {label}
        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden>
          <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#2a2a2a] p-2 shadow-2xl">
          {items.map((item) => (
            <div key={item.title} className="block rounded-xl px-3 py-2.5 text-left">
              <div className="text-sm text-cream">{item.title}</div>
              <div className="text-xs text-muted">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
