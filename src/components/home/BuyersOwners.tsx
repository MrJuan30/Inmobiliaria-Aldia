import Image from 'next/image';
import { PiWhatsappLogo } from 'react-icons/pi';
import Button from '@/components/ui/Button';
import SectionHeader from '@/components/layout/SectionHeader';
import Reveal from '@/components/motion/Reveal';
import Parallax from '@/components/motion/Parallax';
import { waLink } from '@/data/business';

const TARJETAS = [
  {
    eyebrow: 'Para propietarios',
    titulo: '¿Quieres vender o arrendar tu inmueble?',
    texto:
      'Nosotros nos encargamos de todo el proceso: avalúo, fotografía, publicación, visitas y negociación.',
    cta: 'Hablar por WhatsApp',
    href: waLink('Hola, tengo un inmueble y quiero venderlo o arrendarlo con Aldia Inmobiliaria.'),
    externo: true,
    imagen: '/images/equipo-oficina-aldia-inmobiliaria.webp',
    alt: 'Equipo de Aldia Inmobiliaria revisando planos en la oficina',
    speed: 0.08,
  },
  {
    eyebrow: 'Para compradores',
    titulo: 'Te ayudamos a encontrar el inmueble ideal según tu presupuesto',
    texto:
      'Cuéntanos qué buscas y te presentamos opciones reales, con acompañamiento hasta la firma.',
    cta: 'Buscar viviendas',
    href: '/viviendas',
    externo: false,
    imagen: '/images/propiedades/apartamento-colina-campestre-sala-comedor.webp',
    alt: 'Sala comedor iluminada de un apartamento en Bogotá',
    speed: -0.08,
  },
];

export default function BuyersOwners() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-[1280px] px-6 py-24 md:px-8 md:py-32">
        <SectionHeader numero="02" eyebrow="Cómo trabajamos" titulo="De tu lado en la negociación" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {TARJETAS.map((t, i) => (
            <Reveal key={t.eyebrow} delay={i * 120} className={i === 1 ? 'lg:translate-y-12' : ''}>
              <article className="group relative h-[420px] overflow-hidden rounded-2xl bg-ink-900 md:h-[460px]">
                <Parallax speed={t.speed} className="absolute inset-0">
                  <div className="relative h-[120%] w-full">
                    <Image
                      src={t.imagen}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Parallax>
                <div className="absolute inset-0 bg-ink-900/45 transition-colors duration-700 group-hover:bg-ink-900/55" />

                <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
                  <p className="text-sm font-semibold text-brand-200">{t.eyebrow}</p>
                  <h3 className="mt-2 max-w-md text-2xl font-semibold leading-tight text-white md:text-3xl">
                    {t.titulo}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-6 text-white/80">{t.texto}</p>
                  <div className="mt-6">
                    {t.externo ? (
                      <Button href={t.href} external variant="onDark">
                        <PiWhatsappLogo size={18} />
                        {t.cta}
                      </Button>
                    ) : (
                      <Button href={t.href} variant="outlineDark">
                        {t.cta}
                      </Button>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
