import { ArrowLeft, ArrowRight, FileText } from 'lucide-react'
import { useMemo, useState } from 'react'
import { challenges } from '../lib/challenges'
import { Reveal } from './Reveal'

const slideSize = 2

const challengeVisuals: Record<string, {
  eyebrow: string
  title: string
  gradient: string
  accent: string
  motif: string
}> = {
  'puente-18': {
    eyebrow: 'Transición segura',
    title: 'Del cuidado pediátrico al cuidado adulto',
    gradient: 'from-cyan-300 via-sky-500 to-blue-900',
    accent: 'bg-cyan-200 text-blue-950',
    motif: 'Ruta 18+',
  },
  'cardio-alerta': {
    eyebrow: 'Detección temprana',
    title: 'Alerta clínica desde el primer latido',
    gradient: 'from-rose-300 via-red-500 to-orange-700',
    accent: 'bg-rose-100 text-red-950',
    motif: 'Cardio',
  },
  'ruta-hematologica': {
    eyebrow: 'Continuidad del cuidado',
    title: 'Una ruta clara para cada paciente',
    gradient: 'from-red-300 via-fuchsia-600 to-purple-950',
    accent: 'bg-red-100 text-red-950',
    motif: 'Hema',
  },
  neuroalianza: {
    eyebrow: 'Diagnóstico oportuno',
    title: 'Conectar salud, familia y comunidad',
    gradient: 'from-violet-300 via-indigo-500 to-slate-950',
    accent: 'bg-violet-100 text-violet-950',
    motif: 'Neuro',
  },
  'crecer-mejor': {
    eyebrow: 'Nutrición infantil',
    title: 'Monitoreo temprano, orientación cercana',
    gradient: 'from-lime-200 via-emerald-500 to-teal-900',
    accent: 'bg-lime-100 text-emerald-950',
    motif: 'Crecer',
  },
  sanarte: {
    eyebrow: 'Bienestar institucional',
    title: 'Cuidar a quienes cuidan',
    gradient: 'from-amber-200 via-orange-500 to-pink-800',
    accent: 'bg-amber-100 text-orange-950',
    motif: 'Sanarte',
  },
}

export function ChallengeTracks() {
  const [slide, setSlide] = useState(0)

  const slides = useMemo(() => {
    const grouped = []
    for (let index = 0; index < challenges.length; index += slideSize) {
      grouped.push(challenges.slice(index, index + slideSize))
    }
    return grouped
  }, [])

  const currentChallenges = slides[slide]
  const canGoBack = slide > 0
  const canGoNext = slide < slides.length - 1

  return (
    <section id="desafios" className="section-glow relative overflow-hidden bg-gradient-to-b from-[#0e0931] to-[#230443] py-14 sm:py-16">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-20" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10">
        <Reveal>
          <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Desafíos propuestos</span>
              <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Explora los desafíos 
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-white/70">
                {slide + 1} / {slides.length}
              </div>
              <button
                type="button"
                disabled={!canGoBack}
                onClick={() => setSlide((current) => Math.max(current - 1, 0))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-[#f58220]/45 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Ver desafíos anteriores"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                disabled={!canGoNext}
                onClick={() => setSlide((current) => Math.min(current + 1, slides.length - 1))}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-[#f58220]/45 disabled:cursor-not-allowed disabled:opacity-35"
                aria-label="Ver desafíos siguientes"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {currentChallenges.map((challenge) => {
            const Icon = challenge.icon
            const index = challenges.findIndex((item) => item.id === challenge.id)
            const visual = challengeVisuals[challenge.id]

            return (
              <Reveal key={challenge.id} delay={index * 0.04}>
                <article className="group relative flex min-h-[620px] flex-col overflow-hidden rounded-[38px] border border-white/10 bg-[#0b0c3b]/58 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#ec008c]/35">
                  <div className={`relative h-72 overflow-hidden rounded-[30px] bg-gradient-to-br ${visual.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.45),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(255,255,255,0.25),transparent_28%)]" />
                    <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,255,255,.22)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:34px_34px]" />
                    <div className="absolute -right-10 -bottom-12 h-56 w-56 rounded-full bg-white/20 blur-2xl" />
                    <div className="absolute top-6 left-6 flex items-center gap-3">
                      <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] ${visual.accent}`}>
                        {visual.eyebrow}
                      </span>
                    </div>
                    <div className="absolute right-7 bottom-7 left-7">
                      <div className="flex items-end justify-between gap-5">
                        <div>
                          <p className="font-display text-5xl font-bold tracking-[-0.07em] text-white/30">
                            {visual.motif}
                          </p>
                          <h3 className="mt-2 max-w-sm font-display text-3xl leading-[1.02] font-semibold tracking-[-0.04em] text-white">
                            {visual.title}
                          </h3>
                        </div>
                        <span className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[28px] border border-white/30 bg-white/20 text-white shadow-2xl backdrop-blur-xl">
                          <Icon className="h-10 w-10" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-sm font-semibold text-[#f58220]/80">
                        Desafío 0{index + 1}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-white/55">
                        Ver documento
                      </span>
                    </div>
                    <h3 className="font-display text-2xl leading-tight font-semibold tracking-[-0.04em] text-white">
                      {challenge.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {challenge.description}
                    </p>
                    <div className="mt-auto pt-6">
                      <a
                        href={`/docs/desafios/${challenge.id}.pdf`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[#f58220]/25 bg-[#ec008c]/10 px-5 py-2.5 text-sm font-semibold text-[#f58220] transition hover:border-[#f58220]/55 hover:bg-[#ec008c]/20"
                      >
                        <FileText className="h-4 w-4" />
                        Ver detalle
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSlide(index)}
              className={`h-2.5 rounded-full transition-all ${index === slide ? 'w-10 bg-[#f58220]' : 'w-2.5 bg-white/25 hover:bg-white/45'}`}
              aria-label={`Ir a página ${index + 1} de desafíos`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
