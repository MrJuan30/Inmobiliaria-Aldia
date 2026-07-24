import Link from 'next/link';
import Image from 'next/image';
import { PiArrowUpRight, PiBathtub, PiBed, PiRuler } from 'react-icons/pi';
import { formatArea, formatPrecio } from '@/lib/format';
import type { Property } from '@/lib/types';

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <Link
      href={`/viviendas/${p.slug}`}
      className="group block"
      aria-label={`Ver ${p.titulo}`}
    >
      <div className="relative overflow-hidden rounded-xl bg-surface">
        <div className="relative aspect-[3/2]">
          <Image
            src={p.imagenes[0].src}
            alt={p.imagenes[0].alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease)] group-hover:scale-[1.04]"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-sm bg-white/95 px-2 py-1 text-xs font-semibold text-ink-900 shadow-sm">
          {p.estado}
        </span>
      </div>

      <div className="pt-5">
        <p className="text-sm text-ink-500">
          {p.barrio} · {p.tipo}
        </p>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug text-ink-900 decoration-brand-500 decoration-2 underline-offset-4 group-hover:underline">
          {p.titulo}
        </h3>

        <ul className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500">
          <li className="flex items-center gap-1.5">
            <PiBed size={16} className="text-ink-300" />
            {p.habitaciones} hab.
          </li>
          <li className="flex items-center gap-1.5">
            <PiBathtub size={16} className="text-ink-300" />
            {p.banos} {p.banos === 1 ? 'baño' : 'baños'}
          </li>
          <li className="flex items-center gap-1.5">
            <PiRuler size={16} className="text-ink-300" />
            {formatArea(p.area)}
          </li>
        </ul>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-line pt-4">
          <p className="tnum whitespace-nowrap text-xl font-semibold text-ink-900">
            {formatPrecio(p.precio, p.estado)}
          </p>
          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-brand-600">
            Ver propiedad
            <PiArrowUpRight
              size={16}
              className="transition-transform duration-500 ease-[var(--ease)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
