import { type FormEvent, useState } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="contacto" className="scroll-mt-36 bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1100px] gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h2 className="font-serif text-[36px] leading-[1.2] text-ink sm:text-[45px] sm:leading-[53px]">
            ¿Tus procesos financieros siguen siendo manuales?
          </h2>
          <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-ink/70">
            Agiliza y automatiza tu operación bancaria con Cobre Connect. Completa el formulario y te
            contactaremos en menos de 24 horas hábiles.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-3">
            {[
              { k: '+3x', v: 'más rápido el procesamiento de pagos.' },
              { k: '+2x', v: 'más rápido conoce el estado de tu caja.' },
              { k: '-50h', v: 'manuales dedicadas a conciliación, ahora automatizadas.' },
            ].map((stat) => (
              <div key={stat.k}>
                <div className="font-serif text-[28px] text-ink">{stat.k}</div>
                <p className="mt-1 text-[12px] leading-snug text-ink/60">{stat.v}</p>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-[24px] bg-ink p-7 text-cream sm:p-8">
          {sent ? (
            <p className="py-10 text-center text-[16px]">
              Gracias. Un ejecutivo de cuenta te contactará pronto.
            </p>
          ) : (
            <div className="grid gap-4">
              <label className="grid gap-1.5 text-[13px]">
                Nombre
                <input
                  required
                  name="name"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-[15px] text-cream outline-none placeholder:text-white/30 focus:border-teal"
                  placeholder="Tu nombre"
                />
              </label>
              <label className="grid gap-1.5 text-[13px]">
                Correo corporativo
                <input
                  required
                  type="email"
                  name="email"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-[15px] text-cream outline-none placeholder:text-white/30 focus:border-teal"
                  placeholder="nina.v@example.com"
                />
              </label>
              <label className="grid gap-1.5 text-[13px]">
                Empresa
                <input
                  required
                  name="company"
                  className="rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-[15px] text-cream outline-none placeholder:text-white/30 focus:border-teal"
                  placeholder="Nombre de tu empresa"
                />
              </label>
              <button
                type="submit"
                className="mt-2 rounded-full bg-cream px-4 py-2.5 text-[15px] text-ink transition hover:bg-white"
              >
                Agendar una demo
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
