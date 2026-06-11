import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'
import logoSymbolInsnsb from '../assets/logoinsnsb2.png'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Retos', href: '#retos' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Inscripción', href: '#registro' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="relative z-30 px-5 pt-5 md:px-10 md:pt-7" aria-label="Navegación principal">
      <div className="flex items-center justify-between rounded-full border border-white/15 bg-slate-950/10 px-4 py-3 text-white shadow-[0_14px_40px_rgba(15,23,42,0.16)] backdrop-blur-2xl">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/90 shadow-sm">
            <img
              src={logoSymbolInsnsb}
              alt="Logo del Instituto Nacional de Salud del Niño San Borja"
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="hidden text-left leading-tight sm:block">
            <span className="block font-display text-sm font-semibold">Hackathon Pediátrica</span>
            <span className="block text-xs text-white/60">INSNSB</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#registro"
            className="innovation-gradient group hidden items-center gap-2 rounded-full px-5 py-2 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all hover:brightness-110 sm:flex"
          >
            Inscribirme
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/10 text-white backdrop-blur-xl lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-[84px] right-5 left-5 rounded-3xl border border-white/15 bg-slate-950/70 p-3 text-white shadow-2xl backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
