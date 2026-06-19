import { challenges } from '../lib/challenges'
import { Reveal } from './Reveal'

export function ChallengeTracks() {
  return (
    <section id="desafios" className="section-glow relative overflow-hidden bg-gradient-to-b from-[#060b1d] to-[#0f172a] py-24 sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10">
        <Reveal className="max-w-3xl">
          <span className="section-eyebrow">Desafíos propuestos</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">Seis oportunidades para transformar la salud</h2>
          <p className="mt-5 leading-7 text-slate-300">Cuéntanos cuáles de estos desafíos te interesan y qué ideas o perspectivas te gustaría aportar cuando se lance la convocatoria oficial.</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon
            return (
              <Reveal key={challenge.id} delay={index * 0.06}>
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

