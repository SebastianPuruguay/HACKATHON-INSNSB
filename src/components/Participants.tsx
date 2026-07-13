import { CheckCircle2, GraduationCap, HeartPulse, Lightbulb, UsersRound } from 'lucide-react'
import { Reveal } from './Reveal'

const profiles = [
  { title: 'Estudiantes', detail: 'Desde el sexto ciclo', icon: GraduationCap },
  { title: 'Profesionales de salud', detail: 'Áreas clínicas y asistenciales', icon: UsersRound },
  {
    title: 'Profesionales de tecnología e innovación',
    detail: 'Tecnología, diseño, datos y prototipado.',
    icon: Lightbulb,
  },
  {
    title: 'Servidores y gestores públicos',
    detail: 'Gestión pública e innovación social.',
    icon: HeartPulse,
  },
]

const rules = [
  'Puedes inscribirte individualmente o como equipo.',
  'Si te inscribes individualmente, te asignaremos un equipo.',
  'Los equipos estarán conformados por 3 a 5 integrantes.',
  'Cada participante o equipo podrá seleccionar un desafío principal y una segunda opción de interés.',
]

export function Participants() {
  return (
    <section
      id="participantes"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0b0c3b] py-9 sm:py-14"
    >
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-40" />
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Personas distintas, un mismo reto
          </h2>
        </Reveal>

        <div className="mt-6 grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-[#230443]/90 via-[#0e0931]/90 to-[#0b0c3b]/90 p-5 text-white shadow-[0_20px_70px_rgba(236,0,140,0.14)] sm:p-7">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#ec008c]/18 blur-3xl" />
              <div className="absolute -bottom-20 -left-16 h-52 w-52 rounded-full bg-[#f58220]/14 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.16em] text-[#f58220] uppercase">
                  Cómo puedes postular
                </p>
                <h3 className="mt-3 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] sm:text-4xl">
                  De manera individual o en equipo
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Buscamos participantes con perfiles diversos que integren conocimientos de salud, tecnología, diseño, datos, gestión pública e innovación.
                </p>
              </div>

              <div className="relative mt-6 grid gap-3">
                {rules.map((rule) => (
                  <div key={rule} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f58220]" />
                    <p className="text-sm leading-6 text-slate-200">{rule}</p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full">
              <h3 className="mb-3 font-display text-xl font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                Quiénes pueden participar
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {profiles.map((profile) => {
                  const Icon = profile.icon
                  return (
                    <article
                      key={profile.title}
                      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#230443]/55 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.16)] sm:p-5"
                    >
                      <Icon className="pointer-events-none absolute -right-7 -bottom-7 h-28 w-28 text-white/[0.04]" />
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h4 className="mt-4 font-display text-xl font-semibold tracking-[-0.04em] text-white">
                        {profile.title}
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {profile.detail}
                      </p>
                    </article>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
