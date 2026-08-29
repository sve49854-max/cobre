const CERTS = [
  { name: 'ISO 27001:2022', desc: 'Gestión integral de la seguridad de la información.' },
  { name: 'SOC 2 Type II', desc: 'Control riguroso sobre datos sensibles en entornos cloud.' },
  { name: 'PCI DSS v4.0.1', desc: 'Cumplimiento para la protección de información de tarjetas.' },
]

const PILLARS = [
  {
    title: 'Cumplimiento proactivo',
    body: 'Auditamos cada movimiento con modelos predictivos que superan los estándares globales y bloquean riesgos antes de que existan.',
  },
  {
    title: 'Plataforma de decisión dinámica',
    body: 'Evaluamos cada transacción en milisegundos con inteligencia predictiva que protege sin interrumpir tu operación.',
  },
  {
    title: 'Monitoreo inteligente 24/7',
    body: 'Detectamos anomalías en tiempo real y frenamos amenazas al instante. Convertimos la seguridad en una ventaja que potencia tu operación.',
  },
]

export function Security() {
  return (
    <section className="bg-ink py-20 text-cream sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <h2 className="max-w-2xl font-serif text-[36px] leading-[1.2] sm:text-[45px] sm:leading-[53px]">
          Seguridad y cumplimiento de clase mundial
        </h2>
        <p className="mt-4 max-w-xl text-[15px] text-cream/70">
          Protección de nivel bancario impulsada por IA para que tus pagos fluyan con confianza.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {CERTS.map((cert) => (
            <article key={cert.name} className="rounded-[20px] bg-ink-soft p-6">
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-teal/40 text-teal">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M9 1.5l2 4.2 4.6.5-3.4 3.1.9 4.5L9 11.8 4.9 13.8l.9-4.5L2.4 6.2l4.6-.5L9 1.5z" stroke="currentColor" strokeWidth="1.2" />
                </svg>
              </div>
              <h3 className="text-[16px] font-medium">{cert.name}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-cream/65">{cert.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="rounded-[20px] border border-white/8 p-6">
              <h3 className="text-[16px] font-medium">{pillar.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-cream/65">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
