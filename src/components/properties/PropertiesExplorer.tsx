'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { PiCaretDown, PiHouseLine, PiSlidersHorizontal } from 'react-icons/pi';
import PropertyCard from '@/components/properties/PropertyCard';
import { filterProperties } from '@/lib/filters';
import { PROPERTIES } from '@/data/properties';
import type { EstadoInmueble, PropertyFilters, TipoInmueble } from '@/lib/types';

const TIPOS: TipoInmueble[] = ['Apartamento', 'Casa', 'Local', 'Oficina'];
const ESTADOS: Array<EstadoInmueble | 'Todos'> = ['Todos', 'Venta', 'Arriendo'];

function Grupo({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line pb-6">
      <h3 className="mb-3 text-sm font-semibold text-ink-900">{titulo}</h3>
      {children}
    </div>
  );
}

function Chip({
  activo,
  onClick,
  children,
}: {
  activo: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={activo}
      className={`rounded-lg px-3 py-2 text-sm font-semibold transition-all duration-300 ease-[var(--ease)] active:scale-[0.98] ${
        activo
          ? 'bg-ink-900 text-white'
          : 'bg-surface text-ink-700 hover:bg-line'
      }`}
    >
      {children}
    </button>
  );
}

export default function PropertiesExplorer({
  inicial,
}: {
  inicial: PropertyFilters;
}) {
  const router = useRouter();
  const [estado, setEstado] = useState<EstadoInmueble | 'Todos'>(inicial.estado ?? 'Todos');
  const [tipos, setTipos] = useState<TipoInmueble[]>(inicial.tipos ?? []);
  const [precioMin, setPrecioMin] = useState(inicial.precioMin?.toString() ?? '');
  const [precioMax, setPrecioMax] = useState(inicial.precioMax?.toString() ?? '');
  const [habitaciones, setHabitaciones] = useState<number | null>(inicial.habitaciones ?? null);
  const [banos, setBanos] = useState<number | null>(inicial.banos ?? null);
  const [barrio, setBarrio] = useState(inicial.barrio ?? 'Todos');
  const [movilAbierto, setMovilAbierto] = useState(false);

  const barrios = useMemo(
    () => [...new Set(PROPERTIES.map((p) => p.barrio))].sort(),
    [],
  );

  const filtros: PropertyFilters = {
    estado,
    tipos,
    precioMin: precioMin ? Number(precioMin) : undefined,
    precioMax: precioMax ? Number(precioMax) : undefined,
    habitaciones: habitaciones ?? undefined,
    banos: banos ?? undefined,
    barrio: barrio === 'Todos' ? undefined : barrio,
  };

  const resultados = useMemo(() => filterProperties(PROPERTIES, filtros), [
    estado,
    tipos,
    precioMin,
    precioMax,
    habitaciones,
    banos,
    barrio,
  ]);

  useEffect(() => {
    const q = new URLSearchParams();
    if (estado !== 'Todos') q.set('estado', estado);
    tipos.forEach((t) => q.append('tipo', t));
    if (precioMin) q.set('precioMin', precioMin);
    if (precioMax) q.set('precioMax', precioMax);
    if (habitaciones) q.set('habitaciones', String(habitaciones));
    if (banos) q.set('banos', String(banos));
    if (barrio !== 'Todos') q.set('barrio', barrio);
    const qs = q.toString();
    router.replace(`/viviendas${qs ? `?${qs}` : ''}`, { scroll: false });
  }, [estado, tipos, precioMin, precioMax, habitaciones, banos, barrio, router]);

  const limpiar = () => {
    setEstado('Todos');
    setTipos([]);
    setPrecioMin('');
    setPrecioMax('');
    setHabitaciones(null);
    setBanos(null);
    setBarrio('Todos');
  };

  const filtrosUI = (
    <div className="space-y-6">
      <Grupo titulo="Venta o arriendo">
        <div className="flex flex-wrap gap-2">
          {ESTADOS.map((e) => (
            <Chip key={e} activo={estado === e} onClick={() => setEstado(e)}>
              {e}
            </Chip>
          ))}
        </div>
      </Grupo>

      <Grupo titulo="Tipo de inmueble">
        <div className="flex flex-wrap gap-2">
          {TIPOS.map((t) => (
            <Chip
              key={t}
              activo={tipos.includes(t)}
              onClick={() =>
                setTipos((prev) =>
                  prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
                )
              }
            >
              {t}
            </Chip>
          ))}
        </div>
      </Grupo>

      <Grupo titulo="Barrio">
        <span className="relative block">
          <select
            value={barrio}
            onChange={(e) => setBarrio(e.target.value)}
            className="w-full appearance-none rounded-lg border border-line bg-white px-3 py-2 pr-9 text-base text-ink-900 transition-colors hover:border-ink-300 focus:border-brand-500 focus:outline-none"
          >
            <option>Todos</option>
            {barrios.map((b) => (
              <option key={b}>{b}</option>
            ))}
          </select>
          <PiCaretDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-500"
          />
        </span>
      </Grupo>

      <Grupo titulo="Precio">
        <div className="grid grid-cols-2 gap-3">
          <label>
            <span className="mb-1.5 block text-sm text-ink-500">Mínimo</span>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              placeholder="$ 0"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
              className="tnum w-full rounded-lg border border-line bg-white px-3 py-2 text-base text-ink-900 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none"
            />
          </label>
          <label>
            <span className="mb-1.5 block text-sm text-ink-500">Máximo</span>
            <input
              type="number"
              min={0}
              inputMode="numeric"
              placeholder="Sin tope"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className="tnum w-full rounded-lg border border-line bg-white px-3 py-2 text-base text-ink-900 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none"
            />
          </label>
        </div>
      </Grupo>

      <Grupo titulo="Habitaciones">
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4].map((n) => (
            <Chip
              key={n}
              activo={habitaciones === n}
              onClick={() => setHabitaciones(habitaciones === n ? null : n)}
            >
              {n}+
            </Chip>
          ))}
        </div>
      </Grupo>

      <div>
        <h3 className="mb-3 text-sm font-semibold text-ink-900">Baños</h3>
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3].map((n) => (
            <Chip
              key={n}
              activo={banos === n}
              onClick={() => setBanos(banos === n ? null : n)}
            >
              {n}+
            </Chip>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={limpiar}
        className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
      >
        Limpiar filtros
      </button>
    </div>
  );

  return (
    <div className="mx-auto max-w-[1280px] px-6 pb-24 md:px-8 md:pb-32">
      <div className="mb-8 lg:hidden">
        <button
          type="button"
          onClick={() => setMovilAbierto(!movilAbierto)}
          aria-expanded={movilAbierto}
          className="inline-flex items-center gap-2 rounded-lg border border-line bg-white px-3 py-2 text-sm font-semibold text-ink-900"
        >
          <PiSlidersHorizontal size={18} />
          Filtros
        </button>
        <AnimatePresence initial={false}>
          {movilAbierto && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="mt-4 rounded-2xl border border-line bg-white p-6"
            >
              {filtrosUI}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <aside className="hidden self-start lg:sticky lg:top-28 lg:block">{filtrosUI}</aside>

        <div>
          <p className="tnum text-sm text-ink-500" role="status">
            {resultados.length} {resultados.length === 1 ? 'inmueble' : 'inmuebles'}
          </p>

          {resultados.length > 0 ? (
            <div className="mt-6 grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {resultados.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          ) : (
            <div className="mt-16 flex flex-col items-center rounded-2xl bg-surface px-8 py-20 text-center">
              <PiHouseLine size={40} className="text-ink-300" />
              <h2 className="mt-4 text-xl font-semibold text-ink-900">
                No encontramos inmuebles con esos filtros
              </h2>
              <p className="mt-2 max-w-sm text-base text-ink-500">
                Prueba ampliando el rango de precio o quitando algún filtro.
                También puedes escribirnos y buscamos por ti.
              </p>
              <button
                type="button"
                onClick={limpiar}
                className="mt-6 rounded-lg border border-ink-900/15 bg-white px-3 py-2 text-base font-semibold text-ink-900 transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:border-ink-900/40 active:scale-[0.98]"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
