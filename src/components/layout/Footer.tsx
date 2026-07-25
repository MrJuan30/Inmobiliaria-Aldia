import Link from 'next/link';
import {
  PiClock,
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiMapPin,
  PiPhone,
  PiWhatsappLogo,
  PiXLogo,
} from 'react-icons/pi';
import { BUSINESS, waLink } from '@/data/business';

const EXPLORA = [
  { href: '/', label: 'Inicio' },
  { href: '/viviendas', label: 'Viviendas' },
  { href: '/quienes-somos', label: 'Quiénes Somos' },
  { href: '/contacto', label: 'Contáctenos' },
  { href: '/privacidad', label: 'Política de privacidad' },
  { href: '/terminos', label: 'Términos de uso' },
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

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 md:px-8 lg:grid-cols-[1.15fr_1fr_0.8fr_1.3fr]">
        <div>
          <Link
            href="/"
            aria-label="Aldia Inmobiliaria, ir al inicio"
            className="inline-flex items-center gap-2 text-ink-900"
          >
            <RoofMark className="h-6 w-8" />
            <span className="text-lg font-semibold tracking-tight">
              Aldía <span className="font-medium">Inmobiliaria</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-6 text-ink-500">
            {BUSINESS.eslogan}. Acompañamiento cercano para familias y empresas
            que buscan su próximo inmueble.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href={BUSINESS.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Aldia Inmobiliaria"
              className="text-ink-500 transition-colors duration-300 hover:text-brand-600"
            >
              <PiFacebookLogo size={22} />
            </a>
            <a
              href={BUSINESS.social.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X de Aldia Inmobiliaria"
              className="text-ink-500 transition-colors duration-300 hover:text-brand-600"
            >
              <PiXLogo size={20} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink-900">Contacto</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-500">
            <li>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 transition-colors hover:text-brand-600"
              >
                <PiMapPin size={16} className="mt-0.5 shrink-0" />
                {BUSINESS.direccion}
              </a>
            </li>
            {BUSINESS.telefonos.map((tel) => (
              <li key={tel}>
                <a
                  href={`tel:+57${tel.replaceAll(' ', '')}`}
                  className="flex items-center gap-2 transition-colors hover:text-brand-600"
                >
                  <PiPhone size={16} className="shrink-0" />
                  {tel}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink('Hola, quiero hablar con un asesor de Aldia Inmobiliaria.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:text-brand-600"
              >
                <PiWhatsappLogo size={16} className="shrink-0" />
                WhatsApp {BUSINESS.whatsappVisible}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 transition-colors hover:text-brand-600"
              >
                <PiEnvelopeSimple size={16} className="shrink-0" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <PiClock size={16} className="shrink-0" />
              {BUSINESS.horario}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink-900">Explora</h2>
          <ul className="mt-4 space-y-3 text-sm text-ink-500">
            {EXPLORA.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink-900">Encuéntranos</h2>
          <div className="mt-4 overflow-hidden rounded-lg">
            <iframe
              title="Mapa de la oficina de Aldia Inmobiliaria en Engativá, Bogotá"
              src={BUSINESS.mapsEmbed}
              className="h-44 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
          >
            Cómo llegar
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>
            © {year} {BUSINESS.nombre} · Todos los derechos reservados
          </p>
          <p>Bogotá, Colombia</p>
        </div>
      </div>
    </footer>
  );
}
