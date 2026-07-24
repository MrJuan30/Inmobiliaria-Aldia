import { PROPERTIES } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import SectionHeader from '@/components/layout/SectionHeader';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';

export default function FeaturedProperties() {
  const destacados = PROPERTIES.filter((p) => p.destacado);

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-8 md:py-32">
      <SectionHeader
        numero="01"
        eyebrow="Portafolio"
        titulo="Viviendas destacadas"
        enlace={{ href: '/viviendas', label: 'Ver todas' }}
      />

      <div className="mt-12 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {destacados.map((p, i) => (
          <Reveal key={p.id} delay={(i % 3) * 100}>
            <PropertyCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16 text-center">
        <Button href="/viviendas">Ver todas las viviendas</Button>
      </Reveal>
    </section>
  );
}
