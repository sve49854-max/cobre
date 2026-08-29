import { useState } from 'react'

const QUOTES = [
  {
    quote:
      'Bre-B a través de Cobre nos permitió llevar el pago digital al momento exacto de la entrega, mejorando nuestra tasa de entrega efectiva y la experiencia de nuestros clientes en todo el país.',
    name: 'Luz Mary Guerrero',
    role: 'Consejera de Servientrega',
  },
  {
    quote:
      'La integración que hemos llevado con Cobre ha cambiado la experiencia de compra con Bre-B, generando menor fricción en las transacciones de nuestros usuarios y menores costos operativos para nosotros.',
    name: 'Daniel Durán',
    role: 'Director Direct to Consumer (D2C), Samsung Colombia',
  },
  {
    quote:
      'Con la incorporación de Cobre como habilitador de la plataforma, avanzamos en la evolución de la fiducia hacia un esquema verdaderamente 24/7, alineado con los estándares del mundo fintech.',
    name: 'Carolina Nieto',
    role: 'Vicepresidente del Segmento Corporativo, Skandia',
  },
  {
    quote:
      'Trabajar con Cobre nos permitió agilizar procesos críticos y reducir tiempos operativos. Su plataforma y APIs nos dieron más control y eficiencia para seguir escalando nuestro servicio.',
    name: 'Jorge Ramírez',
    role: 'Director de plataformas digitales en Skandia Fiduciaria',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const visible = [QUOTES[index % QUOTES.length], QUOTES[(index + 1) % QUOTES.length]]

  return (
    <section className="bg-cream pb-8">
      <div className="mx-auto max-w-[1100px] px-6">
        <h3 className="font-serif text-[28px] text-ink sm:text-[32px]">
          Más de 250 empresas líderes confían en Cobre
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {visible.map((item) => (
            <blockquote key={item.name} className="rounded-[20px] bg-ink p-7 text-cream">
              <p className="text-[15px] leading-relaxed text-cream/90">“{item.quote}”</p>
              <footer className="mt-6">
                <div className="text-[14px] font-medium">{item.name}</div>
                <div className="text-[13px] text-cream/55">{item.role}</div>
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            className="rounded-full border border-ink/20 px-3 py-1 text-sm text-ink hover:bg-ink hover:text-cream"
            onClick={() => setIndex((current) => (current - 1 + QUOTES.length) % QUOTES.length)}
            aria-label="Anterior"
          >
            ‹
          </button>
          <button
            type="button"
            className="rounded-full border border-ink/20 px-3 py-1 text-sm text-ink hover:bg-ink hover:text-cream"
            onClick={() => setIndex((current) => (current + 1) % QUOTES.length)}
            aria-label="Siguiente"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
