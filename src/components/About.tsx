import { Building2, Focus, MapPin, UsersRound } from 'lucide-react'
import fachadaInsnsb from '../assets/insnsb.png'
import { Reveal } from './Reveal'

const details = [
  { icon: Building2, label: 'Modalidad', value: 'Presencial / Híbrida' },
  { icon: MapPin, label: 'Sede', value: 'Instituto Nacional de Salud del Niño San Borja' },
  { icon: UsersRound, label: 'Dirigido a', value: 'Equipos multidisciplinarios' },
  { icon: Focus, label: 'Enfoque', value: 'Innovación aplicada en salud pediátrica' },
]

export function About() {
  return (
    <section id="acerca" className="section-glow relative overflow-hidden py-24 sm:py-32">
      <div className="dot-grid pointer-events-none absolute top-20 left-8 h-52 w-52 opacity-15 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <span className="section-eyebrow">Propósito del evento</span>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-[#0a1b33] sm:text-5xl">
            Una hackathon para transformar desafíos hospitalarios en soluciones reales
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            La Hackathon Pediátrica INSN-SB convoca a profesionales de salud, tecnología,
            diseño, investigación, administración y estudiantes para crear propuestas
            innovadoras orientadas a mejorar la atención, gestión y experiencia en salud
            pediátrica.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="overflow-hidden rounded-[36px] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px]">
              <img
                src={fachadaInsnsb}
                alt="Fachada del Instituto Nacional de Salud del Niño San Borja"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 via-transparent to-violet-700/20" />
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/25 bg-slate-950/35 px-4 py-3 text-white shadow-lg backdrop-blur-xl">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-white/65 uppercase">
                  Sede institucional
                </p>
                <p className="mt-1 font-display text-sm font-semibold">INSN San Borja</p>
              </div>
            </div>
            <div className="soft-grid mt-3 grid rounded-[28px] bg-gradient-to-br from-slate-50 to-indigo-50/60 p-5 sm:grid-cols-2 sm:p-6">
              {details.map((detail) => {
                const Icon = detail.icon
                return (
                  <div
                    key={detail.label}
                    className="flex gap-3 border-b border-slate-200/80 py-4 last:border-0 sm:border-b sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-indigo-600 shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-slate-400 uppercase">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 font-semibold text-[#0a1b33]">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
