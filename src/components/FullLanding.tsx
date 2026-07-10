import { useCallback, useEffect, useMemo, useState } from 'react'
import { ChallengeTracks } from './ChallengeTracks'
import { FAQ } from './FAQ'
import { Footer } from './Footer'
import { Hero } from './Hero'
import { Navbar } from './Navbar'
import type { LandingPageKey } from './Navbar'
import { Participants } from './Participants'
import { PartnersCarousel } from './PartnersCarousel'
import { Timeline } from './Timeline'

const pages: LandingPageKey[] = [
  'inicio',
  'desafios',
  'cronograma',
  'participantes',
  'aliados',
  'faq',
]

function getInitialPage(): LandingPageKey {
  const hashPage = window.location.hash.replace('#', '') as LandingPageKey
  return pages.includes(hashPage) ? hashPage : 'inicio'
}

export function FullLanding() {
  const [activePage, setActivePage] = useState<LandingPageKey>(getInitialPage)

  useEffect(() => {
    const syncFromHash = () => setActivePage(getInitialPage())
    window.addEventListener('hashchange', syncFromHash)
    window.addEventListener('popstate', syncFromHash)
    return () => {
      window.removeEventListener('hashchange', syncFromHash)
      window.removeEventListener('popstate', syncFromHash)
    }
  }, [])

  const navigate = useCallback((page: LandingPageKey) => {
    setActivePage(page)
    window.history.pushState(null, '', `#${page}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const content = useMemo(() => {
    switch (activePage) {
      case 'desafios':
        return <ChallengeTracks />
      case 'cronograma':
        return <Timeline />
      case 'participantes':
        return <Participants />
      case 'aliados':
        return <PartnersCarousel />
      case 'faq':
        return <FAQ />
      case 'inicio':
      default:
        return <Hero />
    }
  }, [activePage])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0b0c3b]">
      <div className="dot-mesh-fade pointer-events-none fixed inset-0 z-0 opacity-45" />
      <Navbar activePage={activePage} onNavigate={navigate} />
      <div key={activePage} className="relative z-10 pt-20 sm:pt-24">
        {content}
        <Footer />
      </div>
    </main>
  )
}
