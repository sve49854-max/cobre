import { type FormEvent, useState } from 'react'
import { Logo } from './Logo'

export function Login() {
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError('No pudimos iniciar sesión. Verifica tu correo y contraseña.')
  }

  return (
    <div className="flex min-h-svh flex-col bg-cream">
      <header className="border-b border-ink/10 bg-ink">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center px-5 lg:px-8">
          <button type="button" onClick={() => { window.location.hash = '' }} aria-label="Volver al inicio">
            <Logo />
          </button>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md rounded-[28px] bg-ink p-8 text-cream shadow-2xl sm:p-10"
        >
          <p className="text-[13px] uppercase tracking-[0.16em] text-cream/45">Portal Empresarial</p>
          <h1 className="mt-2 font-serif text-[34px] leading-tight">Iniciar sesión</h1>
          <p className="mt-2 text-[15px] text-cream/60">
            Accede a tus cuentas, pagos y conciliación en un solo lugar.
          </p>

          <label className="mt-8 grid gap-1.5 text-[13px]">
            Correo
            <input
              required
              type="email"
              name="email"
              autoComplete="username"
              placeholder="yuki.t@example.com"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-[15px] outline-none placeholder:text-white/30 focus:border-teal"
            />
          </label>
          <label className="mt-4 grid gap-1.5 text-[13px]">
            Contraseña
            <input
              required
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="••••••••"
              className="rounded-xl border border-white/15 bg-white/5 px-3 py-2.5 text-[15px] outline-none placeholder:text-white/30 focus:border-teal"
            />
          </label>

          {error ? <p className="mt-4 text-[13px] text-[#f0b4b4]">{error}</p> : null}

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-cream py-2.5 text-[15px] text-ink transition hover:bg-white"
          >
            Continuar
          </button>
          <p className="mt-4 text-center text-[13px] text-cream/40">
            ¿Olvidaste tu contraseña? Contacta al administrador de tu workspace.
          </p>
        </form>
      </main>
    </div>
  )
}
