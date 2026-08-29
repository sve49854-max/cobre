const REASONS = [
  {
    title: 'Plataforma modular y API-first',
    body: 'Integra lo que necesitas: pagos locales, transfronterizos y conexión bancaria bajo una arquitectura flexible.',
  },
  {
    title: 'Ejecución en tiempo real 24/7',
    body: 'Procesa tus pagos y recaudos en minutos. Opera cualquier día del año sin importar la institución financiera.',
  },
  {
    title: 'Visibilidad y control centralizados',
    body: 'Consulta tus saldos, movimientos y estados de transacción en una misma plataforma. Obtén trazabilidad total para tu toma de decisiones.',
  },
  {
    title: 'Automatización operativa de punta a punta',
    body: 'Gestiona desde la dispersión hasta la conciliación contable. Elimina procesos manuales y reduce errores con flujos automatizados.',
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
          <button
            type="button"
            className="inline-flex rounded-full border border-ink bg-ink px-4 py-2 text-[14px] text-cream"
          >
            Contacta a ventas
          </button>
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
