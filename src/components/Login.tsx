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
    <div className="relative flex min-h-svh items-center justify-center overflow-hidden px-4 py-8">
      <div className="login-backdrop absolute inset-0" aria-hidden />
      <form
        onSubmit={onSubmit}
        className="relative flex h-[542px] w-[400px] max-w-[calc(100vw-2rem)] flex-col rounded-[16px] bg-white px-10 pb-10 pt-8 text-left shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
      >
        <img src="/logo-cobre-black.svg" alt="Cobre" className="mx-auto h-[26px] w-auto" />
        <h1 className="mt-6 text-center text-[28px] font-semibold leading-tight text-[#212121]">
          Bienvenido
        </h1>
        <p className="mt-2 text-center text-[15px] text-[#575655]">
          Inicia sesión para continuar al Portal
        </p>

        <label className="relative mt-8 block">
          <span className="absolute -top-2 left-3 bg-white px-1 text-[13px] text-[#575655]">
            Correo electrónico*
          </span>
          <input
            required
            type="email"
            name="email"
            autoComplete="username"
            className="h-11 w-full rounded border border-[#A4A3A1] bg-white px-3 text-[15px] text-[#212121] outline-none focus:border-[#212121]"
          />
        </label>

        <div className="mt-3">
          <StaticAction className="text-[13px] text-[#266D6C]">¿Olvidaste tu contraseña?</StaticAction>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-auto inline-flex h-11 w-full items-center justify-center rounded-full bg-[#212121] text-[15px] font-medium text-white disabled:opacity-90"
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
