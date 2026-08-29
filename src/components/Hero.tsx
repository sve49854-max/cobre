export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-ink scroll-mt-36">
      <HeroArcs />
      <div className="relative mx-auto flex min-h-[72vh] max-w-[920px] flex-col items-center justify-center px-6 pb-24 pt-20 text-center sm:min-h-[78vh] sm:pt-28">
        <h1 className="font-serif text-[40px] leading-[1.2] text-cream sm:text-[56px] sm:leading-[67px]">
          Pagos empresariales inmediatos en Colombia
        </h1>
        <p className="mt-5 max-w-[34rem] text-[16px] leading-relaxed text-cream/90 sm:text-[18px]">
          Centraliza tu operación local e internacional en una sola plataforma.
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream px-5 py-2.5 text-[15px] text-ink transition hover:bg-white"
        >
          Comienza hoy
          <span aria-hidden>›</span>
        </a>
      </div>
    </section>
  )
}

function HeroArcs() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden
    >
      <path d="M-180 760 C 180 420, 420 180, 780 310 S 1280 620, 1620 240" stroke="#3a3a3a" strokeWidth="1.15" />
      <path d="M-80 120 C 260 80, 520 520, 860 430 S 1240 80, 1580 360" stroke="#3a3a3a" strokeWidth="1.15" />
      <path d="M 180 -40 C 260 260, 140 520, 420 820" stroke="#353535" strokeWidth="1" />
      <path d="M 980 -20 C 1080 240, 920 480, 1180 860" stroke="#353535" strokeWidth="1" />
      <path
        d="M 430 290 C 560 210, 690 210, 820 295"
        stroke="#3d8f8d"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  )
}
