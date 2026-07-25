import type { Metadata } from 'next';
import Image from 'next/image';
import FinalCta from '@/components/home/FinalCta';
import Reveal from '@/components/motion/Reveal';
import Parallax from '@/components/motion/Parallax';
import { BUSINESS } from '@/data/business';

export const metadata: Metadata = {
  title: 'Quiénes somos',
  description:
    'Conoce a Aldia Inmobiliaria SAS: una inmobiliaria bogotana con más de 10 años de experiencia, 46 reseñas de cinco estrellas y un trato cercano.',
  alternates: { canonical: '/quienes-somos' },
};

const VALORES = [
  {
    nombre: 'Profesionalismo',
    texto:
      'Cada inmueble se visita, se verifica y se publica con información completa. Sin sorpresas para nadie.',
  },
  {
    nombre: 'Confianza',
    texto:
      'Nuestros clientes nos califican con cinco estrellas porque decimos las cosas como son, incluso cuando no conviene.',
  },
  {
    nombre: 'Experiencia local',
    texto:
      'Más de una década trabajando barrio por barrio nos permite valorar un inmueble con criterio, no con fórmulas.',
  },
  {
    nombre: 'Cercanía',
    texto:
      'Hablas con personas, no con un call center. El mismo asesor te acompaña de la primera llamada a la entrega de llaves.',
  },
  {
    nombre: 'Transparencia',
    texto:
      'Comisiones claras desde el primer día y documentos siempre disponibles para tu revisión.',
  },
];

export default function QuienesSomosPage() {
  return (
    <>
      <header className="mx-auto max-w-[1280px] px-6 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <p className="text-sm font-semibold tracking-wide text-brand-600">
              ( La empresa )
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
              Quiénes somos
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-2xl font-semibold leading-snug text-ink-900 md:text-3xl">
              Somos una inmobiliaria bogotana que cree que encontrar vivienda no
              debería sentirse como un trámite. Acompañamos a cada cliente como
              si fuera el primero.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-surface">
              <Parallax speed={0.08} className="h-[118%]">
                <div className="relative h-full w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80"
                    alt="El equipo de Aldia Inmobiliaria revisando planos de un inmueble en la oficina"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Parallax>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="lg:sticky lg:top-28">
              <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">
                Nuestra historia
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-ink-700">
                <p>
                  Aldia Inmobiliaria nació en Engativá como un negocio de
                  familia: atender a los vecinos que querían vender o arrendar
                  sin enredos. Con los años, esa cercanía se convirtió en
                  nuestro sello.
                </p>
                <p>
                  Hoy, con más de {BUSINESS.anosExperiencia} años de experiencia,
                  seguimos trabajando igual: visitamos cada inmueble, conocemos
                  a cada propietario y respondemos cada mensaje. Por eso{' '}
                  {BUSINESS.resenasGoogle} clientes nos han dejado una
                  calificación de {BUSINESS.calificacionGoogle.toFixed(1).replace('.', ',')}{' '}
                  estrellas en Google.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:px-8 md:py-28 md:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">Misión</h2>
            <p className="mt-5 text-lg leading-8 text-ink-700">
              Ayudar a familias y empresas de Bogotá a encontrar el inmueble
              correcto, con asesoría honesta y un proceso claro de principio a
              fin, para que comprar, vender o arrendar sea una buena
              experiencia.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="text-2xl font-semibold text-ink-900 md:text-3xl">Visión</h2>
            <p className="mt-5 text-lg leading-8 text-ink-700">
              Ser la inmobiliaria de referencia en Bogotá para quienes buscan un
              trato humano: una empresa que crece porque sus clientes la
              recomiendan, no porque promete de más.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[1fr_1.6fr]">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-semibold tracking-wide text-brand-600">
                ( Valores )
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-900 md:text-3xl">
                Lo que nos define
              </h2>
            </div>
          </Reveal>
          <div>
            {VALORES.map((v, i) => (
              <Reveal key={v.nombre} delay={i * 60}>
                <div className="flex gap-6 border-t border-line py-6 first:border-t-0 first:pt-0">
                  <span className="tnum pt-1 text-sm font-semibold text-brand-600">
                    ({String(i + 1).padStart(2, '0')})
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900">{v.nombre}</h3>
                    <p className="mt-1.5 max-w-xl leading-7 text-ink-500">{v.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Cifras de la empresa" className="border-y border-line">
        <div className="mx-auto grid max-w-[1280px] gap-8 px-6 py-12 text-center sm:grid-cols-3 md:px-8">
          {[
            [`${BUSINESS.anosExperiencia}+`, 'años de experiencia'],
            [
              `${BUSINESS.resenasGoogle} reseñas`,
              `de ${BUSINESS.calificacionGoogle.toFixed(1).replace('.', ',')} estrellas en Google`,
            ],
            ['100 %', 'enfocados en Bogotá'],
          ].map(([cifra, texto], i) => (
            <Reveal key={texto} delay={i * 100}>
              <p className="tnum text-4xl font-semibold text-ink-900">{cifra}</p>
              <p className="mt-2 text-sm font-semibold text-ink-500">{texto}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
