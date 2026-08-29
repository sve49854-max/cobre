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
    <div className="login-page">
      <div className="login-card">
        <header className="login-header">
          <img src="/logo-cobre-black.svg" alt="Cobre" className="login-logo" />
          <h1 className="login-title">Bienvenido</h1>
          <p className="login-subtitle">Inicia sesión para continuar al Portal</p>
        </header>

        <form onSubmit={onSubmit} className="login-form">
          <label className="login-field">
            <span>Correo electrónico*</span>
            <input required type="email" name="email" autoComplete="username" />
          </label>

          <StaticAction className="login-forgot">¿Olvidaste tu contraseña?</StaticAction>

          <button
            type="submit"
            disabled={loading}
            className="login-submit"
            style={{ position: 'absolute', left: 40, right: 40, bottom: 40 }}
          >
            {loading ? <Spinner className="size-5 text-white" /> : 'Continuar'}
          </button>
        </form>
      </div>
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
