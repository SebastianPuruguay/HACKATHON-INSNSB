import { About } from './components/About'
import { Benefits } from './components/Benefits'
import { ChallengeTracks } from './components/ChallengeTracks'
import { EvaluationCriteria } from './components/EvaluationCriteria'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Participants } from './components/Participants'
import { PartnersCarousel } from './components/PartnersCarousel'
import { RegistrationCTA } from './components/RegistrationCTA'
import { Timeline } from './components/Timeline'

function App() {
  return (
    <main className="relative overflow-hidden bg-[#020617]">
      <div className="dot-mesh-fade pointer-events-none absolute inset-0 z-0 opacity-55" />
      <div className="relative z-10">
      <Hero />
      <About />
      <ChallengeTracks />
      <Participants />
      <Timeline />
      <Benefits />
      <EvaluationCriteria />
      <PartnersCarousel />
      <RegistrationCTA />
      <FAQ />
      <Footer />
      </div>
    </main>
  )
}

export default App
