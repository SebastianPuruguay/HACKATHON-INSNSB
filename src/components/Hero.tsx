import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'



export function Hero() {
  return (
    <section id="inicio" className="px-2 pt-2 sm:px-4 sm:pt-4">
      <div className="mx-auto max-w-[1460px] rounded-[52px] bg-[#dfe3e8] p-2 shadow-[0_35px_100px_-35px_rgba(15,23,42,0.22)] sm:p-3">
        <div className="relative flex min-h-[760px] w-full max-w-[1400px] mx-auto flex-col overflow-hidden rounded-[44px] border border-white/30 bg-[#cfd4dc] shadow-[0_30px_80px_-25px_rgba(15,23,42,0.28)]">
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
            <video autoPlay loop muted playsInline className="h-full w-full scale-105 object-cover transition-transform duration-1000">
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
                type="video/mp4"
              />
            </video>


            <motion.div
              className="absolute -inset-[35%] opacity-55 blur-[75px]"
              style={{
                background:
                  'conic-gradient(from 120deg at 50% 50%, rgba(37,99,235,.55), rgba(79,70,229,.35), rgba(147,51,234,.5), rgba(59,130,246,.45), rgba(37,99,235,.55))',
              }}
              animate={{ rotate: [0, 18, 0], scale: [1, 1.08, 1], x: ['-3%', '3%', '-3%'] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -top-28 -left-24 h-96 w-96 rounded-full bg-blue-500/35 blur-[100px]"
              animate={{ x: [0, 60, 0], y: [0, 35, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -right-24 -bottom-24 h-[28rem] w-[28rem] rounded-full bg-violet-500/30 blur-[110px]"
              animate={{ x: [0, -55, 0], y: [0, -30, 0], scale: [1, 1.18, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute top-[-20%] left-[68%] h-[120%] w-20 rotate-[22deg] bg-gradient-to-b from-transparent via-white/30 to-transparent blur-2xl"
              animate={{ x: [-100, 90, -100], opacity: [0.08, 0.28, 0.08] }}
              transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="circuit-pattern absolute inset-0 opacity-25" />
            <div className="dot-grid absolute top-[14%] right-[7%] h-40 w-40 opacity-35 [mask-image:radial-gradient(circle,black,transparent_70%)]" />
            <div className="soft-grid absolute inset-0 opacity-[0.12] mix-blend-screen" />
            {[12, 28, 46, 64, 82].map((left, index) => (
              <motion.span
                key={left}
                className="absolute h-1.5 w-1.5 rounded-full bg-indigo-600/45 shadow-[0_0_12px_rgba(79,70,229,0.6)]"
                style={{ left: `${left}%`, top: `${18 + (index % 3) * 24}%` }}
                animate={{ y: [0, -16, 0], opacity: [0.25, 0.75, 0.25] }}
                transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
              />
            ))}
          </div>



        

          <div className="relative z-20 flex flex-1 flex-col items-start justify-center px-7 pt-16 pb-12 md:px-16 md:pt-20 lg:justify-start lg:pb-52">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="max-w-5xl"
            >
              <h1 className="mt-7 max-w-5xl font-display text-[46px] leading-[0.92] font-bold tracking-[-0.065em] text-[#071a38] drop-shadow-[0_2px_12px_rgba(255,255,255,0.4)] md:text-[68px] lg:text-[82px]">
                Innovando por la{' '}
                <span className="bg-gradient-to-r from-blue-700 via-indigo-700 to-violet-700 bg-clip-text text-transparent">
                  salud de los niños
                </span>{' '}
                del Perú
              </h1>
              <p className="mt-6 max-w-3xl text-[15px] leading-7 font-medium text-slate-700 drop-shadow-[0_1px_8px_rgba(255,255,255,0.6)] md:text-[17px]">
                Un encuentro que conecta salud, tecnología, datos, inteligencia artificial,
                innovación clínica y mejora administrativa para resolver desafíos reales de
                la salud pediátrica.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <motion.button
                  type="button"
                  onClick={() => document.querySelector('#registro')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="innovation-gradient group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.4)] md:px-8 md:py-4"
                >
                  Inscribirme al evento
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.a
                  href="#retos"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center rounded-full border border-slate-400/50 bg-white/35 px-7 py-3.5 text-sm font-semibold text-[#0a1b33] shadow-sm backdrop-blur-xl transition-all hover:border-indigo-400/60 hover:bg-white/55 md:px-8 md:py-4"
                >
                  Ver retos
                </motion.a>
              </div>
            </motion.div>
          </div>


        </div>
      </div>
    </section>
  )
}
