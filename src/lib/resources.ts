const uploadsUrl =
  'https://portal.insnsb.gob.pe/investigacion/wp-content/uploads'

export const resourceLinks = {
  bases: `${uploadsUrl}/bases-hackaton-nino-san-borja-2026.pdf`,
  challenges: {
    'puente-18': `${uploadsUrl}/desafio-01-puente-18.pdf`,
    'cardio-alerta': `${uploadsUrl}/desafio-02-cardio-alerta-peru.pdf`,
    'ruta-hematologica': `${uploadsUrl}/desafio-03-ruta-hematologica.pdf`,
    neuroalianza: `${uploadsUrl}/desafio-04-neurodesarrollo.pdf`,
    'crecer-mejor': `${uploadsUrl}/desafio-05-crecer-mejor.pdf`,
    sanarte: `${uploadsUrl}/desafio-06-sanarte.pdf`,
  },
} as const
