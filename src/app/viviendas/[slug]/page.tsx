import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  PiBathtub,
  PiBed,
  PiBuildings,
  PiCaretRight,
  PiGarage,
  PiMapPin,
  PiRuler,
} from 'react-icons/pi';
import PropertyGallery from '@/components/properties/PropertyGallery';
import PropertyActions from '@/components/properties/PropertyActions';
import PropertyCard from '@/components/properties/PropertyCard';
import Reveal from '@/components/motion/Reveal';
import { PROPERTIES, getProperty, relatedProperties } from '@/data/properties';
import { formatArea, formatCOP, formatPrecio } from '@/lib/format';

export function generateStaticParams() {
  return PROPERTIES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) return {};
  const descripcion = `${p.tipo} en ${p.estado.toLowerCase()} en ${p.barrio}, Bogotá. ${p.habitaciones} habitaciones, ${p.banos} baños, ${p.area} m². ${formatPrecio(p.precio, p.estado)}.`;
  return {
    title: p.titulo,
    description: descripcion.slice(0, 158),
    alternates: { canonical: `/viviendas/${p.slug}` },
    openGraph: {
      title: p.titulo,
      description: descripcion.slice(0, 158),
      images: [{ url: p.imagenes[0].src, width: 1536, height: 944, alt: p.imagenes[0].alt }],
    },
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getProperty(slug);
  if (!p) notFound();

  const relacionados = relatedProperties(p);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: p.titulo,
    url: `https://www.aldiainmobiliaria.com.co/viviendas/${p.slug}`,
    image: p.imagenes.map(
      (i) => `https://www.aldiainmobiliaria.com.co${i.src}`,
    ),
    description: p.descripcion[0],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressRegion: 'Cundinamarca',
      addressCountry: 'CO',
    },
    offers: {
      '@type': 'Offer',
      price: p.precio,
      priceCurrency: 'COP',
      availability: 'https://schema.org/InStock',
    },
  };

  const caracteristicas: Array<[string, string]> = [
    ['Tipo de inmueble', p.tipo],
    ['Estado', p.estado],
    ['Barrio', p.barrio],
    ['Ciudad', p.ciudad],
    ['Habitaciones', String(p.habitaciones)],
    ['Baños', String(p.banos)],
    ['Área construida', formatArea(p.area)],
    ...(p.parqueaderos != null ? [['Parqueaderos', String(p.parqueaderos)] as [string, string]] : []),
    ...(p.estrato != null ? [['Estrato', String(p.estrato)] as [string, string]] : []),
    ...(p.administracion != null
      ? [['Administración', `${formatCOP(p.administracion)} /mes`] as [string, string]]
      : []),
  ];

  return (
    <>
      <div className="mx-auto max-w-[1280px] px-6 pb-24 pt-24 md:px-8 md:pb-32 md:pt-32">
        <nav aria-label="Ruta de navegación" className="text-sm text-ink-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="transition-colors hover:text-brand-600">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">
              <PiCaretRight size={12} />
            </li>
            <li>
              <Link href="/viviendas" className="transition-colors hover:text-brand-600">
                Viviendas
              </Link>
            </li>
            <li aria-hidden="true">
              <PiCaretRight size={12} />
            </li>
            <li className="font-semibold text-ink-900" aria-current="page">
              {p.barrio}
            </li>
          </ol>
        </nav>

        <Reveal>
          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-sm text-ink-500">
                <PiMapPin size={16} className="text-brand-500" />
                {p.barrio}, {p.ciudad} · {p.tipo}
              </p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 md:text-4xl">
                {p.titulo}
              </h1>
            </div>
            <span className="rounded-sm bg-ink-900 px-2 py-1 text-xs font-semibold text-white">
              {p.estado}
            </span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="min-w-0">
            <Reveal>
              <PropertyGallery imagenes={p.imagenes} />
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-semibold text-ink-900">Descripción</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-ink-700">
                {p.descripcion.map((parrafo) => (
                  <p key={parrafo.slice(0, 32)}>{parrafo}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-semibold text-ink-900">Características</h2>
              <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
                {caracteristicas.map(([dt, dd]) => (
                  <div key={dt} className="bg-white p-5">
                    <dt className="text-sm text-ink-500">{dt}</dt>
                    <dd className="tnum mt-1 font-semibold text-ink-900">{dd}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <aside className="min-w-0 self-start lg:sticky lg:top-28">
            <Reveal>
              <div className="rounded-2xl bg-surface p-6 md:p-8">
                <p className="text-sm text-ink-500">
                  {p.estado === 'Arriendo' ? 'Canon mensual' : 'Precio de venta'}
                </p>
                <p className="tnum mt-1 text-3xl font-semibold text-ink-900">
                  {formatPrecio(p.precio, p.estado)}
                </p>
                {p.administracion != null && (
                  <p className="tnum mt-1 text-sm text-ink-500">
                    Administración: {formatCOP(p.administracion)} /mes
                  </p>
                )}

                <ul className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm text-ink-700">
                  <li className="flex items-center gap-2">
                    <PiBed size={18} className="text-ink-300" />
                    {p.habitaciones} hab.
                  </li>
                  <li className="flex items-center gap-2">
                    <PiBathtub size={18} className="text-ink-300" />
                    {p.banos} {p.banos === 1 ? 'baño' : 'baños'}
                  </li>
                  <li className="flex items-center gap-2">
                    <PiRuler size={18} className="text-ink-300" />
                    {formatArea(p.area)}
                  </li>
                  {p.parqueaderos != null && (
                    <li className="flex items-center gap-2">
                      <PiGarage size={18} className="text-ink-300" />
                      {p.parqueaderos} parqueadero{p.parqueaderos > 1 ? 's' : ''}
                    </li>
                  )}
                  {p.estrato != null && (
                    <li className="flex items-center gap-2">
                      <PiBuildings size={18} className="text-ink-300" />
                      Estrato {p.estrato}
                    </li>
                  )}
                </ul>

                <div className="mt-6 border-t border-line pt-6">
                  <PropertyActions p={p} />
                  <Link
                    href={`/contacto?inmueble=${p.slug}`}
                    className="mt-3 inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-base font-semibold text-ink-900 transition-colors duration-300 hover:text-brand-600"
                  >
                    Agendar una visita
                  </Link>
                </div>

                <p className="mt-4 text-sm leading-6 text-ink-500">
                  Un asesor te acompaña en todo el proceso, desde la primera
                  visita hasta la firma.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>

        {relacionados.length > 0 && (
          <section className="mt-24 border-t border-line pt-16">
            <Reveal>
              <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">
                También te puede interesar
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {relacionados.map((r, i) => (
                <Reveal key={r.id} delay={i * 100}>
                  <PropertyCard p={r} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
