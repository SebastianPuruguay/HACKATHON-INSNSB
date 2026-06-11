import { Activity, BrainCircuit, HeartPulse, Route, Salad } from 'lucide-react'
import { Reveal } from './Reveal'

const challenges = [
  {
    icon: Route,
    title: 'Ruta pediátrica integrada y trazable',
    description: 'Reducir la fragmentación de la información clínica y de la ruta asistencial para asegurar continuidad del cuidado sin barreras geográficas ni administrativas.',
    color: 'bg-blue-400/10 text-blue-300 border border-blue-400/20',
  },
  {
    icon: HeartPulse,
    title: 'Corazón a tiempo',
    description: 'Fortalecer la detección temprana y confirmación diagnóstica de cardiopatías congénitas críticas para mejorar decisiones clínicas y reducir demoras.',
    color: 'bg-indigo-400/10 text-indigo-300 border border-indigo-400/20',
  },
  {
    icon: Activity,
    title: 'Oncología pediátrica de precisión y cuidado humanizado',
    description: 'Mejorar la exactitud clínica en estudios complejos y ofrecer una experiencia más humana, oportuna y segura durante los procedimientos.',
    color: 'bg-violet-400/10 text-violet-300 border border-violet-400/20',
  },
  {
    icon: BrainCircuit,
    title: 'Salud mental y neurodesarrollo con detección temprana',
    description: 'Agilizar la detección mediante herramientas estandarizadas que respalden el juicio clínico y mejoren la continuidad de la atención.',
    color: 'bg-fuchsia-400/10 text-fuchsia-300 border border-fuchsia-400/20',
  },
  {
    icon: Salad,
    title: 'Crecer mejor: seguimiento inteligente del desarrollo nutricional infantil',
    description: 'Monitorear crecimiento y nutrición con herramientas no invasivas y analítica de datos para detectar desviaciones y apoyar a las familias.',
    color: 'bg-sky-400/10 text-sky-300 border border-sky-400/20',
  },
]

export function ChallengeTracks() {
  return (
    <section id="desafios" className="section-glow relative overflow-hidden bg-gradient-to-b from-[#060b1d] to-[#0f172a] py-24 sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow">Desafíos prioritarios</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">Cinco desafíos con potencial de impacto real</h2>
          <p className="mt-5 leading-7 text-slate-300">Cada equipo desarrollará una solución innovadora, viable y con potencial de implementación para uno de los desafíos oficiales.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <Reveal key={challenge.title} delay={index * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/70 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-1.5 hover:border-violet-400/30 hover:shadow-[0_24px_60px_rgba(79,70,229,0.2)]">
                  <Icon className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 text-indigo-500 opacity-[0.07] transition-transform duration-500 group-hover:scale-110" />
                  <div className="flex items-start justify-between gap-5">
                    <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${challenge.color}`}><Icon className="h-6 w-6" /></span>
                    <span className="font-display text-sm font-semibold text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold tracking-[-0.03em] text-white">{challenge.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{challenge.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
