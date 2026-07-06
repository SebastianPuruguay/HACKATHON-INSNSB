import fallbackEventBanner from '../assets/HACKATONFINAL.png'

const eventBanner =
  'https://portal.insnsb.gob.pe/docencia/wp-content/uploads/HACKATONFINAL.png'

export function Hero() {
  return (
    <section id="inicio" className="px-4 pt-4 pb-10 sm:px-6 sm:pb-14">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-white/10 bg-[#0e0931] shadow-[0_30px_100px_rgba(236,0,140,0.2)]">
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
    </section>
  )
}
