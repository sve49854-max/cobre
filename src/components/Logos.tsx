const LOGOS = ['Servientrega', 'Skandia', 'SAMSUNG', 'Telefónica', 'Cabify']

export function Logos() {
  return (
    <section className="bg-ink pb-16 pt-2" aria-label="Empresas que confían en Cobre">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 sm:justify-between">
        {LOGOS.map((name) => (
          <span
            key={name}
            className="text-[15px] font-semibold tracking-[0.08em] text-white/35 sm:text-[17px]"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
