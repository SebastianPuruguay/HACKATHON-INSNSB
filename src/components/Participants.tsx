import { GraduationCap, HeartPulse, Lightbulb, UsersRound } from 'lucide-react'
import participantsGraphic from '../assets/hackathon-participants.png'
import { Reveal } from './Reveal'

const profiles = [
  { title: 'Estudiantes', detail: 'Desde sexto ciclo', icon: GraduationCap },
  { title: 'Profesionales', detail: 'Salud y tecnología', icon: UsersRound },
  {
    title: 'Innovadores',
    detail: 'Diseño, datos y prototipos',
    icon: Lightbulb,
  },
  {
    title: 'Gestión pública',
    detail: 'Impacto y continuidad',
    icon: HeartPulse,
  },
]

export function Participants() {
  return (
    <section
      id="participantes"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0b0c3b] py-10 sm:py-14"
    >
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-50" />
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Participantes</span>
          <h2 className="font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Personas distintas, un mismo reto
          </h2>
        </Reveal>

        <div className="mt-7 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <Reveal className="h-full">
            <div className="relative aspect-[3/2] h-full min-h-[260px] overflow-hidden rounded-[32px] border border-white/10 bg-[#230443]/55 shadow-[0_24px_80px_rgba(236,0,140,0.16)] sm:min-h-[340px] lg:aspect-auto lg:min-h-[430px]">
              <img
                src={participantsGraphic}
                alt="Participantes colaborando en la Hackatón Niño San Borja"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c3b]/42 via-transparent to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {profiles.map((profile) => {
                  const Icon = profile.icon
                  return (
                    <article
                      key={profile.title}
                      className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#230443]/55 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.16)]"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg font-semibold tracking-[-0.03em] text-white">
                            {profile.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {profile.detail}
                          </p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>

              <article className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#230443]/80 to-[#0e0931]/80 px-5 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:px-6">
                <div className="absolute -right-14 -bottom-20 h-40 w-40 rounded-full bg-[#f58220]/15 blur-3xl" />
                <p className="text-xs font-bold tracking-[0.16em] text-[#f58220] uppercase">
                  Puedes postular
                </p>
                <div className="relative mt-4 flex flex-wrap gap-2.5">
                  {['Solo', 'Con equipo', 'De 3 a 5'].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.08] px-4 py-2 font-display text-base font-semibold tracking-[-0.04em] text-white sm:px-5 sm:py-2.5 sm:text-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="relative mt-4 max-w-xl text-sm leading-6 text-slate-300">
                  Si te inscribes solo, se te asignará un equipo. Cada inscripción individual o grupal podrá escoger un solo desafío.
                </p>
                <p className="relative mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Se valoran equipos diversos: salud, tecnología, gestión, diseño, datos e innovación social.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
