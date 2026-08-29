const TEASERS = [
  {
    badge: 'Pagos onchain',
    title: 'Cross Border Payments',
    body: 'Realiza tus transferencias internacionales desde Colombia',
    bullets: [
      'Mueve USD, COP, CNY con 40% menos costos.',
      'Payouts en stablecoins a cualquier contraparte, directo desde Cobre',
      'Recibe stablecoins, úsalos al instante local o global',
    ],
    note: 'LatAm tokenized payments by Cobre. Ofrecido a través de una entidad internacional del grupo Cobre.',
  },
  {
    title: 'Local Payments',
    body: 'Pagos inmediatos 24/7 en Colombia y México',
    bullets: [
      'Accede al 100% de las cuentas en el país',
      'Obtén liquidez inmediata, sin límites de monto ni horario',
      'Gestiona tus pagos y recaudos Bre-B para empresas en segundos',
    ],
  },
  {
    title: 'Connect',
    body: 'Consolida tus bancos en una misma plataforma',
    bullets: [
      'Inicia pagos en Bancolombia, BBVA, Occidente o Bogotá sin cambiar de portal',
      'Consulta saldos y movimientos en tiempo real',
      'Automatiza tu conciliación y reportes',
    ],
  },
]

export function ProductTeasers() {
  return (
    <section className="bg-ink pb-8">
      <div className="mx-auto grid max-w-[1140px] gap-4 px-5 md:grid-cols-3">
        {TEASERS.map((item) => (
          <article key={item.title} className="rounded-[20px] bg-ink-soft p-6">
            {item.badge ? (
              <span className="mb-4 inline-flex rounded-2xl border border-white/10 px-2.5 py-1 text-[12px] text-cream/70">
                {item.badge}
              </span>
            ) : (
              <span className="mb-4 block h-7" />
            )}
            <h3 className="font-serif text-[26px] leading-tight text-cream">{item.title}</h3>
            <p className="mt-3 text-[14px] leading-relaxed text-cream/75">{item.body}</p>
            <ul className="mt-4 space-y-1.5 text-[13px] leading-relaxed text-cream/60">
              {item.bullets.map((bullet) => (
                <li key={bullet}>• {bullet}</li>
              ))}
            </ul>
            {item.note ? <p className="mt-4 text-[11px] leading-relaxed text-muted">{item.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  )
}
