import { type FormEvent, useEffect, useState } from 'react'
import { LoadingScreen, Spinner } from './Spinner'
import { StaticAction } from './StaticAction'
import './Login.css'

export function Login() {
  const [ready, setReady] = useState(false)
  const [step, setStep] = useState<'email' | 'password'>('email')
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [waiting, setWaiting] = useState(false)

  useEffect(() => {
    document.documentElement.classList.add('login-open')
    document.body.classList.add('login-open')
    const timer = window.setTimeout(() => setReady(true), 1400)
    return () => {
      document.documentElement.classList.remove('login-open')
      document.body.classList.remove('login-open')
      window.clearTimeout(timer)
    }
  }, [])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (step === 'email') {
      setStep('password')
      return
    }
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
          <h1 className="login-title">{step === 'email' ? 'Bienvenido' : 'Ingresa tu contraseña'}</h1>
          <p className="login-subtitle">Inicia sesión para continuar al Portal</p>
        </header>

        <form onSubmit={onSubmit} className="login-form">
          {step === 'email' ? (
            <label className="login-field">
              <span>Correo electrónico *</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="username"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </label>
          ) : (
            <>
              <div className="login-email-box">
                <span>{email}</span>
                <button
                  type="button"
                  className="login-edit"
                  onClick={() => {
                    setStep('email')
                    setShowPassword(false)
                  }}
                >
                  Editar
                </button>
              </div>
              <label className="login-field login-field-password">
                <span>Contraseña*</span>
                <input
                  required
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-eye"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.1A10.5 10.5 0 0 1 12 5c5.5 0 9.5 4.5 10.5 7-.4 1-1.2 2.4-2.5 3.7M6.1 6.1C4.4 7.4 3.3 9 2.5 12 3.5 14.5 7.5 19 12 19c1.6 0 3.1-.4 4.4-1.1"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M2.5 12C3.5 9.5 7.5 5 12 5s8.5 4.5 9.5 7c-1 2.5-5 7-9.5 7s-8.5-4.5-9.5-7Z"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  )}
                </button>
              </label>
            </>
          )}

          <StaticAction className="login-forgot">¿Olvidaste tu contraseña?</StaticAction>

          <button type="submit" disabled={loading} className="login-submit">
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
