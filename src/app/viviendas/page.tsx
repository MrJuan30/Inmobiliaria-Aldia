import type { Metadata } from 'next';
import PropertiesExplorer from '@/components/properties/PropertiesExplorer';
import Reveal from '@/components/motion/Reveal';
import type { EstadoInmueble, PropertyFilters, TipoInmueble } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Viviendas en venta y arriendo en Bogotá',
  description:
    'Apartamentos, casas y oficinas en venta y arriendo en Bogotá. Filtra por barrio, precio, habitaciones y encuentra tu próximo inmueble.',
  alternates: { canonical: '/viviendas' },
};

const TIPOS_VALIDOS: TipoInmueble[] = ['Apartamento', 'Casa', 'Local', 'Oficina'];
const ESTADOS_VALIDOS: EstadoInmueble[] = ['Venta', 'Arriendo'];

export default async function ViviendasPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const q = await searchParams;

  const estadoRaw = typeof q.estado === 'string' ? q.estado : undefined;
  const estado = ESTADOS_VALIDOS.find((e) => e === estadoRaw);

  const tipoRaw = q.tipo;
  const tipos = (Array.isArray(tipoRaw) ? tipoRaw : tipoRaw ? [tipoRaw] : []).filter((t) =>
    TIPOS_VALIDOS.includes(t as TipoInmueble),
  ) as TipoInmueble[];

  const numero = (v: string | string[] | undefined) => {
    const n = Number(typeof v === 'string' ? v : '');
    return Number.isFinite(n) && n > 0 ? n : undefined;
  };

  const inicial: PropertyFilters = {
    estado,
    tipos,
    precioMin: numero(q.precioMin),
    precioMax: numero(q.precioMax),
    habitaciones: numero(q.habitaciones),
    banos: numero(q.banos),
    barrio: typeof q.barrio === 'string' ? q.barrio : undefined,
  };

  return (
    <>
      <header className="mx-auto max-w-[1280px] px-6 pb-12 pt-28 md:px-8 md:pt-36">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-600">
            ( Inmuebles )
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold text-ink-900 md:text-5xl">
            Viviendas en Bogotá
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-7 text-ink-500">
            Venta y arriendo de apartamentos, casas y oficinas. Todos los
            inmuebles son visitados y verificados por nuestro equipo.
          </p>
        </Reveal>
      </header>

      <PropertiesExplorer inicial={inicial} />
    </>
  );
}
