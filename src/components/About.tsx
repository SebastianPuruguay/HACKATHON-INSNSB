import { Building2, Focus, MapPin, UsersRound } from 'lucide-react'
import fachadaInsnsb from '../assets/insnsb.png'
import { Reveal } from './Reveal'

const details = [
  { icon: Building2, label: 'Modalidad', value: 'Híbrida: actividades virtuales y presenciales' },
  { icon: MapPin, label: 'Sedes', value: 'Espacios de instituciones aliadas y plataformas digitales' },
  { icon: UsersRound, label: 'Equipos', value: 'Multidisciplinarios, de 4 a 5 integrantes' },
  { icon: Focus, label: 'Enfoque', value: 'Soluciones innovadoras con potencial de implementación real' },
]

export function About() {
  return (
    <section id="acerca" className="section-glow relative overflow-hidden border-y border-white/[0.06] bg-[#0e0931] py-24 sm:py-32">
      <div className="dot-grid pointer-events-none absolute top-20 left-8 h-52 w-52 opacity-15 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
      <div className="section-shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <Reveal>
          <span className="section-eyebrow">Acerca de la Hackatón</span>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Un entorno colaborativo para abordar desafíos prioritarios
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            La Hackatón Niño San Borja conecta conocimiento académico,
            experiencia del sector salud y talento innovador para co-crear propuestas
            integrales, viables y orientadas a generar impacto real en el sistema pediátrico peruano.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="lg:max-w-xl lg:justify-self-end">
          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#230443]/55 p-2.5 shadow-[0_24px_80px_rgba(236,0,140,0.16)] backdrop-blur-xl">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[24px]">
              <img
                src={fachadaInsnsb}
                alt="Fachada del Instituto Nacional de Salud del Niño San Borja"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0b0c3b]/40 via-transparent to-[#ec008c]/18" />
              <div className="absolute bottom-4 left-4 rounded-2xl border border-white/25 bg-[#0e0931]/45 px-4 py-3 text-white shadow-lg backdrop-blur-xl">
                <p className="text-[10px] font-semibold tracking-[0.14em] text-white/65 uppercase">
                  Sede institucional
                </p>
                <p className="mt-1 font-display text-sm font-semibold">INSN San Borja</p>
              </div>
            </div>
            <div className="soft-grid mt-3 grid rounded-[28px] border border-white/[0.06] bg-gradient-to-br from-[#0e0931] to-[#230443] p-5 sm:grid-cols-2 sm:p-6">
              {details.map((detail) => {
                const Icon = detail.icon
                return (
                  <div
                    key={detail.label}
                    className="flex gap-3 border-b border-white/[0.08] py-4 last:border-0 sm:border-b sm:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220] shadow-sm">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                        {detail.label}
                      </p>
                      <p className="mt-1 text-xs leading-5 font-semibold text-slate-100">
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


