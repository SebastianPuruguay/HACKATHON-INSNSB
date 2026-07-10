import { ArrowRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

export type LandingPageKey =
  | 'inicio'
  | 'desafios'
  | 'cronograma'
  | 'participantes'
  | 'aliados'
  | 'faq'

type NavbarProps = {
  activePage: LandingPageKey
  onNavigate: (page: LandingPageKey) => void
}

const links: Array<{ label: string; page: LandingPageKey }> = [
  { label: 'Inicio', page: 'inicio' },
  { label: 'Desafíos', page: 'desafios' },
  { label: 'Cronograma', page: 'cronograma' },
  { label: 'Participantes', page: 'participantes' },
  { label: 'Aliados', page: 'aliados' },
  { label: 'FAQ', page: 'faq' },
]

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (page: LandingPageKey) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-3 pt-3 md:px-8 md:pt-4" aria-label="Navegación principal">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-end lg:justify-center">
        <div className="flex w-full items-center justify-between gap-2 rounded-full border border-white/15 bg-[#0e0931]/88 px-2.5 py-2 text-white shadow-[0_18px_55px_rgba(35,4,67,0.42)] backdrop-blur-2xl sm:w-auto sm:px-4">
          <div className="hidden items-center justify-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive = activePage === link.page
              return (
                <button
                  key={link.page}
                  type="button"
                  onClick={() => handleNavigate(link.page)}
                  className={`rounded-full px-4 py-2 text-[12px] font-semibold transition-all ${
                    isActive
                      ? 'bg-white text-[#230443] shadow-[0_10px_26px_rgba(236,0,140,0.18)]'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </div>

          <a
            href="https://facilita.gob.pe/t/55544"
            className="innovation-gradient group flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(236,0,140,0.28)] transition-all hover:brightness-110 sm:gap-2 sm:px-5 sm:text-[13px]"
          >
            Inscripción
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#ec008c]/10 text-white backdrop-blur-xl lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="absolute top-[66px] right-3 left-3 mx-auto max-w-7xl rounded-3xl border border-white/15 bg-[#0e0931]/96 p-3 text-white shadow-2xl backdrop-blur-2xl lg:hidden">
          {links.map((link) => {
            const isActive = activePage === link.page
            return (
              <button
                key={link.page}
                type="button"
                onClick={() => handleNavigate(link.page)}
                className={`block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                  isActive ? 'bg-white text-[#230443]' : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      )}
    </nav>
  )
}
