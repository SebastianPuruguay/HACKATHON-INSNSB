import { FullLanding } from './components/FullLanding'
import { InterestLanding } from './components/InterestLanding'

function App() {
  const isInterestLanding = window.location.pathname.endsWith('/interes')

  return isInterestLanding ? <InterestLanding /> : <FullLanding />
}

export default App
