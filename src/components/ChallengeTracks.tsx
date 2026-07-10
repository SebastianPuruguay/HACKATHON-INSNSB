import { ArrowLeft, ArrowRight, FileText } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { challenges } from '../lib/challenges'
import { resourceLinks } from '../lib/resources'
import { Reveal } from './Reveal'

const desktopQuery = '(min-width: 1024px)'

function getItemsPerSlide() {
  if (typeof window === 'undefined') return 1
  return window.matchMedia(desktopQuery).matches ? 2 : 1
}

export function ChallengeTracks() {
  const [slide, setSlide] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide)

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopQuery)
    const syncItemsPerSlide = () => setItemsPerSlide(mediaQuery.matches ? 2 : 1)

    syncItemsPerSlide()
    mediaQuery.addEventListener('change', syncItemsPerSlide)
    return () => mediaQuery.removeEventListener('change', syncItemsPerSlide)
  }, [])

  const slides = useMemo(() => {
    const grouped = []
    for (let index = 0; index < challenges.length; index += itemsPerSlide) {
      grouped.push(challenges.slice(index, index + itemsPerSlide))
    }
    return grouped
  }, [itemsPerSlide])

  const safeSlide = Math.min(slide, slides.length - 1)
  const currentChallenges = slides[safeSlide] ?? []
  const canGoBack = safeSlide > 0
  const canGoNext = safeSlide < slides.length - 1

  return (
    <section id="desafios" className="section-glow relative overflow-hidden bg-gradient-to-b from-[#0e0931] to-[#230443] py-9 sm:py-14">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-10" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-30" />
      <div className="section-shell relative z-10">
        <Reveal>
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Desafíos propuestos</span>
              <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Elige un desafío para aportar
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                Revisa cada reto con calma. Cada inscripción individual o grupal podrá escoger como máximo un desafío.
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-white/[0.04] p-1.5 sm:justify-start">
              <div className="px-3 text-sm font-semibold text-white/70">
                {safeSlide + 1} / {slides.length}
              </div>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  disabled={!canGoBack}
                  onClick={() => setSlide((current) => Math.max(current - 1, 0))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-[#f58220]/45 disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Ver desafíos anteriores"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  disabled={!canGoNext}
                  onClick={() => setSlide((current) => Math.min(current + 1, slides.length - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-[#f58220]/45 disabled:cursor-not-allowed disabled:opacity-35"
                  aria-label="Ver desafíos siguientes"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-4 lg:grid-cols-2 lg:gap-5">
          {currentChallenges.map((challenge) => {
            const Icon = challenge.icon
            const index = challenges.findIndex((item) => item.id === challenge.id)

            return (
              <Reveal key={challenge.id} delay={index * 0.04} className="h-full">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#0b0c3b]/70 p-4 text-white shadow-[0_18px_55px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-all hover:border-[#ec008c]/35 sm:rounded-[30px] sm:p-6 lg:min-h-[470px]">
                  <Icon className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 text-white/[0.035] transition group-hover:text-[#f58220]/10 sm:h-56 sm:w-56" />
                  <div className="absolute -top-24 -right-20 h-48 w-48 rounded-full bg-[#ec008c]/12 blur-3xl" />
                  <div className="absolute -bottom-28 -left-20 h-52 w-52 rounded-full bg-[#f58220]/10 blur-3xl" />

                  <div className="relative flex flex-1 flex-col">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-2 rounded-full border border-[#f58220]/25 bg-[#ec008c]/10 px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-[#f58220] uppercase">
                        <Icon className="h-4 w-4" />
                        Desafío {index + 1}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      {challenge.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300 sm:leading-7">
                      {challenge.description}
                    </p>

                    <div className="mt-auto pt-5">
                      <a
                        href={
                          resourceLinks.challenges[
                            challenge.id as keyof typeof resourceLinks.challenges
                          ]
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#f58220]/25 bg-[#ec008c]/10 px-5 py-3 text-sm font-semibold text-[#f58220] transition hover:border-[#f58220]/55 hover:bg-[#ec008c]/20 sm:w-auto"
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

        <div className="mt-5 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSlide(index)}
              className={`h-2.5 rounded-full transition-all ${index === safeSlide ? 'w-10 bg-[#f58220]' : 'w-2.5 bg-white/25 hover:bg-white/45'}`}
              aria-label={`Ir a página ${index + 1} de desafíos`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
