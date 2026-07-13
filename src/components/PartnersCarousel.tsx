import type { LucideIcon } from 'lucide-react'
import { motion, useAnimationFrame, useMotionValue } from 'motion/react'
import { useState } from 'react'
import logoEsan from '../assets/aliado-esan.png'
import logoPcm from '../assets/aliado-pcm.png'
import logoPucp from '../assets/aliado-pucp.png'
import logoCasaRonald from '../assets/casaronald.png'
import logoLaboratoria from '../assets/laboratoria.jpg'
import logoHorizontalInsnsb from '../assets/logoinsnsb.png'
import { Reveal } from './Reveal'

type Partner = { name: string; type: string; icon?: LucideIcon; logo?: string }

const partners: Partner[] = [
  { name: 'INSN San Borja', type: 'Institución organizadora y sede principal', logo: logoHorizontalInsnsb },
  { name: 'PUCP', type: 'Aliado académico y sede', logo: logoPucp },
  { name: 'Universidad ESAN', type: 'Aliado académico y sede', logo: logoEsan },
  { name: 'SGTD-PCM', type: 'Aliado institucional', logo: logoPcm },
  { name: 'Casa Ronald McDonald', type: 'Aliado institucional', logo: logoCasaRonald },
  { name: 'Laboratoria', type: 'Aliado estratégico', logo: logoLaboratoria },
]

const partnerCardWidth = 352
const partnerGap = 24
const loopWidth = partners.length * (partnerCardWidth + partnerGap)

export function PartnersCarousel() {
  const x = useMotionValue(0)
  const [paused, setPaused] = useState(false)

  useAnimationFrame((_, delta) => {
    if (paused) return
    const next = x.get() - delta * 0.035
    x.set(next <= -loopWidth ? next + loopWidth : next)
  })

  return (
    <section className="section-glow relative overflow-hidden bg-[#0e0931] py-10 sm:py-16 md:py-24">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-10" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-35" />
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Ecosistema de innovación</span>
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Organizador y aliados estratégicos
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:mt-4 sm:leading-7">
            El INSN San Borja organiza y lidera la Hackatón con el apoyo de aliados académicos, institucionales y estratégicos.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-7 grid gap-3 md:hidden">
          {partners.map((partner) => (
            <article key={partner.name} className="flex items-center gap-4 rounded-[24px] border border-white/10 bg-[#230443]/60 p-4 shadow-[0_14px_38px_rgba(0,0,0,0.18)] backdrop-blur-xl">
              <span className="flex h-20 w-28 shrink-0 items-center justify-center rounded-[20px] bg-white p-3 shadow-lg">
                {partner.logo && <img src={partner.logo} alt={`Logo de ${partner.name}`} className="h-full w-full object-contain" />}
              </span>
              <span>
                <span className="block font-display text-lg font-semibold tracking-[-0.03em] text-white">{partner.name}</span>
                <span className="mt-1 block text-sm text-slate-400">{partner.type}</span>
              </span>
            </article>
          ))}
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-14 hidden md:block">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#0e0931] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#0e0931] to-transparent sm:w-40" />
        <div className="overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <motion.div className="flex w-max gap-6 px-3" style={{ x }}>
            {[...partners, ...partners].map((partner, index) => {
              const Icon = partner.icon
              return (
                <article key={`${partner.name}-${index}`} className="group flex h-40 w-[352px] shrink-0 items-center gap-6 rounded-[32px] border border-white/10 bg-[#230443]/60 px-7 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-[#ec008c]/35">
                  <span className={`flex h-24 shrink-0 items-center justify-center rounded-[26px] bg-white p-4 text-[#ec008c] shadow-lg transition-transform group-hover:scale-105 ${partner.logo ? 'w-40' : 'w-24'}`}>
                    {partner.logo ? <img src={partner.logo} alt={`Logo de ${partner.name}`} className="h-full w-full object-contain" /> : Icon && <Icon className="h-9 w-9" />}
                  </span>
                  <span>
                    <span className="block font-display text-xl font-semibold tracking-[-0.03em] text-white">{partner.name}</span>
                    <span className="mt-2 block text-sm text-slate-400">{partner.type}</span>
                  </span>
                </article>
              )
            })}
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}
