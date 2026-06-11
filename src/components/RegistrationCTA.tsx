import { ArrowRight, HeartPulse } from 'lucide-react'
import { motion } from 'motion/react'
import { Reveal } from './Reveal'

export function RegistrationCTA() {
  return (
    <section id="registro" className="bg-[#020617] py-24 sm:py-32">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#080d2b] via-[#25206e] to-[#641b9c] px-7 py-14 text-white shadow-[0_30px_100px_rgba(79,70,229,0.28)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
            <div className="absolute -top-28 -right-28 h-80 w-80 rounded-full bg-blue-400/25 blur-3xl" />
            <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-violet-400/25 blur-3xl" />
            <div className="soft-grid absolute inset-0 opacity-20" />
            <div className="relative z-10 max-w-3xl">
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-violet-200 backdrop-blur-xl">
                <HeartPulse className="h-6 w-6" />
              </span>
              <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                ¿Listo para crear soluciones que impacten la salud pediátrica?
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Inscríbete y forma parte de una experiencia de innovación orientada a
                resolver desafíos reales del entorno hospitalario.
              </p>
              {/* Replace this href with a Google Forms, Microsoft Forms, Tally, or custom registration link. */}
              <motion.a
                href="#registro"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-indigo-900 shadow-[0_15px_40px_rgba(0,0,0,0.2)] transition-all hover:bg-violet-50 sm:px-8 sm:py-4"
              >
                Inscribirme ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
