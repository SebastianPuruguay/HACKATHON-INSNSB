import { FullLanding } from './components/FullLanding'
import { InterestLanding } from './components/InterestLanding'

function App() {
  return window.location.pathname === '/archivo/landing-completa' ? <FullLanding /> : <InterestLanding />
}

export default App
