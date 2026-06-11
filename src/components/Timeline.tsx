import { Award, CalendarDays, Presentation, Search, UsersRound, Workflow, Zap } from 'lucide-react'
import { Reveal } from './Reveal'

const schedule = [
  { title: 'Planificación', date: 'Junio de 2026', description: 'Plan, programa, presupuesto y logística.', icon: Workflow },
  { title: 'Convocatoria', date: '22 jun. – 24 jul. 2026', description: 'Inscripciones y difusión institucional.', icon: CalendarDays },
  { title: 'Mentores y jurados', date: '15 – 29 jun. 2026', description: 'Confirmación de especialistas clínicos y tecnológicos.', icon: UsersRound },
  { title: 'Selección', date: '25 – 31 jul. 2026', description: 'Revisión de postulaciones y anuncio de participantes.', icon: Search },
  { title: 'Ejecución de la Hackatón', date: '3 – 21 ago. 2026', description: 'Inducción, exploración, desarrollo, validación y pitch.', icon: Zap },
  { title: 'Post-Hackatón', date: '24 – 31 ago. 2026', description: 'Resultados, lecciones aprendidas y seguimiento.', icon: Award },
]

const methodology = ['Inducción y presentación de desafíos', 'Talleres de entendimiento', 'Desarrollo de soluciones', 'Mentorías especializadas', 'Presentación final o pitch']

export function Timeline() {
  return (
    <section id="cronograma" className="relative overflow-hidden bg-gradient-to-br from-[#080d2b] via-[#111453] to-[#351065] py-24 text-white sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="dot-mesh-fade pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative z-10">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow border-white/10 bg-white/10 text-violet-200">Cronograma oficial</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl">De la convocatoria a la Post-Hackatón</h2>
          <p className="mt-5 leading-7 text-slate-300">La modalidad híbrida combina actividades virtuales y presenciales durante las etapas oficiales del evento.</p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-blue-400 via-indigo-500 to-violet-400 lg:top-5 lg:right-5 lg:bottom-auto lg:left-5 lg:h-px lg:w-auto" />
          <div className="relative grid gap-8 lg:grid-cols-6 lg:gap-5">
            {schedule.map((step, index) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={index * 0.05}>
                  <article className="relative pl-16 lg:pl-0">
                    <span className="absolute top-0 left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-indigo-500/30 font-display text-sm font-semibold text-violet-200 shadow-[0_0_20px_rgba(129,140,248,0.45),0_0_0_7px_rgba(255,255,255,0.04)] backdrop-blur-lg lg:relative lg:mb-8">{index + 1}</span>
                    <Icon className="mb-4 hidden h-5 w-5 text-violet-200 lg:block" />
                    <p className="text-[11px] font-semibold tracking-[0.1em] text-violet-200 uppercase">{step.date}</p>
                    <h3 className="mt-3 font-display text-lg leading-snug font-semibold">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{step.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        <Reveal className="mt-16 rounded-[32px] border border-white/10 bg-slate-950/30 p-6 backdrop-blur-xl sm:p-8">
          <div className="flex items-center gap-3"><Presentation className="h-5 w-5 text-indigo-300" /><h3 className="font-display text-xl font-semibold">Metodología intensiva y colaborativa</h3></div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {methodology.map((stage, index) => <div key={stage} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-slate-300"><span className="mb-2 block text-xs font-semibold text-indigo-300">Fase {index + 1}</span>{stage}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
