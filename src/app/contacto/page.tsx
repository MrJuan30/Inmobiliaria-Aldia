import type { Metadata } from 'next';
import {
  PiClock,
  PiEnvelopeSimple,
  PiMapPin,
  PiPhone,
  PiWhatsappLogo,
} from 'react-icons/pi';
import ContactForm from '@/components/contact/ContactForm';
import Reveal from '@/components/motion/Reveal';
import { BUSINESS, waLink } from '@/data/business';

export const metadata: Metadata = {
  title: 'Contáctenos',
  description:
    'Hable con Aldia Inmobiliaria: oficina en Engativá, WhatsApp, teléfonos y formulario de contacto. Respondemos de lunes a viernes desde las 8:00 a. m.',
  alternates: { canonical: '/contacto' },
};

const FAQ = [
  {
    pregunta: '¿Cómo agendo una visita a un inmueble?',
    respuesta:
      'Escríbenos por WhatsApp o por el formulario con el inmueble que te interesa. Un asesor confirma disponibilidad con el propietario y te propone fecha y hora, normalmente dentro del mismo día hábil.',
  },
  {
    pregunta: '¿Qué documentos necesito para arrendar?',
    respuesta:
      'Lo habitual: cédula, soporte de ingresos y un codeudor o una póliza de arrendamiento. Te acompañamos en el trámite de la póliza si la necesitas, sin costo adicional de gestión.',
  },
  {
    pregunta: '¿Cuánto cuesta publicar mi inmueble con ustedes?',
    respuesta:
      'La publicación, la fotografía y las visitas no tienen costo inicial. Solo cobramos comisión cuando el negocio se cierra, y el porcentaje se acuerda por escrito desde el primer día.',
  },
  {
    pregunta: '¿Trabajan solo en Bogotá?',
    respuesta:
      'Sí. Nuestra experiencia es en Bogotá y preferimos conocer bien cada barrio antes que cubrir muchas ciudades. La oficina está en Engativá y atendemos toda la ciudad.',
  },
  {
    pregunta: '¿En cuánto tiempo responden?',
    respuesta:
      'En horario de oficina, de lunes a viernes desde las 8:00 a. m., respondemos el mismo día. Los mensajes del fin de semana se atienden el lunes en la mañana.',
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((f) => ({
    '@type': 'Question',
    name: f.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: f.respuesta },
  })),
};

const INFO = [
  {
    icon: PiMapPin,
    titulo: 'Oficina',
    contenido: BUSINESS.direccion,
    href: BUSINESS.mapsUrl,
    accion: 'Cómo llegar',
  },
  {
    icon: PiPhone,
    titulo: 'Teléfonos',
    contenido: BUSINESS.telefonos.join(' · '),
    href: `tel:+57${BUSINESS.telefonos[0].replaceAll(' ', '')}`,
    accion: 'Llamar ahora',
  },
  {
    icon: PiWhatsappLogo,
    titulo: 'WhatsApp',
    contenido: BUSINESS.whatsappVisible,
    href: waLink('Hola, quiero hablar con un asesor de Aldia Inmobiliaria.'),
    accion: 'Abrir chat',
  },
  {
    icon: PiEnvelopeSimple,
    titulo: 'Correo',
    contenido: BUSINESS.email,
    href: `mailto:${BUSINESS.email}`,
    accion: 'Escribir',
  },
  {
    icon: PiClock,
    titulo: 'Horario',
    contenido: BUSINESS.horario,
  },
];

export default function ContactoPage() {
  return (
    <>
      <header className="mx-auto max-w-[1280px] px-6 pb-12 pt-28 md:px-8 md:pt-36">
        <Reveal>
          <p className="text-sm font-semibold tracking-wide text-brand-600">
            ( Contacto )
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
            Contáctenos
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-7 text-ink-500">
            Cuéntanos qué buscas o qué quieres publicar. Respondemos en horario
            de oficina, de lunes a viernes.
          </p>
        </Reveal>
      </header>

      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 pb-24 md:px-8 md:pb-32 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <ul className="space-y-6">
            {INFO.map((item, i) => (
              <Reveal key={item.titulo} delay={i * 60}>
                <li className="flex gap-4 border-b border-line pb-6">
                  <item.icon size={22} className="mt-1 shrink-0 text-brand-500" />
                  <div>
                    <h2 className="text-sm font-semibold text-ink-500">{item.titulo}</h2>
                    <p className="mt-1 font-semibold text-ink-900">{item.contenido}</p>
                    {item.href && (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="mt-1 inline-block text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
                      >
                        {item.accion}
                      </a>
                    )}
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200}>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <iframe
                title="Mapa de la oficina de Aldia Inmobiliaria"
                src={BUSINESS.mapsEmbed}
                className="h-72 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>

      <section className="border-t border-line">
        <div className="mx-auto max-w-[1280px] px-6 py-20 md:px-8 md:py-28">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">
              Preguntas frecuentes
            </h2>
          </Reveal>
          <dl className="mt-10 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {FAQ.map((f, i) => (
              <Reveal key={f.pregunta} delay={(i % 2) * 100}>
                <div>
                  <dt className="font-semibold text-ink-900">{f.pregunta}</dt>
                  <dd className="mt-2 leading-7 text-ink-500">{f.respuesta}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
