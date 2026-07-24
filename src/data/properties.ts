import type { Property } from '@/lib/types';

const IMG = '/images/propiedades';

/**
 * Inventario V1 (datos estáticos). En V2 cada objeto de esta lista
 * se crea, edita y elimina desde Decap CMS sin tocar el código.
 */
export const PROPERTIES: Property[] = [
  {
    id: 'ald-001',
    slug: 'apartamento-venta-chapinero-alto',
    titulo: 'Apartamento con vista a los cerros en Chapinero Alto',
    descripcion: [
      'Apartamento exterior en un sexto piso con vista despejada a los cerros orientales. La sala y el comedor reciben luz natural durante toda la mañana y la cocina abierta se integra con la zona social sin restarle espacio a la circulación.',
      'Tiene dos habitaciones, cada una con closet, y dos baños completos con acabados recientes. El edificio cuenta con portería 24 horas, salón comunal y una terraza compartida en el último piso.',
      'La ubicación permite caminar a la Zona G y a la carrera séptima, con supermercados, cafés y rutas de TransMilenio a pocos minutos.',
    ],
    tipo: 'Apartamento',
    estado: 'Venta',
    precio: 620000000,
    barrio: 'Chapinero Alto',
    ciudad: 'Bogotá',
    habitaciones: 2,
    banos: 2,
    area: 78,
    parqueaderos: 1,
    estrato: 4,
    administracion: 480000,
    imagenes: [
      { src: `${IMG}/apartamento-chapinero-alto-exterior.webp`, alt: 'Fachada del edificio de apartamentos en Chapinero Alto, Bogotá' },
      { src: `${IMG}/apartamento-chapinero-alto-sala.webp`, alt: 'Sala del apartamento con ventanal y vista a la ciudad' },
    ],
    destacado: true,
  },
  {
    id: 'ald-002',
    slug: 'casa-venta-cedritos',
    titulo: 'Casa familiar de dos pisos con jardín en Cedritos',
    descripcion: [
      'Casa de dos pisos en una calle residencial y tranquila de Cedritos. El primer piso reúne sala, comedor y cocina en una planta abierta que sale al jardín posterior, un espacio útil para niños, mascotas o reuniones familiares.',
      'En el segundo piso hay tres habitaciones, la principal con baño privado y walk in closet, más un estudio que sirve como oficina en casa. La casa conserva pisos de madera en buen estado y tiene gas natural.',
      'El sector queda cerca de la calle 140 y de la autopista norte, con colegios, parques y centros comerciales en un radio de diez minutos.',
    ],
    tipo: 'Casa',
    estado: 'Venta',
    precio: 980000000,
    barrio: 'Cedritos',
    ciudad: 'Bogotá',
    habitaciones: 3,
    banos: 3,
    area: 160,
    parqueaderos: 2,
    estrato: 4,
    imagenes: [
      { src: `${IMG}/casa-cedritos-exterior.webp`, alt: 'Fachada de casa de ladrillo con jardín frontal en Cedritos, Bogotá' },
      { src: `${IMG}/casa-cedritos-comedor.webp`, alt: 'Comedor de la casa con mesa de madera y muro de ladrillo' },
    ],
    destacado: true,
  },
  {
    id: 'ald-003',
    slug: 'apartamento-arriendo-usaquen',
    titulo: 'Apartamento moderno en arriendo a dos cuadras de Usaquén',
    descripcion: [
      'Apartamento de una habitación en un edificio reciente, ideal para una persona o una pareja que quiera vivir cerca del centro de Usaquén sin el ruido de la zona rosa. La cocina abierta tiene barra para dos puestos y nevera incluida.',
      'El baño es amplio, con ducha de vidrio, y la habitación tiene closet de piso a techo. El canon incluye el parqueadero cubierto y el edificio ofrece gimnasio básico y terraza con vista al oriente.',
      'Disponible para estreno inmediato. Se requiere codeudor o póliza de arrendamiento, trámite que acompañamos de principio a fin.',
    ],
    tipo: 'Apartamento',
    estado: 'Arriendo',
    precio: 4200000,
    barrio: 'Usaquén',
    ciudad: 'Bogotá',
    habitaciones: 1,
    banos: 1,
    area: 56,
    parqueaderos: 1,
    estrato: 4,
    administracion: 350000,
    imagenes: [
      { src: `${IMG}/apartamento-usaquen-exterior.webp`, alt: 'Edificio moderno de apartamentos en Usaquén, Bogotá' },
      { src: `${IMG}/apartamento-usaquen-cocina.webp`, alt: 'Cocina abierta del apartamento con barra de madera' },
    ],
    destacado: true,
  },
  {
    id: 'ald-004',
    slug: 'apartamento-venta-suba-la-gaitana',
    titulo: 'Apartamento en conjunto con zonas comunes en La Gaitana, Suba',
    descripcion: [
      'Apartamento de tres habitaciones en un conjunto cerrado con vigilancia, cancha de baloncesto, parque infantil y senderos internos. Es una opción práctica para familias que buscan más metros por su presupuesto sin salir de la ciudad.',
      'La zona social es iluminada y conecta con un balcón útil para tendedero cubierto. La cocina es cerrada, con espacio para lavadora, y el baño social fue remodelado hace dos años.',
      'El conjunto queda sobre el eje de la avenida Suba, cerca del portal de TransMilenio y de dos grandes superficies de mercado.',
    ],
    tipo: 'Apartamento',
    estado: 'Venta',
    precio: 420000000,
    barrio: 'La Gaitana, Suba',
    ciudad: 'Bogotá',
    habitaciones: 3,
    banos: 2,
    area: 74,
    parqueaderos: 1,
    estrato: 3,
    administracion: 290000,
    imagenes: [
      { src: `${IMG}/apartamento-suba-exterior.webp`, alt: 'Torres del conjunto residencial con zona verde en Suba, Bogotá' },
      { src: `${IMG}/apartamento-suba-habitacion.webp`, alt: 'Habitación principal del apartamento con ventana amplia' },
    ],
    destacado: true,
  },
  {
    id: 'ald-005',
    slug: 'oficina-arriendo-chico',
    titulo: 'Oficina de 120 m² en arriendo sobre la carrera 11, Chicó',
    descripcion: [
      'Piso de oficina en planta libre con ventanales de piso a techo hacia la carrera 11. La distribución actual tiene dos oficinas cerradas, sala de juntas y zona abierta para diez puestos de trabajo, fácil de adaptar a otra operación.',
      'El edificio es empresarial, con lobby atendido, dos ascensores y cuatro parqueaderos asignados. El canon incluye la administración y el aire acondicionado central en horario laboral.',
      'A pocos minutos del parque de la 93 y de la avenida Chile, en uno de los sectores corporativos mejor conectados del norte de Bogotá.',
    ],
    tipo: 'Oficina',
    estado: 'Arriendo',
    precio: 9500000,
    barrio: 'Chicó',
    ciudad: 'Bogotá',
    habitaciones: 0,
    banos: 2,
    area: 120,
    parqueaderos: 4,
    estrato: 5,
    imagenes: [
      { src: `${IMG}/oficina-chico-exterior.webp`, alt: 'Edificio empresarial de vidrio y ladrillo en Chicó, Bogotá' },
      { src: `${IMG}/oficina-chico-interior.webp`, alt: 'Planta libre de la oficina con ventanales y vista a la ciudad' },
    ],
    destacado: false,
  },
  {
    id: 'ald-006',
    slug: 'casa-venta-engativa-bonanza',
    titulo: 'Casa esquinera con terraza en Bonanza, Engativá',
    descripcion: [
      'Casa esquinera de dos pisos a pocas cuadras de nuestra oficina, en el corazón de Engativá. Tiene sala con chimenea, comedor independiente y una terraza posterior techada que funciona como segunda zona social.',
      'Son cuatro habitaciones, tres baños y un garaje cubierto para dos vehículos. El segundo piso conserva los pisos originales de madera y tiene una alcoba adicional que hoy se usa como cuarto de ropas.',
      'Es una casa sólida, lista para habitar o para remodelar a gusto propio, en un barrio con colegios, iglesia, mercado de barrio y salida rápida a la calle 80.',
    ],
    tipo: 'Casa',
    estado: 'Venta',
    precio: 690000000,
    barrio: 'Bonanza, Engativá',
    ciudad: 'Bogotá',
    habitaciones: 4,
    banos: 3,
    area: 145,
    parqueaderos: 2,
    estrato: 3,
    imagenes: [
      { src: `${IMG}/casa-engativa-exterior.webp`, alt: 'Fachada de casa esquinera de ladrillo en Engativá, Bogotá' },
      { src: `${IMG}/casa-engativa-sala.webp`, alt: 'Sala de la casa con muro de chimenea en ladrillo' },
    ],
    destacado: true,
  },
  {
    id: 'ald-007',
    slug: 'apartamento-arriendo-teusaquillo',
    titulo: 'Apartamento clásico en arriendo cerca al Parkway, Teusaquillo',
    descripcion: [
      'Apartamento en un edificio clásico de Teusaquillo, con pisos de parqué, ventanales hacia los árboles de la cuadra y una distribución generosa que ya no se construye: sala y comedor separados, cocina amplia y dos habitaciones con buena luz.',
      'Incluye estudio, cuarto útil y un parqueadero fijo en el sótano. El edificio tiene portería diurna y una comunidad pequeña y tranquila.',
      'A tres cuadras del Parkway y del canal de la carrera 30, con cafés, teatros y universidades a distancia caminable. Canon negociable para contratos de largo plazo.',
    ],
    tipo: 'Apartamento',
    estado: 'Arriendo',
    precio: 4800000,
    barrio: 'Teusaquillo',
    ciudad: 'Bogotá',
    habitaciones: 2,
    banos: 2,
    area: 95,
    parqueaderos: 1,
    estrato: 3,
    administracion: 320000,
    imagenes: [
      { src: `${IMG}/apartamento-teusaquillo-exterior.webp`, alt: 'Edificio clásico de ladrillo en Teusaquillo, Bogotá' },
      { src: `${IMG}/apartamento-teusaquillo-sala.webp`, alt: 'Sala del apartamento con piso de parqué y vista a los árboles' },
    ],
    destacado: true,
  },
  {
    id: 'ald-008',
    slug: 'apartamento-venta-colina-campestre',
    titulo: 'Apartamento dúplex con terraza en Colina Campestre',
    descripcion: [
      'Dúplex en una etapa reciente de Colina Campestre, con doble altura en la zona social y una terraza privada orientada al poniente para ver el atardecer sobre la ciudad.',
      'El primer nivel reúne sala, comedor y cocina abierta con mesón de cuarzo. Arriba hay dos habitaciones, cada una con su baño, y una zona de estar que puede convertirse en estudio o tercera alcoba.',
      'El conjunto ofrece gimnasio, coworking, salón social y senderos internos. Queda junto al centro comercial Colina y con salida directa a la autopista norte.',
    ],
    tipo: 'Apartamento',
    estado: 'Venta',
    precio: 780000000,
    barrio: 'Colina Campestre',
    ciudad: 'Bogotá',
    habitaciones: 2,
    banos: 3,
    area: 110,
    parqueaderos: 2,
    estrato: 5,
    administracion: 620000,
    imagenes: [
      { src: `${IMG}/apartamento-colina-campestre-exterior.webp`, alt: 'Edificio moderno de apartamentos en Colina Campestre, Bogotá' },
      { src: `${IMG}/apartamento-colina-campestre-sala-comedor.webp`, alt: 'Sala comedor del dúplex con ventanal de piso a techo' },
    ],
    destacado: false,
  },
];

export const BARRIOS = [...new Set(PROPERTIES.map((p) => p.barrio))].sort();

export function getProperty(slug: string) {
  return PROPERTIES.find((p) => p.slug === slug);
}

export function relatedProperties(actual: Property, cantidad = 3) {
  return PROPERTIES.filter(
    (p) => p.id !== actual.id && (p.tipo === actual.tipo || p.estado === actual.estado),
  ).slice(0, cantidad);
}
