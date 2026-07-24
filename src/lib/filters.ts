import type { Property, PropertyFilters } from './types';

export function filterProperties(
  inmuebles: Property[],
  filtros: PropertyFilters,
): Property[] {
  return inmuebles.filter((p) => {
    if (filtros.estado && filtros.estado !== 'Todos' && p.estado !== filtros.estado) {
      return false;
    }
    if (filtros.tipos && filtros.tipos.length > 0 && !filtros.tipos.includes(p.tipo)) {
      return false;
    }
    if (filtros.precioMin != null && p.precio < filtros.precioMin) return false;
    if (filtros.precioMax != null && p.precio > filtros.precioMax) return false;
    if (filtros.habitaciones != null && p.habitaciones < filtros.habitaciones) return false;
    if (filtros.banos != null && p.banos < filtros.banos) return false;
    if (
      filtros.barrio &&
      filtros.barrio !== 'Todos' &&
      p.barrio.toLowerCase() !== filtros.barrio.toLowerCase()
    ) {
      return false;
    }
    return true;
  });
}
