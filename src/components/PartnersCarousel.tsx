import { Building2, GraduationCap, HeartHandshake, Landmark, Microscope, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { motion, useAnimationFrame, useMotionValue } from 'motion/react'
import { useState } from 'react'
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
    <section className="section-glow relative overflow-hidden py-24 sm:py-32">
      <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-10" />
      <div className="section-shell relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Ecosistema de innovación</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-[#0a1b33] sm:text-5xl">
            Aliados y organizaciones participantes
          </h2>
          <p className="mt-5 leading-7 text-slate-600">
            Instituciones, universidades, empresas y organizaciones que impulsan la
            innovación en salud pediátrica.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="relative mt-14">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#f9fafb] to-transparent sm:w-40" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#f9fafb] to-transparent sm:w-40" />
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
                  className="group flex h-28 w-60 shrink-0 items-center gap-4 rounded-[26px] border border-indigo-100 bg-white px-5 shadow-[0_12px_40px_rgba(79,70,229,0.07)] transition-all hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_18px_50px_rgba(124,58,237,0.16)]"
                >
                  <span className="flex h-12 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-violet-100 p-2 text-indigo-600 transition-transform group-hover:scale-105">
                    {partner.logo ? (
                      <img
                        src={partner.logo}
                        alt="Logo del Instituto Nacional de Salud del Niño San Borja"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      Icon && <Icon className="h-6 w-6" />
                    )}
                  </span>
                  <span>
                    <span className="block font-display text-sm font-semibold text-[#0a1b33]">
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
