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
    <section className="bg-gradient-to-b from-indigo-50/60 to-violet-50/40 py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="section-eyebrow">Criterios de evaluación</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-[#0a1b33] sm:text-5xl">
            Ideas que equilibran impacto y ejecución
          </h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">
            El jurado valorará soluciones pertinentes, innovadoras y con una ruta clara
            hacia su implementación.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[36px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="space-y-6">
              {criteria.map((criterion) => (
                <div key={criterion.label}>
                  <div className="mb-2.5 flex justify-between gap-4 text-sm">
                    <span className="font-semibold text-[#0a1b33]">{criterion.label}</span>
                    <span className="font-semibold text-violet-600">{criterion.value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-slate-100">
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
