import { Award, Network, Rocket, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const benefits = [
  {
    icon: Sparkles,
    title: 'Mentoría especializada',
    description: 'Acompañamiento de expertos en salud, tecnología e innovación.',
  },
  {
    icon: Network,
    title: 'Networking multidisciplinario',
    description:
      'Conexión con profesionales, estudiantes e instituciones del ecosistema de salud.',
  },
  {
    icon: Award,
    title: 'Certificación',
    description: 'Reconocimiento por participación en un evento de innovación pediátrica.',
  },
  {
    icon: Rocket,
    title: 'Potencial piloto',
    description:
      'Las mejores soluciones podrán ser evaluadas para pilotos o continuidad institucional.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="section-glow relative overflow-hidden bg-[#020617] py-24 sm:py-32">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Lo que te llevas</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Una experiencia que continúa después del evento
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Reveal key={benefit.title} delay={index * 0.07}>
                <article className="group relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/65 p-6 shadow-[0_18px_50px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_20px_50px_rgba(124,58,237,0.18)]">
                  <Icon className="pointer-events-none absolute -right-5 -bottom-5 h-28 w-28 text-violet-600 opacity-[0.35] transition-transform duration-500 group-hover:scale-110" />
                  <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-indigo-400/10 blur-2xl" />
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 text-indigo-600">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{benefit.description}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
