import { Reveal } from './Reveal'

const criteria = [
  { label: 'Impacto en salud pediátrica', value: '30%', width: 'w-[92%]' },
  { label: 'Viabilidad técnica', value: '25%', width: 'w-[80%]' },
  { label: 'Innovación', value: '20%', width: 'w-[70%]' },
  { label: 'Escalabilidad', value: '15%', width: 'w-[58%]' },
  { label: 'Claridad de presentación', value: '10%', width: 'w-[45%]' },
]

export function EvaluationCriteria() {
  return (
    <section className="relative border-y border-white/[0.04] bg-gradient-to-b from-[#0f172a] to-[#11102e] py-24 sm:py-32">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-55" />
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="section-eyebrow">Criterios de evaluación</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Ideas que equilibran impacto y ejecución
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-300">
            El jurado valorará soluciones pertinentes, innovadoras y con una ruta clara
            hacia su implementación.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[36px] border border-white/10 bg-slate-950/55 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            <div className="space-y-6">
              {criteria.map((criterion) => (
                <div key={criterion.label}>
                  <div className="mb-2.5 flex justify-between gap-4 text-sm">
                    <span className="font-semibold text-slate-200">{criterion.label}</span>
                    <span className="font-semibold text-violet-300">{criterion.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 ${criterion.width}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
