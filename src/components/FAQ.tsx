import { Minus, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Reveal } from './Reveal'

const questions = [
  {
    question: '¿Quiénes pueden participar en la Hackatón Niño San Borja 2026?',
    answer:
      'La convocatoria es abierta y está dirigida a estudiantes y profesionales mayores de 18 años de ingeniería, ciencias de la salud y otras disciplinas o áreas afines. Pueden participar personas de distintos campos interesadas en aportar al desarrollo de soluciones innovadoras para la salud infantil.',
  },
  {
    question: '¿Pueden participar personas de otras regiones del Perú?',
    answer:
      'Sí. La convocatoria está abierta a participantes de todo el Perú. Sin embargo, en las sesiones presenciales cada equipo deberá garantizar la asistencia de al menos dos de sus integrantes.',
  },
  {
    question: '¿La inscripción es individual o por equipos?',
    answer:
      'Las personas pueden inscribirse individualmente o como parte de un equipo previamente conformado. Quienes se registren individualmente participarán en un espacio de socialización y conformación de equipos. También se habilitará una plataforma virtual, como Slack o Discord, para facilitar el contacto y el matching entre participantes; la plataforma seleccionada será comunicada oportunamente.',
  },
  {
    question: '¿Cuántas personas pueden integrar un equipo?',
    answer:
      'Cada equipo deberá estar conformado por un mínimo de tres y un máximo de cinco integrantes.',
  },
  {
    question: '¿Los equipos deben ser interdisciplinarios?',
    answer:
      'Sí. Los equipos deberán reunir integrantes de más de una disciplina para abordar los desafíos desde perspectivas complementarias. Además, se recomienda que al menos una persona sea profesional o estudiante de una carrera relacionada con las ciencias de la salud.',
  },
  {
    question: '¿Cuáles son los requisitos para postular?',
    answer:
      'Las personas interesadas deberán inscribirse y completar el formulario dentro del plazo establecido. En el formulario podrán indicar si participan individualmente o como parte de un equipo.',
  },
  {
    question: '¿Cuál será la modalidad, el cronograma y la asistencia requerida?',
    answer:
      'La Hackatón se desarrollará en modalidad híbrida. Del 5 al 12 de agosto se realizarán talleres y actividades de contextualización. El 13 de agosto se realizará el sprint virtual; el 14, un sprint presencial desde las 2:00 p. m.; y el 15, la jornada presencial de 9:00 a. m. a 7:00 p. m. En las sesiones presenciales, cada equipo deberá contar con la asistencia de al menos dos integrantes.',
  },
  {
    question: '¿Es necesario llegar con una idea o solución previamente desarrollada?',
    answer:
      'No. Se espera que las propuestas surjan y se construyan durante la Hackatón, a partir de la contextualización de los desafíos, talleres, mentorías, intercambio con especialistas y trabajo colaborativo. Las soluciones evolucionarán progresivamente hasta convertirse en una propuesta demostrable.',
  },
  {
    question: '¿Qué deberán presentar los equipos?',
    answer:
      'Cada equipo deberá presentar su propuesta y mostrar un producto mínimo viable (MVP), es decir, una versión inicial y demostrable de la solución. Las bases de la Hackatón detallarán los requisitos, formatos y contenidos mínimos de ambos entregables.',
  },
  {
    question: '¿Qué nivel de desarrollo deberá alcanzar la solución?',
    answer:
      'Se espera un MVP, prototipo o prueba de concepto que permita demostrar el funcionamiento o la lógica central de la propuesta. No será necesario presentar una solución completamente implementada, certificada o validada clínicamente. Para soluciones tecnológicas se tomará como referencia un alcance equivalente al TRL 3; para procesos, servicios u otras soluciones no tecnológicas, se deberá presentar un prototipo equivalente que explique y demuestre claramente su funcionamiento.',
  },
  {
    question: '¿Cuándo se realizará la presentación final y el anuncio de los equipos ganadores?',
    answer:
      'La presentación final de las propuestas se realizará el 15 de agosto de 2026. El anuncio de los equipos ganadores y la ceremonia de premiación se realizarán presencialmente el 21 de agosto de 2026 en el Instituto Nacional de Salud del Niño San Borja. El horario y las indicaciones de sustentación serán comunicados oportunamente.',
  },
  {
    question: '¿Cuáles serán los criterios de evaluación?',
    answer:
      'Los criterios, las ponderaciones y las demás condiciones de evaluación serán detallados en las bases de la Hackatón.',
  },
  {
    question: '¿Cada equipo puede participar en más de un desafío?',
    answer:
      'No. Cada equipo desarrollará una propuesta para un solo desafío. Durante la inscripción deberán indicar una primera y una segunda opción de preferencia; la asignación definitiva considerará estas preferencias y una adecuada distribución de los equipos entre los desafíos.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section-glow relative overflow-hidden border-y border-white/[0.06] bg-[#0b0c3b] py-10 sm:py-16 lg:py-20">
      <div className="dot-mesh pointer-events-none absolute inset-0 z-0 opacity-45" />
      <div className="section-shell relative z-10 grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <Reveal>
          <span className="section-eyebrow">Preguntas frecuentes</span>
          <h1 className="mt-4 font-display text-3xl leading-tight font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            Todo lo esencial para participar
          </h1>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
            Resolvemos las consultas sobre inscripción, equipos, modalidad,
            entregables y evaluación. Las bases oficiales complementarán estas
            condiciones.
          </p>
          <a
            href="/docs/bases-hackathon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-[#f58220]/40 bg-[#f58220] px-5 py-3 text-sm font-bold text-[#230443] transition hover:bg-white"
          >
            Ver bases del concurso
          </a>
        </Reveal>

        <Reveal delay={0.1} className="space-y-3">
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <article
                key={item.question}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#230443]/55 shadow-[0_15px_45px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:rounded-3xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm font-semibold text-white sm:text-base">
                    {index + 1}. {item.question}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220] sm:h-9 sm:w-9">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                    >
                      <p className="px-4 pb-5 text-sm leading-7 text-slate-300 sm:px-5 sm:pb-6">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
