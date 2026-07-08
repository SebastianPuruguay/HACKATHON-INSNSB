import { CalendarDays, Sparkles, UsersRound } from "lucide-react";
import fallbackEventBanner from "../assets/HACKATONFINAL.png";
const eventBanner =
  "https://portal.insnsb.gob.pe/docencia/wp-content/uploads/HACKATONFINAL.png";

import { ChallengeAccordion } from "./ChallengeAccordion";
import { InterestForm } from "./InterestForm";

const keyDates = [
  {
    label: "Formulario de interés",
    value: "Disponible ahora",
    icon: UsersRound,
    href: "#interes",
  },
  {
    label: "Convocatoria oficial",
    value: "08 de julio",
    icon: CalendarDays,
    href: null,
  },
  {
    label: "Hackatón",
    value: "Del 04 al 21 de agosto",
    icon: Sparkles,
    href: null,
  },
];

export function InterestLanding() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0c3b] text-white ">
      <section
        id="inicio"
        className="overflow-hidden border-b border-white/10 bg-[#0b0c3b]"
      >
        <img
          src={eventBanner}
          alt="Hackatón Niño San Borja"
          loading="eager"
          className="block aspect-[5/2] w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackEventBanner;
          }}
        />
      </section>

      <section id="desafios" className="relative bg-[#0e0931] py-20 sm:py-28">
        <div className="dot-mesh-fade pointer-events-none absolute inset-0 opacity-35" />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-bold tracking-[0.18em] text-[#f58220] uppercase">
              Desafíos propuestos
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Explora los desafíos y elige dónde aportar
            </h1>
            <p className="mt-5 leading-7 text-white/70">
              Abre cada desafío para leer el enunciado completo. Cada inscripción individual o grupal podrá escoger como máximo un desafío.
            </p>

          </div>
          <ChallengeAccordion />
        </div>
      </section>

      <InterestForm />

      <section
        id="fechas"
        className="border-y border-white/10 bg-[#230443] py-14 sm:py-16"
      >
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-3 sm:px-6 lg:px-8">
          {keyDates.map((item) => {
            const Icon = item.icon;
            const cardClassName =
              "group relative flex min-h-[164px] items-center gap-5 overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-white/[0.11] to-white/[0.04] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-[#ec008c]/45 hover:shadow-[0_20px_50px_rgba(236,0,140,0.16)] sm:p-7";
            const cardContent = <>
              <span className="absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-[#ec008c]/15 blur-2xl transition group-hover:bg-[#f58220]/20" />
              <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/15 text-[#f58220] shadow-[0_10px_26px_rgba(236,0,140,0.18)]">
                <Icon className="h-6 w-6" />
              </span>
              <div className="relative">
                <p className="text-sm font-semibold tracking-wide text-white/75">{item.label}</p>
                <p className="mt-2 font-display text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">{item.value}</p>
              </div>
            </>;

            return item.href ? (
              <a key={item.label} href={item.href} className={`${cardClassName} cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f58220]`}>
                {cardContent}
              </a>
            ) : (
              <div key={item.label} className={cardClassName}>{cardContent}</div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
