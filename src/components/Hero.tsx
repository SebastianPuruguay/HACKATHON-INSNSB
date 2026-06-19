import { ArrowRight, FileText, Info } from 'lucide-react'
import { motion } from 'motion/react'
import { Navbar } from './Navbar'

export function Hero() {
  return (
    <section id="inicio" className="px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-[1460px] rounded-[52px] bg-slate-900/80 p-2 shadow-[0_35px_100px_-35px_rgba(79,70,229,0.5)] sm:p-3">
        <div className="relative mx-auto flex min-h-[760px] w-full max-w-[1400px] flex-col overflow-hidden rounded-[44px] border border-white/10 bg-[#020617] shadow-[0_30px_80px_-25px_rgba(15,23,42,0.8)]">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none">
            <video autoPlay loop muted playsInline className="h-full w-full scale-105 object-cover transition-transform duration-1000">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-slate-950/45" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-indigo-950/25 to-violet-950/60" />
            <motion.div
              className="absolute -inset-[35%] opacity-55 blur-[75px]"
              style={{ background: 'conic-gradient(from 120deg at 50% 50%, rgba(37,99,235,.55), rgba(79,70,229,.35), rgba(147,51,234,.5), rgba(59,130,246,.45), rgba(37,99,235,.55))' }}
              animate={{ rotate: [0, 18, 0], scale: [1, 1.08, 1], x: ['-3%', '3%', '-3%'] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div className="absolute -top-28 -left-24 h-96 w-96 rounded-full bg-blue-500/35 blur-[100px]" animate={{ x: [0, 60, 0], y: [0, 35, 0], scale: [1, 1.15, 1] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} />
            <motion.div className="absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full bg-violet-500/30 blur-[110px]" animate={{ x: [0, -55, 0], y: [0, -30, 0], scale: [1, 1.18, 1] }} transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }} />
            <div className="dot-mesh absolute inset-0 opacity-65 mix-blend-screen" />
            <div className="soft-grid absolute inset-0 opacity-[0.12] mix-blend-screen" />
          </div>

          <Navbar />

          <div className="relative z-20 flex flex-1 flex-col items-start justify-center px-7 pt-16 pb-12 md:px-16 md:pt-20 lg:justify-start lg:pb-40">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="max-w-5xl">
              <p className="text-xs font-semibold tracking-[0.16em] text-indigo-200 uppercase">HackatÃ³n en Salud PediÃ¡trica INSNSB</p>
              <h1 className="mt-5 max-w-5xl font-display text-[46px] leading-[0.92] font-bold tracking-[-0.065em] text-white drop-shadow-[0_2px_20px_rgba(15,23,42,0.8)] md:text-[68px] lg:text-[82px]">
                Innovando por la{' '}
                <span className="bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">salud de los niÃ±os</span>{' '}
                del PerÃº
              </h1>
              <p className="mt-6 max-w-3xl text-[15px] leading-7 font-medium text-slate-300 md:text-[17px]">
                Co-creamos soluciones innovadoras, viables y con potencial de implementaciÃ³n real frente a desafÃ­os prioritarios del sistema de salud pediÃ¡trico peruano.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <motion.a href="#interes" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="innovation-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.4)] md:px-8 md:py-4">
                  Manifestar interés
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.a>
                <motion.a href="#desafios" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.07] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-indigo-400/60 hover:bg-white/12 md:px-8 md:py-4">
                  Ver desafÃ­os
                </motion.a>
                <motion.a href="/docs/bases-hackathon.pdf" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-950/35 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:bg-white/10 md:px-8 md:py-4">
                  <FileText className="h-4 w-4" />
                  Ver bases del concurso
                </motion.a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-10 max-w-xl rounded-3xl border border-white/10 bg-slate-950/35 p-5 shadow-xl backdrop-blur-xl">
              <div className="flex gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-indigo-300" />
                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-indigo-200 uppercase">Acerca del evento</p>
                  <p className="mt-2 text-sm leading-6 text-white/75">Espacio intensivo, hÃ­brido y multidisciplinario para co-crear soluciones innovadoras frente a desafÃ­os prioritarios de la salud pediÃ¡trica peruana.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}


