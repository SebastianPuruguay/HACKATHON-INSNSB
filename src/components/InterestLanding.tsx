import { CalendarDays, FileText, Sparkles, UsersRound } from 'lucide-react'
import fallbackEventBanner from '../assets/HACKATON.png'
const eventBanner = 'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/HACKATON.png'
const eventpdf = 'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/DesafiosHackaton.pdf'
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
      <section id="inicio" className="overflow-hidden border-b border-white/10 bg-[#0b0c3b]">
        <img src={eventBanner} alt="Hackatón Niño San Borja" loading="eager" className="block aspect-[5/2] w-full object-cover object-center" onError={(event) => { event.currentTarget.onerror = null; event.currentTarget.src = fallbackEventBanner }} />
      </section>

      <section id="desafios" className="relative bg-[#0e0931] py-20 sm:py-28">
        <div className="dot-mesh-fade pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
          <div className="mb-10 max-w-3xl"><p className="text-xs font-bold tracking-[0.18em] text-[#f58220] uppercase">Desafíos propuestos</p><h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Explora los desafíos y elige dónde aportar</h1><p className="mt-5 leading-7 text-white/70">Abre cada desafío para leer el enunciado completo. Podrás seleccionar los que más te interesen en el formulario.</p><a href={eventpdf} target="_blank" rel="noreferrer" className="group relative mt-7 inline-flex overflow-hidden rounded-full bg-gradient-to-r from-[#f58220] via-[#ef4444] to-[#ec008c] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_24px_rgba(245,130,32,0.28)] transition duration-300 hover:-translate-y-0.5 hover:from-[#fb923c] hover:via-[#f43f5e] hover:to-[#f472b6] hover:brightness-110 hover:shadow-[0_14px_30px_rgba(236,0,140,0.45)]"><span aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(255,255,255,0.34),transparent_26%),radial-gradient(circle_at_84%_50%,rgba(255,255,255,0.18),transparent_28%)] animate-pulse" /><span aria-hidden="true" className="absolute -right-8 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-white/25 blur-xl animate-pulse" /><span aria-hidden="true" className="button-shimmer pointer-events-none absolute -inset-y-8 left-[-35%] w-1/3 bg-white/45 blur-md" /><span className="relative inline-flex items-center gap-2.5"><FileText className="h-4.5 w-4.5 text-[#0b0c3b]" />Ver desafíos en PDF</span></a></div>
          <ChallengeAccordion />
        </div>
      </section>

      <section id="fechas" className="border-y border-white/10 bg-[#230443] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 sm:px-6 lg:px-8">
          {keyDates.map((item) => { const Icon = item.icon; return <div key={item.label} className="group relative flex min-h-[164px] items-center gap-5 overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/[0.11] to-white/[0.04] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#ec008c]/45 hover:shadow-[0_20px_50px_rgba(236,0,140,0.16)] sm:p-7"><span className="absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-[#ec008c]/15 blur-2xl transition group-hover:bg-[#f58220]/20" /><span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/15 text-[#f58220] shadow-[0_10px_26px_rgba(236,0,140,0.18)]"><Icon className="h-6 w-6" /></span><div className="relative"><p className="text-sm font-semibold tracking-wide text-white/75">{item.label}</p><p className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{item.value}</p></div></div> })}
        </div>
      </section>

      <InterestForm />
    </main>
  )
}








