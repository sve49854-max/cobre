import { useState } from 'react'

const FAQS = [
  {
    q: '¿Qué es Cobre?',
    a: 'Cobre es la infraestructura de pagos empresariales construida para escalar operaciones de pago en Latinoamérica. Con productos especializados en pagos locales, transferencias internacionales, stablecoins y conexión multi-banco, tu empresa gestiona todo desde una sola plataforma por API, portal web, o ambos. Cobre Financial S.A. es una Compañía de Financiamiento vigilada por la Superintendencia Financiera de Colombia.',
  },
  {
    q: '¿Qué productos ofrece Cobre en Colombia?',
    a: 'Local Payments para dispersiones y recaudos (Fast Pay, Bre-B, PSE, Botón Bancolombia y Nequi). Cross Border Payments para envío y recepción de divisas con liquidación el mismo día. Cobre Connect para agregar cuentas bancarias. Y Bre-B para pagos instantáneos 24/7 con llaves o códigos QR.',
  },
  {
    q: '¿Cómo funcionan los pagos transfronterizos para tu empresa?',
    a: 'Realiza transferencias internacionales en USD, COP y CNY con costos operativos reducidos. El sistema liquida las operaciones el mismo día y garantiza trazabilidad total en cada movimiento. Opera 24/7, incluso fuera del horario de mercado.',
  },
  {
    q: '¿Qué medidas de seguridad protegen tu operación?',
    a: 'Cobre cumple con estándares globales como ISO 27001, SOC 2 Type II y PCI DSS. Tu información financiera permanece resguardada bajo la normativa vigente y protocolos de cifrado avanzado, con monitoreo transaccional 24/7.',
  },
  {
    q: '¿Cómo puedes integrar Cobre a tu flujo de trabajo?',
    a: 'Utiliza nuestra infraestructura vía API para automatizar procesos masivos o gestiona tu tesorería desde nuestra plataforma intuitiva. Elige la modalidad que mejor se adapte a tu volumen transaccional.',
  },
  {
    q: '¿Cómo puedo ser cliente de Cobre?',
    a: 'Compártenos tus datos e inicia tu proceso de diseño de solución de pagos con Cobre. Un ejecutivo de cuenta se comunicará contigo para entender las necesidades de tu empresa.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  const allOpen = open === -1

  return (
    <section id="documentacion" className="scroll-mt-36 bg-cream pb-20 sm:pb-28">
      <div className="mx-auto max-w-[860px] px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-[36px] leading-[1.2] text-ink sm:text-[45px]">Preguntas frecuentes</h2>
          <button
            type="button"
            className="text-[13px] text-ink/60 underline-offset-2 hover:underline"
            onClick={() => setOpen(allOpen ? null : -1)}
          >
            {allOpen ? 'Cerrar todas' : 'Expandir todas'}
          </button>
        </div>
        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {FAQS.map((item, index) => {
            const isOpen = allOpen || open === index
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen && !allOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[16px] font-medium text-ink">{item.q}</span>
                  <span className="text-xl text-ink/50">{isOpen ? '–' : '+'}</span>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-[15px] leading-relaxed text-ink/70">{item.a}</p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
