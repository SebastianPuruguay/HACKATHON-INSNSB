import { Reveal } from './Reveal'

const criteria = [
  { label: 'Innovación', description: 'Originalidad y enfoque novedoso frente al problema.' },
  { label: 'Impacto en salud', description: 'Potencial de mejora en atención, prevención o gestión.' },
  { label: 'Viabilidad técnica y económica', description: 'Factibilidad técnica, operativa y económica.' },
  { label: 'Enfoque en el usuario', description: 'Respuesta a necesidades de pacientes y actores finales.' },
  { label: 'Calidad de la presentación (pitch)', description: 'Claridad, coherencia y comunicación persuasiva.' },
]

export function EvaluationCriteria() {
  return (
    <section id="evaluacion" className="relative border-y border-white/[0.04] bg-gradient-to-b from-[#0f172a] to-[#11102e] py-24 sm:py-32">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-55" />
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
        <Reveal>
          <span className="section-eyebrow">Evaluación oficial</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">Cinco criterios, 25 puntos en total</h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-300">Un jurado de cinco miembros evaluará cada propuesta. Cada criterio tiene un puntaje máximo de 5 puntos y las decisiones del jurado son inapelables.</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="rounded-[36px] border border-white/10 bg-slate-950/55 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-8">
            <div className="space-y-5">
              {criteria.map((criterion) => (
                <div key={criterion.label} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
                  <div className="flex justify-between gap-4"><span className="font-semibold text-slate-100">{criterion.label}</span><span className="shrink-0 font-semibold text-violet-300">5 ptos.</span></div>
                  <p className="mt-2 text-xs leading-5 text-slate-400">{criterion.description}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.08]"><div className="h-full w-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" /></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
