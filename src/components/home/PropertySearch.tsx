'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { PiCaretDown, PiMagnifyingGlass } from 'react-icons/pi';
import { BARRIOS } from '@/data/properties';

function Campo({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-ink-700">{label}</span>
      {children}
    </label>
  );
}

function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <span className="relative block">
      <select
        {...props}
        className="w-full appearance-none rounded-lg border border-line bg-white px-3 py-2 pr-9 text-base text-ink-900 transition-colors duration-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none"
      />
      <PiCaretDown
        size={16}
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-500"
      />
    </span>
  );
}

/**
 * Buscador principal. Envía los filtros a /viviendas por query string,
 * el mismo contrato que leerá Decap CMS en la V2.
 */
export default function PropertySearch() {
  const router = useRouter();
  const [estado, setEstado] = useState('Todos');
  const [tipo, setTipo] = useState('Todos');
  const [barrio, setBarrio] = useState('Todos');
  const [precioMin, setPrecioMin] = useState('');
  const [precioMax, setPrecioMax] = useState('');
  const [habitaciones, setHabitaciones] = useState('');
  const [banos, setBanos] = useState('');

  const buscar = (e: FormEvent) => {
    e.preventDefault();
    const q = new URLSearchParams();
    if (estado !== 'Todos') q.set('estado', estado);
    if (tipo !== 'Todos') q.set('tipo', tipo);
    if (barrio !== 'Todos') q.set('barrio', barrio);
    if (precioMin) q.set('precioMin', precioMin);
    if (precioMax) q.set('precioMax', precioMax);
    if (habitaciones) q.set('habitaciones', habitaciones);
    if (banos) q.set('banos', banos);
    router.push(`/viviendas${q.size ? `?${q.toString()}` : ''}`);
  };

  return (
    <section id="buscador" className="relative z-10 mx-auto -mt-24 max-w-[1280px] px-6 md:px-8">
      <form
        onSubmit={buscar}
        className="rounded-2xl bg-white p-6 shadow-[0_16px_48px_rgba(19,17,17,0.12)] md:p-8"
        aria-label="Buscador de inmuebles"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Campo label="Venta o arriendo">
            <Select value={estado} onChange={(e) => setEstado(e.target.value)}>
              <option>Todos</option>
              <option>Venta</option>
              <option>Arriendo</option>
            </Select>
          </Campo>
          <Campo label="Tipo de inmueble">
            <Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option>Todos</option>
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Local</option>
              <option>Oficina</option>
            </Select>
          </Campo>
          <Campo label="Barrio">
            <Select value={barrio} onChange={(e) => setBarrio(e.target.value)}>
              <option>Todos</option>
              {BARRIOS.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </Select>
          </Campo>
          <Campo label="Ciudad">
            <Select value="Bogotá" disabled aria-disabled="true">
              <option>Bogotá</option>
            </Select>
          </Campo>
          <Campo label="Precio mínimo">
            <input
              type="number"
              min={0}
              inputMode="numeric"
              placeholder="$ 300.000.000"
              value={precioMin}
              onChange={(e) => setPrecioMin(e.target.value)}
              className="tnum w-full rounded-lg border border-line bg-white px-3 py-2 text-base text-ink-900 transition-colors duration-300 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none"
            />
          </Campo>
          <Campo label="Precio máximo">
            <input
              type="number"
              min={0}
              inputMode="numeric"
              placeholder="$ 900.000.000"
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className="tnum w-full rounded-lg border border-line bg-white px-3 py-2 text-base text-ink-900 transition-colors duration-300 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none"
            />
          </Campo>
          <Campo label="Habitaciones">
            <Select value={habitaciones} onChange={(e) => setHabitaciones(e.target.value)}>
              <option value="">Cualquiera</option>
              <option value="1">1 o más</option>
              <option value="2">2 o más</option>
              <option value="3">3 o más</option>
              <option value="4">4 o más</option>
            </Select>
          </Campo>
          <Campo label="Baños">
            <Select value={banos} onChange={(e) => setBanos(e.target.value)}>
              <option value="">Cualquiera</option>
              <option value="1">1 o más</option>
              <option value="2">2 o más</option>
              <option value="3">3 o más</option>
            </Select>
          </Campo>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-base font-semibold text-white shadow-[0_8px_24px_rgba(254,102,2,0.28)] transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:bg-brand-600 active:scale-[0.98] sm:w-auto sm:px-8"
          >
            <PiMagnifyingGlass size={18} />
            Buscar
          </button>
        </div>
      </form>
    </section>
  );
}
