import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';
import Reveal from '@/components/motion/Reveal';

/**
 * Encabezado de sección con numeración entre paréntesis,
 * título en sentence case y enlace opcional a la derecha.
 */
export default function SectionHeader({
  numero,
  eyebrow,
  titulo,
  enlace,
}: {
  numero: string;
  eyebrow: string;
  titulo: string;
  enlace?: { href: string; label: string };
}) {
  return (
    <Reveal>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-600">
            ( {numero} ) · {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
            {titulo}
          </h2>
        </div>
        {enlace && (
          <Link
            href={enlace.href}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink-900 transition-colors hover:text-brand-600"
          >
            {enlace.label}
            <PiArrowUpRight
              size={16}
              className="transition-transform duration-500 ease-[var(--ease)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        )}
      </div>
    </Reveal>
  );
}
