import { Audience } from './components/Audience'
import { ChatWidget } from './components/ChatWidget'
import { Contact } from './components/Contact'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Logos } from './components/Logos'
import { Products } from './components/Products'
import { Security } from './components/Security'
import { Testimonials } from './components/Testimonials'
import { Why } from './components/Why'

export default function App() {
  return (
    <div className="min-h-svh bg-cream">
      <Header />
      <main>
        <Hero />
        <Logos />
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
