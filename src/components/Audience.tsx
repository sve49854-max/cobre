const POINTS = [
  'Mueve dinero dentro y fuera de Colombia',
  'Centraliza cuentas, pagos y conciliación en una misma plataforma',
  'Garantiza velocidad, trazabilidad y control en cada operación',
  'Integra vía API o gestiona desde una interfaz intuitiva',
]

export function Audience() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1100px] items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-[36px] leading-[1.2] text-ink sm:text-[45px] sm:leading-[53px]">
            Para empresas con alto volumen transaccional
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink/70">
            Diseñado para Fintechs con licencia, PSPs, Bancos y empresas que necesitan operar sin fricción.
          </p>
          <ul className="mt-8 space-y-4">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] leading-snug text-ink">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-banner" />
                {point}
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="mt-10 inline-flex rounded-full border border-ink bg-ink px-4 py-2 text-[14px] text-cream transition hover:bg-black"
          >
            Contacta a ventas
          </a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { k: '+3x', v: 'más rápido el procesamiento de pagos' },
            { k: '+2x', v: 'más rápido conoce el estado de tu caja' },
            { k: '-50h', v: 'manuales de conciliación, ahora automatizadas' },
            { k: '24/7', v: 'operación continua, incluso festivos' },
          ].map((stat) => (
            <div key={stat.k} className="rounded-2xl bg-ink p-5 text-cream">
              <div className="font-serif text-[32px]">{stat.k}</div>
              <p className="mt-2 text-[13px] leading-snug text-cream/70">{stat.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
