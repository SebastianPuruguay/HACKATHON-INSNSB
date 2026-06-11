import { Building2, GraduationCap, HeartHandshake, Landmark, Microscope, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useAnimationFrame, useMotionValue } from 'motion/react'
import { useState } from 'react'
import logoEsan from '../assets/aliado-esan.png'
import logoPcm from '../assets/aliado-pcm.png'
import logoPucp from '../assets/aliado-pucp.png'
import logoHorizontalInsnsb from '../assets/logoinsnsb.png'
import { Reveal } from './Reveal'

type Partner = {
  name: string
  type: string
  icon?: LucideIcon
  logo?: string
}

const partners: Partner[] = [
  { name: 'INSN San Borja', type: 'Organizador', logo: logoHorizontalInsnsb },
  { name: 'PUCP', type: 'Aliado académico', logo: logoPucp },
  { name: 'Universidad ESAN', type: 'Aliado académico', logo: logoEsan },
  { name: 'PCM', type: 'Aliado institucional', logo: logoPcm },
  { name: 'Institución aliada', type: 'Salud pública', icon: Landmark },
  { name: 'Universidad aliada', type: 'Academia', icon: GraduationCap },
  { name: 'Empresa tecnológica', type: 'Tecnología', icon: Sparkles },
  { name: 'Centro de investigación', type: 'Investigación', icon: Microscope },
  { name: 'Organización aliada', type: 'Impacto social', icon: HeartHandshake },
  { name: 'Empresa participante', type: 'Innovación', icon: Building2 },
  { name: 'Universidad participante', type: 'Talento', icon: GraduationCap },
  { name: 'Institución participante', type: 'Ecosistema', icon: Landmark },
]

const loopWidth = partners.length * 256

export function PartnersCarousel() {
  const x = useMotionValue(0)
  const [paused, setPaused] = useState(false)

  useAnimationFrame((_, delta) => {
    if (paused) return
    const next = x.get() - delta * 0.035
    x.set(next <= -loopWidth ? next + loopWidth : next)
  })

  return (
    <section className="section-glow relative overflow-hidden bg-[#060b1d] py-24 sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-10" />
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Ecosistema de innovación</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Aliados y organizaciones participantes
          </h2>
          <p className="mt-5 leading-7 text-slate-300">
            Instituciones, universidades, empresas y organizaciones que impulsan la
            innovación en salud pediátrica.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#060b1d] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#060b1d] to-transparent sm:w-40" />
        <div
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div className="flex w-max gap-4 px-2" style={{ x }}>
            {[...partners, ...partners].map((partner, index) => {
              const Icon = partner.icon
              return (
                <article
                  key={`${partner.name}-${index}`}
                  className="group flex h-28 w-60 shrink-0 items-center gap-4 rounded-[26px] border border-white/10 bg-slate-900/75 px-5 shadow-[0_18px_45px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-[0_18px_50px_rgba(124,58,237,0.18)]"
                >
                  <span className={`flex h-12 shrink-0 items-center justify-center rounded-2xl bg-white p-2 text-indigo-600 transition-transform group-hover:scale-105 ${partner.logo ? 'w-24' : 'w-16'}`}>
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt={`Logo de ${partner.name}`}
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      Icon && <Icon className="h-6 w-6" />
                    )}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-white">
                      {partner.name}
                    </span>
                    <span className="mt-1 block text-xs text-slate-400">{partner.type}</span>
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
