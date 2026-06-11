import { ArrowUpRight, BrainCircuit, ClipboardList, HeartPulse } from 'lucide-react'
import { Reveal } from './Reveal'

const tracks = [
  {
    number: '01',
    icon: HeartPulse,
    title: 'Salud pediátrica',
    description:
      'Soluciones para mejorar la atención, seguimiento, seguridad del paciente, diagnóstico, experiencia del niño y continuidad del cuidado.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'Tecnología, IA y datos',
    description:
      'Aplicaciones web, automatización, inteligencia artificial, dashboards, interoperabilidad, análisis de datos y asistentes digitales.',
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    number: '03',
    icon: ClipboardList,
    title: 'Gestión hospitalaria',
    description:
      'Mejoras en procesos administrativos, trazabilidad, tiempos de atención, reportes, inscripción, comunicación y gestión documental.',
    color: 'bg-violet-50 text-violet-600',
  },
]

export function ChallengeTracks() {
  return (
    <section id="retos" className="section-glow relative overflow-hidden bg-gradient-to-b from-indigo-50/70 to-[#f9fafb] py-24 sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="section-shell relative">
        <Reveal className="max-w-2xl">
          <span className="section-eyebrow">Áreas de innovación</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-[#0a1b33] sm:text-5xl">
            Tres frentes para generar impacto
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Elige un reto y conviértelo en una propuesta aplicable, medible y centrada en
            las personas.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {tracks.map((track, index) => {
            const Icon = track.icon
            return (
              <Reveal key={track.title} delay={index * 0.08}>
                <article className="group relative h-full overflow-hidden rounded-[32px] border border-indigo-100 bg-white p-7 shadow-[0_12px_40px_rgba(79,70,229,0.06)] transition-all hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-[0_24px_60px_rgba(124,58,237,0.16)]">
                  <Icon className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 text-indigo-600 opacity-[0.06] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                  <div className="pointer-events-none absolute top-1/2 -right-16 h-36 w-36 rounded-full bg-violet-400/10 blur-3xl" />
                  <div className="flex items-start justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${track.color}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-slate-300">
                        {track.number}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet-600" />
                    </div>
                  </div>
                  <h3 className="mt-8 font-display text-2xl font-semibold tracking-[-0.03em] text-[#0a1b33]">
                    {track.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{track.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
