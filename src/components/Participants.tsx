import { GraduationCap, HeartPulse, Lightbulb, UsersRound } from "lucide-react";
import participantsGraphic from "../assets/hackathon-participants.png";
import { Reveal } from "./Reveal";

const profiles = [
  { title: "Estudiantes", detail: "Desde sexto ciclo", icon: GraduationCap },
  { title: "Profesionales", detail: "Salud y tecnología", icon: UsersRound },
  {
    title: "Innovadores",
    detail: "Diseño, datos y prototipos",
    icon: Lightbulb,
  },
  {
    title: "Gestión pública",
    detail: "Impacto y continuidad",
    icon: HeartPulse,
  },
];

export function Participants() {
  return (
    <section
      id="participantes"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[#0b0c3b] py-14 sm:py-16"
    >
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Participantes</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Personas distintas, un mismo reto
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.05fr] lg:items-stretch">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-[40px] border border-white/10 bg-[#230443]/55 shadow-[0_24px_80px_rgba(236,0,140,0.16)]">
              <img
                src={participantsGraphic}
                alt="Participantes colaborando en una hackatón de salud"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0c3b]/72 via-transparent to-transparent" />
              <div className="absolute right-5 bottom-5 left-5 rounded-2xl border border-white/10 bg-[#0e0931]/58 p-4 backdrop-blur-xl">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#f58220] uppercase">
                  Comunidad hackatón
                </p>
                <p className="mt-1 font-display text-xl font-semibold text-white">
                  Talento clínico, técnico y social.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {profiles.map((profile) => {
                  const Icon = profile.icon;
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
                  );
                })}
              </div>

              <article className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-[#230443]/80 to-[#0e0931]/80 px-6 py-5 shadow-[0_18px_50px_rgba(0,0,0,0.18)]">
                <div className="absolute -right-14 -bottom-20 h-40 w-40 rounded-full bg-[#f58220]/15 blur-3xl" />
                <p className="text-xs font-bold tracking-[0.16em] text-[#f58220] uppercase">
                  Puedes postular
                </p>
                <div className="relative mt-4 flex flex-wrap gap-3">
                  {["Solo", "Con equipo", "De 3 a 5"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/12 bg-white/[0.08] px-5 py-2.5 font-display text-lg font-semibold tracking-[-0.04em] text-white"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="relative mt-4 max-w-xl text-sm leading-6 text-slate-300">
                  Se valoran equipos diversos: salud, tecnología, gestión,
                  diseño, datos e innovación social.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
