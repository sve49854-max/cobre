type Product = {
  badge?: string
  title: string
  body: string
  bullets: string[]
  note?: string
}

const PRODUCTS: Product[] = [
  {
    badge: 'Popular',
    title: 'Cross Border\nPayments',
    body: 'Pagos internacionales en minutos, no días',
    bullets: [
      'Cambia divisas y disponibiliza tus recursos en tiempo real.',
      'Accede a trading 24/7 con menor costo operativo.',
      'Integra FX a tu plataforma vía API.',
      'Elimina intermediarios y gana control total.',
    ],
  },
  {
    badge: 'Pagos onchain',
    title: 'Stablecoin\nPayments',
    body: 'Mueve valor en stablecoins sobre infraestructura y liquidez propias de Cobre, sin depender de ningún proveedor externo.',
    bullets: [
      'On-ramp & off-ramp sin fricción, en los principales networks',
      'Payouts en stablecoins a cualquier contraparte',
      'Recibe stablecoins, úsalos al instante local o global',
    ],
    note: 'LatAm tokenized payments by Cobre. Ofrecido a través de una entidad internacional del grupo Cobre.',
  },
  {
    title: 'Local Payments',
    body: 'Pagos inmediatos 24/7 en Colombia y México',
    bullets: [
      'Sin necesidad de abrir una entidad local: opera con tus Virtual Accounts.',
      'Liquidez inmediata con conexión directa a SPEI, Bre-B, Fastpay y ACH sin intermediarios.',
      'Elimina los meses de papeleo. Con respaldo y cumplimiento normativo desde el primer día.',
    ],
  },
  {
    title: 'Connect',
    body: 'Conecta tus cuentas bancarias de LATAM en una sola plataforma',
    bullets: [
      'Accede a los bancos principales en México y Colombia desde un solo portal.',
      'Consulta saldos y movimientos en MXN, COP y USD en tiempo real.',
      'Automatiza tu conciliación y reportes.',
    ],
  },
]

export function Products() {
  return (
    <section id="productos" className="scroll-mt-36 bg-ink pb-24">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-4 px-5 md:grid-cols-2 lg:grid-cols-[0.85fr_1.15fr]">
        {PRODUCTS.map((product) => (
          <article
            key={product.title}
            className="flex min-h-[360px] flex-col rounded-[20px] bg-ink-soft p-7 sm:min-h-[420px] sm:p-9"
          >
            {product.badge ? (
              <span className="mb-5 inline-flex w-fit rounded-2xl border border-white/10 px-2.5 py-1 text-[12px] text-cream/70">
                {product.badge}
              </span>
            ) : (
              <span className="mb-5 h-7" />
            )}
            <h2 className="whitespace-pre-line font-serif text-[36px] leading-[1.1] text-cream sm:text-[44px] sm:leading-[48px]">
              {product.title}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-cream/80">{product.body}</p>
            <ul className="mt-5 space-y-2 text-[14px] leading-relaxed text-cream/70">
              {product.bullets.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            {product.note ? (
              <p className="mt-4 text-[11px] leading-relaxed text-muted">{product.note}</p>
            ) : null}
            <div className="mt-auto pt-8">
              <a
                href="#contacto"
                className="inline-flex w-fit rounded-full bg-cream px-4 py-2 text-[14px] text-ink transition hover:bg-white"
              >
                Conoce más
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
