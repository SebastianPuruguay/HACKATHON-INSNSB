import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { challenges } from '../lib/challenges'

export function ChallengeAccordion() {
  const [openId, setOpenId] = useState<string | null>(challenges[0]?.id ?? null)

  return (
    <div className="space-y-3">
      {challenges.map((challenge, index) => {
        const isOpen = openId === challenge.id
        const Icon = challenge.icon
        return (
          <article key={challenge.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur-xl transition-colors hover:border-[#ec008c]/45">
            <button type="button" onClick={() => setOpenId(isOpen ? null : challenge.id)} aria-expanded={isOpen} className="flex w-full items-center gap-4 p-5 text-left sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ec008c]/25 to-[#f58220]/25 text-white"><Icon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="mb-1 block text-xs font-semibold tracking-[0.14em] text-[#a7a302] uppercase">Desafío {index + 1}</span><span className="font-display text-base font-semibold leading-6 text-white sm:text-lg">{challenge.title}</span></span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#ec008c] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}><p className="border-t border-white/[0.08] px-5 py-5 text-sm leading-7 text-slate-300 sm:px-6">{challenge.description}</p></motion.div>}
            </AnimatePresence>
          </article>
        )
      })}
    </div>
  )
}

