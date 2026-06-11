import { UsersRound } from 'lucide-react'
import { Reveal } from './Reveal'

const profiles = [
  'Profesionales de salud',
  'Estudiantes universitarios',
  'Desarrolladores',
  'Diseñadores UX/UI',
  'Investigadores',
  'Administrativos',
  'Analistas de datos',
  'Emprendedores',
  'Ingenieros',
  'Innovadores públicos',
]

export function Participants() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-400/10 blur-[100px]" />
      <div className="section-shell">
        <Reveal className="relative overflow-hidden rounded-[40px] border border-indigo-100 bg-white p-7 shadow-[0_24px_80px_rgba(79,70,229,0.09)] sm:p-12 lg:p-16">
          <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-25" />
          <div className="dot-grid pointer-events-none absolute right-8 bottom-8 h-52 w-52 opacity-25 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative">
              <span className="innovation-gradient mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_12px_35px_rgba(79,70,229,0.3)]">
                <UsersRound className="h-6 w-6" />
              </span>
              <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-[#0a1b33] sm:text-5xl">
                Diferentes miradas, un mismo propósito
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-600">
                No necesitas venir de una sola disciplina. Las mejores soluciones nacen
                cuando experiencias distintas trabajan juntas.
              </p>
            </div>
            <div className="relative flex min-h-64 flex-wrap content-center gap-3 lg:justify-end">
              <div className="pointer-events-none absolute inset-4 rounded-[45%] border border-dashed border-indigo-300/40" />
              <div className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-3xl" />
              {profiles.map((profile) => (
                <span
                  key={profile}
                  className="relative z-10 rounded-full border border-indigo-100 bg-white/85 px-4 py-2.5 text-sm font-medium text-slate-600 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-violet-500 hover:bg-violet-600 hover:text-white"
                >
                  {profile}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
