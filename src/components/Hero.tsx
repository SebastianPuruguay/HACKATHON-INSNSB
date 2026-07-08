import { CalendarDays, FileText, MapPin, MonitorSmartphone, UsersRound } from 'lucide-react'
import fallbackEventBanner from '../assets/HACKATONFINAL.png'

const eventBanner =
  'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/HACKATONFINAL.png'

const quickInfo = [
  {
    label: 'Fechas principales',
    value: 'Convocatoria hasta el 24 de julio. Hackatón del 3 al 21 de agosto.',
    icon: CalendarDays,
  },
  {
    label: 'Modalidad',
    value: 'Híbrida: sesiones virtuales y actividades presenciales clave.',
    icon: MonitorSmartphone,
  },
  {
    label: 'Sedes y aliados',
    value: 'INSN San Borja como sede base, con espacios y soporte de ESAN y PUCP.',
    icon: MapPin,
  },
  {
    label: 'Postulación',
    value: 'Puedes inscribirte solo o en grupo. Si vas solo, se te asignará un equipo.',
    icon: UsersRound,
  },
]

export function Hero() {
  return (
    <section id="inicio" className="px-4 pt-4 pb-10 sm:px-6 sm:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[34px] border border-white/10 bg-[#0e0931] shadow-[0_30px_100px_rgba(236,0,140,0.2)]">
          <img
            src={eventBanner}
            alt="Hackatón Niño San Borja"
            loading="eager"
            className="block aspect-[5/2] w-full object-cover object-center"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = fallbackEventBanner
            }}
          />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickInfo.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.label}
                className="rounded-[24px] border border-white/10 bg-[#0e0931]/82 p-4 text-white shadow-[0_16px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl"
              >
                <div className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-[0.15em] text-[#f58220] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-200">{item.value}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href="/docs/bases-hackathon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f58220]/35 bg-[#f58220] px-7 py-3.5 text-sm font-bold text-[#230443] shadow-[0_16px_38px_rgba(245,130,32,0.28)] transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_18px_42px_rgba(255,255,255,0.16)]"
          >
            <FileText className="h-4 w-4" />
            Ver bases del concurso
          </a>
        </div>
      </div>
    </section>
  )
}
