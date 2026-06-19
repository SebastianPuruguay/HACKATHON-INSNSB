import { FileText, Mail, MapPin, Phone } from 'lucide-react'
import logoHorizontalInsnsb from '../assets/logoinsnsb.png'

const footerLinks = [
  { label: 'Acerca', href: '#acerca' },
  { label: 'DesafÃ­os', href: '#desafios' },
  { label: 'Participantes', href: '#participantes' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'EvaluaciÃ³n', href: '#evaluacion' },
]

// Replace social media placeholders with official INSNSB links when confirmed.
const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'YouTube', href: '#' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#020617]">
      {/* Future section: event recap after the hackathon */}
      <span id="recap" className="absolute top-0" />
      <div className="section-shell py-14">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr_0.8fr]">
          <div>
            <a href="#inicio" className="inline-flex flex-col items-start gap-4">
              <span className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><img src={logoHorizontalInsnsb} alt="Logo del Instituto Nacional de Salud del NiÃ±o San Borja" className="h-10 w-auto object-contain md:h-12" /></span>
              <span className="font-display text-lg font-semibold text-white">HackatÃ³n en Salud PediÃ¡trica INSNSB</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">InnovaciÃ³n, co-creaciÃ³n y colaboraciÃ³n multidisciplinaria para abordar desafÃ­os prioritarios de la salud pediÃ¡trica peruana.</p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Contacto institucional</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-indigo-300" />Av. AgustÃ­n de la Rosa Toro 1399, San Borja, Lima, PerÃº</p>
              <p className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-indigo-300" />Central: 2300600 Â· Informes: anexo 1000</p>
              <p className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-indigo-300" />Correo del evento: Por confirmar</p>
              <a href="/docs/bases-hackathon.pdf" target="_blank" rel="noopener noreferrer" className="flex gap-3 font-semibold text-indigo-300 transition-colors hover:text-violet-300"><FileText className="h-4 w-4 shrink-0" />Ver bases del concurso</a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Explorar</h3>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3">{footerLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">{link.label}</a>)}</div>
            <h3 className="mt-7 font-display text-sm font-semibold text-white">Redes oficiales</h3>
            <div className="mt-4 flex flex-wrap gap-3">{socialLinks.map((link) => <a key={link.label} href={link.href} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400 transition-colors hover:text-white">{link.label}</a>)}</div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/[0.06] pt-6 text-xs text-slate-500">Â© 2026 Instituto Nacional de Salud del NiÃ±o San Borja</div>
      </div>
    </footer>
  )
}


