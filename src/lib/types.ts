export type TipoInmueble = 'Apartamento' | 'Casa' | 'Local' | 'Oficina';
export type EstadoInmueble = 'Venta' | 'Arriendo';

export interface ImagenInmueble {
  src: string;
  alt: string;
}

/**
 * Modelo de inmueble. Los campos coinciden con las colecciones
 * que Decap CMS administrará en la V2 (properties, images,
 * descriptions, prices, neighborhoods, types, status).
 */
export interface Property {
  id: string;
  slug: string;
  titulo: string;
  descripcion: string[];
  tipo: TipoInmueble;
  estado: EstadoInmueble;
  /** Precio en pesos colombianos. En arriendos es el canon mensual. */
  precio: number;
  barrio: string;
  ciudad: string;
  habitaciones: number;
  banos: number;
  /** Área construida en metros cuadrados. */
  area: number;
  parqueaderos?: number;
  estrato?: number;
  /** Administración mensual en COP, si aplica. */
  administracion?: number;
  imagenes: ImagenInmueble[];
  destacado: boolean;
}

export interface PropertyFilters {
  estado?: EstadoInmueble | 'Todos';
  tipos?: TipoInmueble[];
  precioMin?: number;
  precioMax?: number;
  habitaciones?: number;
  banos?: number;
  barrio?: string;
}
