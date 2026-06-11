import { UserPlus, UsersRound } from 'lucide-react'
import { Reveal } from './Reveal'

const profiles = [
  'Estudiantes desde sexto ciclo',
  'Egresados',
  'Profesionales',
  'Ciencias de la salud',
  'Ingeniería',
  'Ciencias sociales',
  'Innovación',
  'Salud pública',
]

const teamRules = [
  'Participación individual o con equipo previamente conformado.',
  'Equipos de mínimo 4 y máximo 5 integrantes.',
  'Cada participante puede formar parte de un solo equipo.',
  'Se recomienda conformar equipos multidisciplinarios.',
]

export function Participants() {
  return (
    <section id="participantes" className="relative overflow-hidden border-y border-white/[0.04] bg-[#080d1d] py-24 sm:py-32">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-60" />
      <div className="section-shell relative z-10">
        <Reveal className="relative overflow-hidden rounded-[40px] border border-white/10 bg-slate-900/65 p-7 shadow-[0_24px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="circuit-pattern pointer-events-none absolute inset-0 opacity-25" />
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="innovation-gradient mb-6 flex h-12 w-12 items-center justify-center rounded-2xl text-white"><UsersRound className="h-6 w-6" /></span>
              <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">Talento multidisciplinario para la salud pediátrica</h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-300">Pueden participar estudiantes universitarios desde sexto ciclo, egresados y profesionales interesados en desarrollar soluciones innovadoras en salud.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {profiles.map((profile) => <span key={profile} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-sm font-medium text-slate-300">{profile}</span>)}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/10 bg-slate-950/45 p-6 backdrop-blur-xl sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-400/10 text-indigo-300"><UserPlus className="h-5 w-5" /></span>
                <h3 className="font-display text-xl font-semibold text-white">Conformación de equipos</h3>
              </div>
              <div className="mt-6 space-y-4">
                {teamRules.map((rule, index) => (
                  <div key={rule} className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-indigo-400/25 bg-indigo-400/10 text-xs font-semibold text-indigo-200">{index + 1}</span>
                    <p className="text-sm leading-6 text-slate-300">{rule}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
