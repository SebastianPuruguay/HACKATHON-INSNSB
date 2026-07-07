import { ArrowLeft, ArrowRight, FileText } from 'lucide-react'
import { useMemo, useState } from 'react'
import challengeCardioAlerta from '../assets/challenge-cardio-alerta.png'
import challengeCrecerMejor from '../assets/challenge-crecer-mejor.png'
import challengeNeurodesarrollo from '../assets/challenge-neuroalianza.png'
import challengePuente18 from '../assets/challenge-puente-18.png'
import challengeRutaHematologica from '../assets/challenge-ruta-hematologica.png'
import challengeSanarte from '../assets/challenge-sanarte.png'
import { challenges } from '../lib/challenges'
import { Reveal } from './Reveal'

const slideSize = 2

const challengeVisuals: Record<string, { image: string; eyebrow: string; alt: string }> = {
  'puente-18': {
    image: challengePuente18,
    eyebrow: 'Puente 18',
    alt: 'Entrega de carpeta médica entre profesionales de salud y paciente joven',
  },
  'cardio-alerta': {
    image: challengeCardioAlerta,
    eyebrow: 'Cardio Alerta',
    alt: 'Modelo anatómico de corazón y estetoscopio sobre una mesa clínica',
  },
  'ruta-hematologica': {
    image: challengeRutaHematologica,
    eyebrow: 'Ruta Hematológica',
    alt: 'Tubos de muestra de sangre y ruta de atención sobre una mesa clínica',
  },
  neuroalianza: {
    image: challengeNeurodesarrollo,
    eyebrow: 'Neurodesarrollo',
    alt: 'Manos organizando bloques junto a una tableta con diagrama cerebral',
  },
  'crecer-mejor': {
    image: challengeCrecerMejor,
    eyebrow: 'Crecer Mejor',
    alt: 'Elementos de monitoreo nutricional con frutas, cinta métrica y curva de crecimiento',
  },
  sanarte: {
    image: challengeSanarte,
    eyebrow: 'Sanarte',
    alt: 'Espacio de pausa para personal de salud con taza, cuaderno y estetoscopio',
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

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          {currentChallenges.map((challenge) => {
            const Icon = challenge.icon
            const index = challenges.findIndex((item) => item.id === challenge.id)
            const visual = challengeVisuals[challenge.id]

            return (
              <Reveal key={challenge.id} delay={index * 0.04} className="h-full">
                <article className="group relative flex h-full min-h-[680px] flex-col overflow-hidden rounded-[38px] border border-white/10 bg-[#0b0c3b]/58 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#ec008c]/35 lg:min-h-[720px]">
                  <div className="relative h-80 shrink-0 overflow-hidden rounded-[30px] bg-slate-100">
                    <img
                      src={visual.image}
                      alt={visual.alt}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                    <div className="absolute top-5 left-5 flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-slate-700 uppercase shadow-sm backdrop-blur-md">
                      <Icon className="h-3.5 w-3.5 text-[#ec008c]" />
                      {visual.eyebrow}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <div className="mb-5 flex items-center justify-between gap-4">
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
                    <p className="mt-4 overflow-hidden text-sm leading-7 text-slate-300 [display:-webkit-box] [-webkit-line-clamp:6] [-webkit-box-orient:vertical]">
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
