const REASONS = [
  {
    title: 'Plataforma modular y API-first',
    body: 'Integra solo lo que necesitas: pagos locales, internacionales y conexión bancaria, todo vía API y con arquitectura flexible.',
  },
  {
    title: 'Ejecución en tiempo real, 24/7/365',
    body: 'Procesa pagos y cobros en minutos, sin importar el banco, el día o la hora.',
  },
  {
    title: 'Visibilidad y control centralizados',
    body: 'Consulta saldos, movimientos y estados de transacción en una sola plataforma. Actúa con trazabilidad total.',
  },
  {
    title: 'Automatización de punta a punta',
    body: 'Desde la dispersión hasta la conciliación contable, elimina tareas manuales y reduce errores con flujos configurables.',
  },
]

export function Why() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-[1100px] px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-xl font-serif text-[36px] leading-[1.2] text-ink sm:text-[45px] sm:leading-[53px]">
            ¿Por qué elegir Cobre?
          </h2>
          <a
            href="#contacto"
            className="inline-flex rounded-full border border-ink bg-ink px-4 py-2 text-[14px] text-cream transition hover:bg-black"
          >
            Contacta a ventas
          </a>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <article key={reason.title} className="border-t border-ink/10 pt-6">
              <h3 className="text-[17px] font-medium text-ink">{reason.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink/70">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
