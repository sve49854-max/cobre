import { type FormEvent, useEffect, useState } from 'react'
import { LoadingScreen, Spinner } from './Spinner'
import { StaticAction } from './StaticAction'

export function Login() {
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 1400)
    return () => window.clearTimeout(timer)
  }, [])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    window.setTimeout(() => setWaiting(true), 800)
  }

  if (!ready || waiting) {
    return <LoadingScreen />
  }

  return (
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-10">
      <div className="login-backdrop absolute inset-0" aria-hidden />
      <form
        onSubmit={onSubmit}
        className="relative w-full max-w-[400px] rounded-[22px] bg-white px-8 py-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:px-10 sm:py-12"
      >
        <img
          src="/logo-cobre.svg"
          alt="Cobre"
          className="mx-auto h-8 w-auto brightness-0"
        />
        <h1 className="mt-8 text-[34px] font-semibold tracking-tight text-ink">Bienvenido</h1>
        <p className="mt-2 text-[15px] text-[#8a8a8a]">Inicia sesión para continuar al Portal</p>

        <label className="relative mt-10 block text-left">
          <span className="absolute -top-2 left-3 bg-white px-1 text-[12px] text-[#8a8a8a]">
            Correo electrónico*
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="username"
            className="h-12 w-full rounded-lg border border-[#d4d4d4] bg-white px-3 text-[15px] text-ink outline-none focus:border-ink"
          />
        </label>

        <div className="mt-3 text-left">
          <StaticAction className="text-[14px] text-[#2f6fed]">¿Olvidaste tu contraseña?</StaticAction>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#2a2a2a] text-[16px] font-medium text-white disabled:opacity-90"
        >
          {loading ? <Spinner className="size-5 text-white" /> : 'Continuar'}
        </button>
      </form>
    </div>
  )
}

export function LoginButton({ className, children }: { className?: string; children: string }) {
  const [loading, setLoading] = useState(false)

  function goToLogin() {
    setLoading(true)
    window.setTimeout(() => {
      window.location.hash = 'login'
    }, 900)
  }

  return (
    <button type="button" className={className} onClick={goToLogin} disabled={loading}>
      {loading ? <Spinner className="size-5 text-cream" /> : children}
    </button>
  )
}
