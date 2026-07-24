import Link from 'next/link';
import type { ReactNode } from 'react';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-base font-semibold transition-all duration-700 ease-[var(--ease)] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-brand-500 text-white shadow-[0_8px_24px_rgba(254,102,2,0.28)] hover:-translate-y-px hover:bg-brand-600 focus-visible:outline-brand-500',
  secondary:
    'border border-ink-900/15 bg-white text-ink-900 hover:-translate-y-px hover:border-ink-900/40 focus-visible:outline-ink-900',
  onDark:
    'bg-white text-ink-900 hover:-translate-y-px hover:bg-brand-50 focus-visible:outline-white',
  outlineDark:
    'border border-white/60 text-white hover:-translate-y-px hover:bg-white hover:text-ink-900 focus-visible:outline-white',
} as const;

type Variant = keyof typeof variants;

export default function Button({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
