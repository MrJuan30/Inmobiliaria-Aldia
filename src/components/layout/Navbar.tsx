'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { PiWhatsappLogo } from 'react-icons/pi';
import { BUSINESS, waLink } from '@/data/business';

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/viviendas', label: 'Viviendas' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/contacto', label: 'Contáctenos' },
];

function RoofMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M2 14 16 2l14 12"
        stroke="#FE6602"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M21 6V2h4v7" fill="#FE6602" />
      <path
        d="M8 22v-7h16v7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const sobreHeroe = pathname === '/' && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const esActivo = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[var(--ease)] ${
          sobreHeroe
            ? 'bg-transparent'
            : 'border-b border-line bg-white/95 shadow-[0_1px_16px_rgba(19,17,17,0.07)] backdrop-blur'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 md:h-20 md:px-8">
          <Link
            href="/"
            aria-label="Aldia Inmobiliaria, ir al inicio"
            className={`flex items-center gap-2 transition-colors duration-500 ${
              sobreHeroe ? 'text-white' : 'text-ink-900'
            }`}
          >
            <RoofMark className="h-6 w-8" />
            <span className="text-lg font-semibold tracking-tight">
              Aldía <span className="font-medium">Inmobiliaria</span>
            </span>
          </Link>

          <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-semibold transition-colors duration-300 ${
                  sobreHeroe
                    ? 'text-white/85 hover:text-white'
                    : 'text-ink-700 hover:text-ink-900'
                } ${esActivo(link.href) ? (sobreHeroe ? 'text-white' : 'text-brand-600') : ''}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1.5 left-0 h-0.5 bg-brand-500 transition-all duration-500 ease-[var(--ease)] ${
                    esActivo(link.href) ? 'w-full' : 'w-0'
                  }`}
                />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className={`relative flex h-10 w-10 items-center justify-center md:hidden ${
              sobreHeroe ? 'text-white' : 'text-ink-900'
            }`}
          >
            <span
              className={`absolute h-0.5 w-6 bg-current transition-all duration-500 ease-[var(--ease)] ${
                open ? 'rotate-45' : '-translate-y-1'
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 bg-current transition-all duration-500 ease-[var(--ease)] ${
                open ? '-rotate-45' : 'translate-y-1'
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col bg-black/85 backdrop-blur-3xl md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-6">
              <span className="text-lg font-semibold tracking-tight text-white">
                Aldía <span className="font-medium">Inmobiliaria</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="relative flex h-10 w-10 items-center justify-center text-white"
              >
                <span className="absolute h-0.5 w-6 rotate-45 bg-current" />
                <span className="absolute h-0.5 w-6 -rotate-45 bg-current" />
              </button>
            </div>

            <nav
              aria-label="Navegación móvil"
              className="flex flex-1 flex-col justify-center gap-2 px-8"
            >
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.08, duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-4xl font-semibold tracking-tight text-white transition-colors ${
                      esActivo(link.href) ? 'text-brand-500' : 'hover:text-brand-200'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="border-t border-white/15 px-8 py-6"
            >
              <a
                href={waLink('Hola, quiero hablar con un asesor de Aldia Inmobiliaria.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-semibold text-white/85"
              >
                <PiWhatsappLogo size={20} className="text-brand-500" />
                WhatsApp {BUSINESS.whatsappVisible}
              </a>
              <p className="mt-3 text-sm text-white/50">{BUSINESS.direccion}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
