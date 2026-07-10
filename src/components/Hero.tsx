import { CalendarDays, FileText, MapPin, MonitorSmartphone, UsersRound } from 'lucide-react'
import fallbackEventBanner from '../assets/HACKATONFINAL.png'

const eventBanner =
  'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/HACKATONFINAL.png'

const quickInfo = [
  {
    label: 'Fechas clave',
    value: 'Exploración del 5 al 12 de agosto. Hackatón central del 13 al 15.',
    icon: CalendarDays,
  },
  {
    label: 'Evento central',
    value: '13 virtual. 14 y 15 presencial.',
    icon: MonitorSmartphone,
  },
  {
    label: 'Sedes',
    value: 'INSN San Borja, ESAN y PUCP.',
    icon: MapPin,
  },
  {
    label: 'Postulación',
    value: 'De 3 a 5 integrantes por equipo.',
    icon: UsersRound,
  },
]

export function Hero() {
  return (
    <section id="inicio" className="px-3 pt-2 pb-8 sm:px-6 sm:pt-4 sm:pb-12">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0e0931] shadow-[0_24px_80px_rgba(236,0,140,0.18)] sm:rounded-[34px]">
          <img
            src={eventBanner}
            alt="Hackatón Niño San Borja"
            loading="eager"
            className="block aspect-[4/3] w-full object-cover object-center sm:aspect-[5/2]"
            onError={(event) => {
              event.currentTarget.onerror = null
              event.currentTarget.src = fallbackEventBanner
            }}
          />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickInfo.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.label}
                className="rounded-[22px] border border-white/10 bg-[#0e0931]/82 p-3.5 text-white shadow-[0_14px_38px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-4"
              >
                <div className="flex gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#f58220]/25 bg-[#ec008c]/10 text-[#f58220]">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.14em] text-[#f58220] uppercase">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[13px] leading-5 text-slate-200 sm:text-sm sm:leading-6">{item.value}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="/docs/bases-hackathon.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#f58220]/35 bg-[#f58220] px-6 py-3.5 text-sm font-bold text-[#230443] shadow-[0_16px_38px_rgba(245,130,32,0.28)] transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-7"
          >
            <FileText className="h-4 w-4" />
            Ver bases del concurso
          </a>
        </div>
      </div>
    </section>
  )
}
