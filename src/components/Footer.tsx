import { Logo } from './Logo'
import { StaticAction } from './StaticAction'

const COLUMNS = [
  {
    title: 'Productos',
    links: ['Local Payments', 'Cross Border Payments', 'Connect', 'Bre-B para empresas'],
  },
  {
    title: 'Sobre nosotros',
    links: ['Nosotros', 'Cobre jobs', 'Ética Cobre', 'Noticias'],
  },
  {
    title: 'Recursos',
    links: ['Blog', 'Atención al cliente', 'Portal Empresarial', 'Documentación'],
  },
]

export function Footer() {
  return (
    <footer className="bg-footer text-cream">
      <div className="mx-auto max-w-[1100px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-cream/65">
              Infraestructura de pagos empresariales para Colombia y Latinoamérica.
            </p>
            <form
              className="mt-8"
              onSubmit={(event) => {
                event.preventDefault()
              }}
            >
              <h4 className="text-[14px] font-medium">Suscríbete a nuestro newsletter</h4>
              <p className="mt-1 text-[13px] text-cream/55">
                Recibe novedades de productos y consejos de expertos.
              </p>
              <div className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Tu correo"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[14px] outline-none placeholder:text-white/30"
                />
                <button type="submit" className="rounded-full bg-cream px-4 py-2 text-[13px] text-ink">
                  Enviar
                </button>
              </div>
            </form>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <h4 className="text-[13px] font-medium uppercase tracking-wider text-cream/50">{column.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <StaticAction className="text-[14px] text-cream/85">{link}</StaticAction>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cobre / All rights reserved.</p>
          <div className="flex gap-5">
            <StaticAction className="hover:text-cream">Políticas de privacidad</StaticAction>
            <StaticAction className="hover:text-cream">Términos y condiciones</StaticAction>
          </div>
        </div>
      </div>
    </footer>
  )
}
