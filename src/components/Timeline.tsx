import { Award, CalendarPlus, Presentation, UsersRound, Workflow, Zap } from 'lucide-react'
import { Reveal } from './Reveal'

const steps = [
  { title: 'Apertura de inscripciones', description: 'Publicación de bases y convocatoria oficial.', icon: CalendarPlus },
  { title: 'Cierre de inscripciones', description: 'Último día para registrar perfiles y equipos.', icon: Workflow },
  { title: 'Formación de equipos', description: 'Conexión de talentos y selección del reto.', icon: UsersRound },
  { title: 'Jornada de hackathon', description: 'Diseño, mentoría y construcción de soluciones.', icon: Zap },
  { title: 'Presentación de soluciones', description: 'Pitch final y demostración ante el jurado.', icon: Presentation },
  { title: 'Premiación y próximos pasos', description: 'Reconocimiento y evaluación de continuidad.', icon: Award },
]

export function Timeline() {
  return (
    <section id="cronograma" className="relative overflow-hidden bg-gradient-to-br from-[#080d2b] via-[#111453] to-[#351065] py-24 text-white sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="dot-mesh-fade pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative">
        <Reveal className="max-w-2xl">
          <span className="section-eyebrow border-white/10 bg-white/10 text-violet-200">
            Ruta del evento
          </span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] sm:text-5xl">
            De la inscripción a una solución con futuro
          </h2>
          <p className="mt-5 leading-7 text-slate-300">
            Un recorrido diseñado para convertir ideas en propuestas listas para ser
            evaluadas.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute top-5 bottom-5 left-5 w-px bg-gradient-to-b from-blue-400 via-indigo-500 to-violet-400 lg:top-5 lg:right-5 lg:bottom-auto lg:left-5 lg:h-px lg:w-auto" />
          <div className="relative grid gap-8 lg:grid-cols-6 lg:gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Reveal key={step.title} delay={index * 0.06}>
                  <article className="relative pl-16 lg:pl-0">
                    <span className="absolute top-0 left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-indigo-500/30 font-display text-sm font-semibold text-violet-200 shadow-[0_0_20px_rgba(129,140,248,0.45),0_0_0_7px_rgba(255,255,255,0.04)] backdrop-blur-lg lg:relative lg:mb-8">
                      {index + 1}
                    </span>
                    <span className="mb-4 hidden h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-violet-200 lg:flex">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-[11px] font-semibold tracking-[0.12em] text-violet-200 uppercase">
                      Fecha por confirmar
                    </p>
                    <h3 className="mt-3 font-display text-lg leading-snug font-semibold">{step.title}</h3>
                    <p className="mt-2 text-xs leading-6 text-slate-400">{step.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
