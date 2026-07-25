import type { Metadata, Viewport } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/motion/SmoothScroll';
import { BUSINESS } from '@/data/business';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const OG_IMAGE =
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&h=630&q=80';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aldiainmobiliaria.com.co'),
  title: {
    default: 'Aldia Inmobiliaria: venta y arriendo de inmuebles en Bogotá',
    template: '%s · Aldia Inmobiliaria',
  },
  description:
    'Inmobiliaria en Bogotá con más de 10 años de experiencia. Apartamentos, casas y oficinas en venta y arriendo. Agenda tu visita hoy.',
  keywords: [
    'inmobiliaria Bogotá',
    'venta de apartamentos Bogotá',
    'arriendo Bogotá',
    'casas en venta Bogotá',
    'inmobiliaria Engativá',
    'Aldia Inmobiliaria',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    siteName: 'Aldia Inmobiliaria',
    title: 'Aldia Inmobiliaria: venta y arriendo de inmuebles en Bogotá',
    description:
      'Inmobiliaria en Bogotá con más de 10 años de experiencia. Apartamentos, casas y oficinas en venta y arriendo.',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Edificio de apartamentos en Bogotá',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aldia Inmobiliaria: venta y arriendo de inmuebles en Bogotá',
    description:
      'Inmobiliaria en Bogotá con más de 10 años de experiencia. Apartamentos, casas y oficinas en venta y arriendo.',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: BUSINESS.nombre,
  url: 'https://www.aldiainmobiliaria.com.co/',
  image: OG_IMAGE,
  telephone: '+57 310 688 2798',
  email: BUSINESS.email,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Cra. 73a #76-28',
    addressLocality: 'Bogotá',
    addressRegion: 'Cundinamarca',
    addressCountry: 'CO',
  },
  openingHours: 'Mo-Fr 08:00-18:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '46',
  },
  sameAs: [BUSINESS.social.facebook, BUSINESS.social.x],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} bg-white font-sans text-ink-900 antialiased`}>
        <a href="#contenido" className="skip-link">
          Ir al contenido
        </a>
        <SmoothScroll />
        <Navbar />
        <main id="contenido">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
