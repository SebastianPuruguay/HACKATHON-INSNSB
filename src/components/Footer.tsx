import logoHorizontalInsnsb from '../assets/logoinsnsb.png'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Retos', href: '#retos' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Inscripción', href: '#registro' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#020617]">
      <div className="section-shell py-12">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <a href="#inicio" className="inline-flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <span className="flex shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <img
                  src={logoHorizontalInsnsb}
                  alt="Logo del Instituto Nacional de Salud del Niño San Borja"
                  className="h-10 w-auto object-contain md:h-12"
                />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                Hackathon Pediátrica INSN-SB
              </span>
            </a>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
              Innovación, tecnología y colaboración para mejorar la salud de los niños del
              Perú.
            </p>
          </div>
          <div className="lg:text-right">
            <div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="mailto:innovacion@insnsb.gob.pe"
              className="mt-5 inline-block text-sm font-semibold text-indigo-300 transition-colors hover:text-violet-300"
            >
              innovacion@insnsb.gob.pe
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-white/[0.06] pt-6 text-xs text-slate-500">
          © 2026 Instituto Nacional de Salud del Niño San Borja
        </div>
      </div>
    </footer>
  )
}
