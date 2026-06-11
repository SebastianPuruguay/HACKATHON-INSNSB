import { Minus, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal } from './Reveal'

const questions = [
  { question: '¿Quiénes pueden participar?', answer: 'Estudiantes universitarios desde sexto ciclo, egresados y profesionales interesados en soluciones innovadoras en salud.' },
  { question: '¿Puedo postular individualmente?', answer: 'Sí. Puedes postular individualmente o con un equipo previamente conformado. El comité organizador podrá agrupar a quienes postulen individualmente.' },
  { question: '¿Cuántas personas integran un equipo?', answer: 'Los equipos deben tener un mínimo de cuatro y un máximo de cinco integrantes. Cada participante solo puede formar parte de un equipo.' },
  { question: '¿Cuál es la modalidad del evento?', answer: 'La Hackatón se desarrollará en modalidad híbrida, combinando actividades virtuales y presenciales.' },
  { question: '¿Las mentorías son obligatorias?', answer: 'La participación en las mentorías y actividades que establezca la organización será obligatoria para los equipos.' },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-glow relative overflow-hidden border-y border-white/[0.04] bg-[#080d1d] py-24 sm:py-32">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <span className="section-eyebrow">Preguntas frecuentes</span>
          <h2 className="font-display text-4xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">Información esencial para participar</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-300">Consulta las bases oficiales para conocer todas las condiciones, disposiciones y lineamientos del evento.</p>
        </Reveal>
        <Reveal delay={0.1} className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div key={item.question} className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/65 shadow-[0_15px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl">
                <button type="button" onClick={() => setOpenIndex(isOpen ? null : index)} className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6" aria-expanded={isOpen}>
                  <span className="font-display text-base font-semibold text-white sm:text-lg">{item.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-400/20 bg-indigo-400/10 text-indigo-300">{isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p className="px-5 pb-6 text-sm leading-7 text-slate-400 sm:px-6">{item.answer}</p></motion.div>}
                </AnimatePresence>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
