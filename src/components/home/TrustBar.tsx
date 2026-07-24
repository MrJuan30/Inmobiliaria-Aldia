import { PiMapPin, PiSealCheck, PiStar } from 'react-icons/pi';
import { BUSINESS } from '@/data/business';
import Reveal from '@/components/motion/Reveal';

const ITEMS = [
  {
    icon: PiStar,
    texto: `${BUSINESS.calificacionGoogle.toFixed(1).replace('.', ',')} en Google · ${BUSINESS.resenasGoogle} reseñas de clientes`,
  },
  {
    icon: PiSealCheck,
    texto: `Más de ${BUSINESS.anosExperiencia} años de experiencia en Bogotá`,
  },
  {
    icon: PiMapPin,
    texto: 'Oficina en Engativá, atendemos toda la ciudad',
  },
];

export default function TrustBar() {
  return (
    <section aria-label="Razones para confiar" className="mt-20 border-y border-line md:mt-24">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        {ITEMS.map((item, i) => (
          <Reveal key={item.texto} delay={i * 100}>
            <p className="flex items-center gap-3 text-sm font-semibold text-ink-700">
              <item.icon size={20} className="shrink-0 text-brand-500" />
              {item.texto}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
