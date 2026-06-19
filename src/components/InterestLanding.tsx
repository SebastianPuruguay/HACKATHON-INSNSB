import { CalendarDays, FileText, Sparkles, UsersRound } from 'lucide-react'
import fallbackEventBanner from '../assets/hackaton.jpeg'
const eventpdf = 'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/DesafiosHackaton.pdf'
const eventBanner = 'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/HACKATON.png'
import { ChallengeAccordion } from './ChallengeAccordion'
import { InterestForm } from './InterestForm'

const keyDates = [
  { label: 'Formulario de interés', value: 'Disponible ahora', icon: UsersRound },
  { label: 'Convocatoria oficial', value: 'Próximamente', icon: CalendarDays },
  { label: 'Hackatón', value: 'Fechas por confirmar', icon: Sparkles },
]

export function InterestLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c3b] text-white">
      <section id="inicio" className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_18%_8%,#212866_0%,transparent_38%),radial-gradient(circle_at_88%_12%,#1d1639_0%,transparent_35%),radial-gradient(circle_at_72%_90%,#300a5b_0%,transparent_46%),linear-gradient(145deg,#0e0931_8%,#1d1639_48%,#300a5b_100%)]">
        <div className="dot-mesh pointer-events-none absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute -right-24 -bottom-36 h-96 w-96 rounded-full bg-[#ec008c]/20 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-7 sm:px-6 lg:px-8">


          <div className="relative py-10 sm:py-14 lg:py-16">
            <div className="pointer-events-none absolute -inset-5 rounded-[42px] bg-gradient-to-br from-[#ec008c]/25 to-[#f58220]/15 blur-2xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-[#0b0c3b]/45 shadow-[0_30px_90px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <img src={eventBanner} alt="Hackatón Niño San Borja" className="h-auto w-full object-contain" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackEventBanner }} />
            </div>
          </div>
        </div>
      </section>

      <section id="desafios" className="relative bg-[#0e0931] py-20 sm:py-28">
        <div className="dot-mesh-fade pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
          <div className="mb-10 max-w-3xl"><p className="text-xs font-bold tracking-[0.18em] text-[#f58220] uppercase">Desafíos propuestos</p><h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Explora los desafíos y elige dónde aportar</h1><p className="mt-5 leading-7 text-white/70">Abre cada desafío para leer el enunciado completo. Podrás seleccionar los que más te interesen en el formulario.</p><a href={eventpdf} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#f58220]/45 bg-[#f58220]/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#f58220]/20"><FileText className="h-4 w-4 text-[#f58220]" />Ver desafíos en PDF</a></div>
          <ChallengeAccordion />
        </div>
      </section>

      <section id="fechas" className="border-y border-white/10 bg-[#230443] py-10">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:grid-cols-3 sm:px-6 lg:px-8">
          {keyDates.map((item) => { const Icon = item.icon; return <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ec008c]/15 text-[#f58220]"><Icon className="h-5 w-5" /></span><div><p className="text-xs text-white/60">{item.label}</p><p className="mt-1 font-display text-sm font-semibold">{item.value}</p></div></div> })}
        </div>
      </section>

      <InterestForm />
    </main>
  )
}





