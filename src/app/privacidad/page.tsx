import type { Metadata } from 'next';
import Reveal from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Política de privacidad',
  description:
    'Política de tratamiento de datos personales de Aldia Inmobiliaria SAS, conforme a la Ley 1581 de 2012 de Colombia.',
  alternates: { canonical: '/privacidad' },
};

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-[760px] px-6 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <Reveal>
        <p className="text-sm font-semibold tracking-wide text-brand-600">( Legal )</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink-900 md:text-4xl">
          Política de privacidad
        </h1>
        <div className="mt-8 space-y-6 leading-8 text-ink-700">
          <p>
            Aldia Inmobiliaria SAS trata los datos personales que recibe a
            través de este sitio, de WhatsApp y de los canales de atención
            conforme a la Ley 1581 de 2012 y al Decreto 1377 de 2013 de
            Colombia.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-ink-900">Qué datos recogemos</h2>
          <p>
            Nombre, teléfono, correo electrónico y el contenido de tu mensaje.
            Usamos esa información únicamente para responder a tu solicitud,
            agendar visitas y adelantar los trámites inmobiliarios que nos
            encargues.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-ink-900">Tus derechos</h2>
          <p>
            Puedes conocer, actualizar, rectificar o eliminar tus datos en
            cualquier momento escribiendo a nuestro correo de contacto.
            Atendemos las solicitudes dentro de los términos que fija la ley.
          </p>
          <h2 className="pt-4 text-xl font-semibold text-ink-900">Con quién compartimos los datos</h2>
          <p>
            No vendemos ni cedemos tu información a terceros. Solo la
            compartimos cuando es indispensable para el trámite que nos
            autorizaste, por ejemplo con aseguradoras de arrendamientos o
            notarías.
          </p>
        </div>
      </Reveal>
    </article>
  );
}
