import { BrainCircuit, Network, Rocket, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const benefits = [
  { icon: Sparkles, title: 'Mentorías', description: 'Acompañamiento clínico, técnico y metodológico.' },
  { icon: Network, title: 'Colaboración', description: 'Equipos diversos conectados por un reto común.' },
  { icon: BrainCircuit, title: 'Capacidades', description: 'Talleres para entender, diseñar y validar soluciones.' },
  { icon: Rocket, title: 'Impacto', description: 'Propuestas con potencial de desarrollo posterior.' },
]

export function Benefits() {
  return (
    <section id="beneficios" className="section-glow relative overflow-hidden bg-[#0b0c3b] py-16 sm:py-20">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Experiencia de participación</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Lo que gana cada equipo
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 0.07}>
                <article className="group relative flex aspect-square flex-col justify-between overflow-hidden rounded-[28px] border border-white/10 bg-[#230443]/55 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#ec008c]/35">
                  <Icon className="pointer-events-none absolute -right-5 -bottom-5 h-28 w-28 text-[#f58220] opacity-[0.14]" />
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220]">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{benefit.description}</p>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
