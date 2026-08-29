import { useEffect, useState } from 'react'
import { Audience } from './components/Audience'
import { ChatWidget } from './components/ChatWidget'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Login } from './components/Login'
import { Logos } from './components/Logos'
import { Products } from './components/Products'
import { ProductTeasers } from './components/ProductTeasers'
import { Security } from './components/Security'
import { Testimonials } from './components/Testimonials'
import { Why } from './components/Why'

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return hash
}

export default function App() {
  const hash = useHash()

  if (hash === '#login') {
    return <Login />
  }

  return (
    <div className="min-h-svh bg-cream">
      <Header />
      <main>
        <Hero />
        <Logos />
        <ProductTeasers />
        <Products />
        <Audience />
        <Security />
        <Why />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
