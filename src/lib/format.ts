const cop = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
});

/** $ 620.000.000 */
export function formatCOP(valor: number) {
  return cop.format(valor);
}

/** Precio de venta o canon mensual según el estado del inmueble. */
export function formatPrecio(precio: number, estado: 'Venta' | 'Arriendo') {
  return estado === 'Arriendo' ? `${cop.format(precio)} /mes` : cop.format(precio);
}

export function formatArea(area: number) {
  return `${area} m²`;
}
