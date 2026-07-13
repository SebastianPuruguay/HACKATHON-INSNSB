import { Award, CalendarDays, Laptop, MapPin, Search, Workflow, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from './Reveal'

type ScheduleItem = {
  title: string
  date: string
  description: string
  icon: LucideIcon
  position: string
  labelSide: 'top' | 'bottom'
}

const schedule: ScheduleItem[] = [
  {
    title: 'Convocatoria',
    date: 'Hasta el 30 de julio',
    description: 'Inscripción individual o por equipos y recepción de postulaciones.',
    icon: CalendarDays,
    position: 'left-[10%] top-[55%]',
    labelSide: 'top',
  },
  {
    title: 'Selección de participantes',
    date: '31 de julio y 1 de agosto',
    description: 'Revisión de postulaciones y confirmación de participantes.',
    icon: Search,
    position: 'left-[25%] top-[34%]',
    labelSide: 'bottom',
  },
  {
    title: 'Preparación y mentorías',
    date: 'Del 5 al 12 de agosto',
    description: 'Talleres, mentorías y acercamiento a los desafíos, usuarios y contexto.',
    icon: Workflow,
    position: 'left-[42%] top-[58%]',
    labelSide: 'top',
  },
  {
    title: 'Jornada virtual',
    date: '13 de agosto',
    description: 'Inicio de la Hackatón en modalidad virtual: orientación, alineamiento y preparación para las jornadas presenciales.',
    icon: Laptop,
    position: 'left-[59%] top-[33%]',
    labelSide: 'bottom',
  },
  {
    title: 'Jornadas presenciales',
    date: '14 y 15 de agosto',
    description: 'Desarrollo intensivo de soluciones, prototipado, validación y presentación final.',
    icon: Zap,
    position: 'left-[76%] top-[56%]',
    labelSide: 'top',
  },
  {
    title: 'Premiación',
    date: '21 de agosto',
    description: 'Presentación de resultados y reconocimiento de los equipos ganadores.',
    icon: Award,
    position: 'left-[91%] top-[37%]',
    labelSide: 'bottom',
  },
]

const keyModes = [
  { label: 'Preparación y mentorías', value: '5 al 12 de agosto', icon: Workflow },
  { label: 'Jornada virtual', value: '13 de agosto', icon: Laptop },
  { label: 'Jornadas presenciales', value: '14 y 15 de agosto', icon: MapPin },
]

export function Timeline() {
  return (
    <section id="cronograma" className="relative overflow-hidden bg-gradient-to-br from-[#0b0c3b] via-[#230443] to-[#5e0f90] py-9 text-white sm:py-14">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-15" />
      <div className="dot-mesh-fade pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl">
            Ruta de la Hackatón
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {keyModes.map((item) => {
            const Icon = item.icon
            return (
              <Reveal key={item.label}>
                <article className="rounded-[22px] border border-white/10 bg-white/[0.06] p-4 text-center shadow-[0_14px_38px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-xs font-bold tracking-[0.14em] text-[#f58220] uppercase">{item.label}</p>
                  <p className="mt-1 font-display text-lg font-semibold tracking-[-0.03em] text-white">{item.value}</p>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="relative left-1/2 mt-6 hidden min-h-[520px] w-[min(1760px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-[48px] border border-white/10 bg-[#0b0c3b]/52 px-12 pt-2 pb-0 shadow-[0_24px_80px_rgba(236,0,140,0.14)] backdrop-blur-xl lg:block xl:min-h-[540px] xl:px-16">
            <div className="absolute inset-0 soft-grid opacity-20" />
            <svg className="absolute inset-x-10 top-[82px] h-[330px] w-[calc(100%-5rem)] overflow-visible xl:inset-x-14 xl:w-[calc(100%-7rem)]" viewBox="0 0 1000 340" fill="none" preserveAspectRatio="none" aria-hidden="true">
              <path d="M 18 222 C 122 45 236 62 322 166 C 424 294 523 300 610 126 C 690 -18 815 28 902 152 C 948 220 972 236 992 230" stroke="rgba(255,255,255,0.12)" strokeWidth="30" strokeLinecap="round" />
              <path d="M 18 222 C 122 45 236 62 322 166 C 424 294 523 300 610 126 C 690 -18 815 28 902 152 C 948 220 972 236 992 230" stroke="url(#timelineGradient)" strokeWidth="9" strokeLinecap="round" />
              <defs>
                <linearGradient id="timelineGradient" x1="18" y1="222" x2="992" y2="230" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ec008c" />
                  <stop offset="0.48" stopColor="#f58220" />
                  <stop offset="1" stopColor="#ec008c" />
                </linearGradient>
              </defs>
            </svg>

            {schedule.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className={`absolute ${step.position}`}>
                  <div className="relative -translate-x-1/2 -translate-y-1/2">
                    <div className={`absolute left-1/2 w-px -translate-x-1/2 bg-white/15 ${step.labelSide === 'top' ? 'bottom-[4.5rem] h-16' : 'top-[4.5rem] h-16'}`} />
                    <div className="relative z-10 flex h-18 w-18 items-center justify-center rounded-full border border-white/25 bg-[#0e0931] text-[#f58220] shadow-[0_0_30px_rgba(245,130,32,0.38),0_0_0_12px_rgba(255,255,255,0.04)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <article className={`absolute left-1/2 w-64 -translate-x-1/2 rounded-3xl border border-white/10 bg-[#230443]/82 p-4 text-center shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-xl xl:w-72 ${step.labelSide === 'top' ? 'bottom-30' : 'top-30'}`}>
                      <p className="text-[10px] font-bold tracking-[0.16em] text-[#f58220] uppercase">
                        {step.date}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold text-white">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-slate-300">{step.description}</p>
                    </article>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <div className="relative mt-7 lg:hidden">
          {schedule.map((step, index) => {
            const Icon = step.icon
            return (
              <Reveal
                key={step.title}
                delay={index * 0.04}
                className="relative grid grid-cols-[3rem_minmax(0,1fr)] gap-2 pb-3 last:pb-0"
              >
                <div className="flex justify-center pt-3">
                  {index < schedule.length - 1 && (
                    <span className="absolute top-15 bottom-[-0.75rem] left-6 w-px bg-gradient-to-b from-[#ec008c] via-[#f58220] to-[#ec008c]" />
                  )}
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#f58220]/30 bg-[#0e0931] text-[#f58220] shadow-[0_0_24px_rgba(245,130,32,0.24)]">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <article className="min-w-0 overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0c3b]/66 p-4 shadow-[0_16px_42px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <p className="text-[10px] font-bold tracking-[0.12em] text-[#f58220] uppercase">
                    {step.date}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg leading-tight font-semibold">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
