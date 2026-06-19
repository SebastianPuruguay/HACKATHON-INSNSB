import { About } from './About'
import { Benefits } from './Benefits'
import { ChallengeTracks } from './ChallengeTracks'
import { EvaluationCriteria } from './EvaluationCriteria'
import { FAQ } from './FAQ'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { InterestForm } from './InterestForm'
import { Participants } from './Participants'
import { PartnersCarousel } from './PartnersCarousel'
import { ScrollToTopButton } from './ScrollToTopButton'
import { Timeline } from './Timeline'

export function FullLanding() {
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
        <InterestForm />
        <FAQ />
        <Footer />
        <ScrollToTopButton />
      </div>
    </main>
  )
}
