/**
 * Datos reales del negocio (fuente: ficha de Google Maps y sitio web vigente).
 * En V2 estos campos se administran desde Decap CMS.
 */
export const BUSINESS = {
  nombre: 'Aldia Inmobiliaria SAS',
  nombreCorto: 'Aldia Inmobiliaria',
  eslogan: 'Venta y arriendo de inmuebles en Bogotá',
  direccion: 'Cra. 73a #76-28, Engativá, Bogotá, Cundinamarca',
  ciudad: 'Bogotá',
  telefonos: ['310 688 2798', '320 826 0339'],
  whatsapp: '573106882798',
  whatsappVisible: '310 688 2798',
  email: 'dcardenas@aldiainmobiliaria.com.co',
  horario: 'Lunes a Viernes, 8:00 a. m. a 6:00 p. m.',
  horarioCorto: 'Lun a Vie · 8:00 a 18:00',
  calificacionGoogle: 5.0,
  resenasGoogle: 46,
  anosExperiencia: 10,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Cra.+73a+%2376-28%2C+Engativ%C3%A1%2C+Bogot%C3%A1',
  mapsEmbed:
    'https://www.google.com/maps?q=Cra.%2073a%20%2376-28%2C%20Engativ%C3%A1%2C%20Bogot%C3%A1%2C%20Colombia&z=16&output=embed',
  social: {
    facebook: 'https://www.facebook.com/AldiaInmobiliaria',
    x: 'https://twitter.com/AldiaInmob',
  },
} as const;

export function waLink(texto: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(texto)}`;
}
