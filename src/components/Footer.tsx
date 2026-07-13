import { FileText, Mail, MapPin, Phone } from 'lucide-react'
import logoHorizontalInsnsb from '../assets/logoinsnsb-blanco.png'
import { resourceLinks } from '../lib/resources'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Desafíos', href: '#desafios' },
  { label: 'Cronograma', href: '#cronograma' },
  { label: 'Participantes', href: '#participantes' },
  { label: 'Aliados', href: '#aliados' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/insnsanborja/' },
  { label: 'Instagram', href: 'https://www.instagram.com/insnsanborja/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@INSNSanBorjaOficial' },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0e0931]">
      <div className="section-shell py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.8fr] lg:gap-12">
          <div>
            <a href="#inicio" className="inline-flex flex-col items-start gap-4">
              <span className="flex items-center justify-center rounded-2xl   p-3 shadow-sm">
                <img src={logoHorizontalInsnsb} alt="Logo del Instituto Nacional de Salud del Niño San Borja" className="h-13 w-auto object-contain sm:h-16" />
              </span>
              <span className="font-display text-lg font-semibold text-white">Hackatón Niño San Borja</span>
            </a>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Un espacio de innovación colaborativa que, con el soporte de la Secretaría de Gobierno y Transformación Digital de la Presidencia del Consejo de Ministros (PCM) y en colaboración con la PUCP y ESAN.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Contacto</h3>
            <div className="mt-5 space-y-3 text-sm text-slate-400">
              <p className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f58220]" />Av. Agustín de la Rosa Toro 1399, San Borja, Lima, Perú</p>
              <p className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[#f58220]" />Central: 2300600 · Informes: anexo 2042</p>
              <p className="flex gap-3 break-all sm:break-normal"><Mail className="h-4 w-4 shrink-0 text-[#f58220]" />lab.innovacion.t@insnsb.gob.pe</p>
              <a href={resourceLinks.bases} target="_blank" rel="noopener noreferrer" className="flex gap-3 font-semibold text-[#f58220] transition-colors hover:text-[#ec008c]"><FileText className="h-4 w-4 shrink-0" />Ver bases del concurso</a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Explorar</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
              {footerLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
            <h3 className="mt-7 font-display text-sm font-semibold text-white">Redes oficiales</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs text-slate-400 transition-colors hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-9 border-t border-white/[0.06] pt-6 text-xs text-slate-500">
          © 2026 Instituto Nacional de Salud del Niño San Borja
        </div>
      </div>
    </footer>
  )
}
