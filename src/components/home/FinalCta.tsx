import { PiWhatsappLogo } from 'react-icons/pi';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';
import { waLink } from '@/data/business';

export default function FinalCta() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1280px] px-6 py-20 text-center md:px-8 md:py-24">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-600">( 03 ) · Hablemos</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-ink-900 md:text-4xl">
            ¿Listo para encontrar tu próximo inmueble?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-ink-500">
            Escríbenos por WhatsApp o agenda una visita a la oficina. Respondemos
            en horario de atención, de lunes a viernes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={waLink('Hola, quiero hablar con un asesor de Aldia Inmobiliaria.')}
              external
            >
              <PiWhatsappLogo size={18} />
              Escribir por WhatsApp
            </Button>
            <Button href="/contacto" variant="secondary">
              Ir a contáctenos
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
