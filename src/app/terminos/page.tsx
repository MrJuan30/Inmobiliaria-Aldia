import type { Metadata } from 'next';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Términos de uso',
  description:
    'Términos de uso del sitio web de Aldia Inmobiliaria SAS, Bogotá, Colombia.',
  alternates: { canonical: '/terminos' },
};

export default function TerminosPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <Reveal>
        <p className="text-sm font-semibold tracking-wide text-brand-600">( Legal )</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
          Términos de uso
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink-700">
          <p>
            Este sitio es el canal informativo de Aldia Inmobiliaria SAS. Al
            usarlo aceptas estos términos. Si no estás de acuerdo, por favor no
            uses el sitio.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-ink-900">La información de los inmuebles</h2>
          <p>
            Precios, áreas y disponibilidad se publican de buena fe y pueden
            cambiar sin previo aviso. La oferta final siempre se confirma por
            escrito con un asesor antes de cualquier negociación.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-ink-900">Propiedad del contenido</h2>
          <p>
            Textos, fotografías y marca son propiedad de Aldia Inmobiliaria
            SAS. No está permitido reproducirlos con fines comerciales sin
            autorización escrita.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-ink-900">Contacto</h2>
          <p>
            Cualquier inquietud sobre estos términos se atiende en los canales
            publicados en la página de contáctenos.
          </p>
        </div>
      </Reveal>
    </article>
  );
}
