import Reveal from '@/components/motion/Reveal';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70dvh] items-center justify-center px-6 py-32">
      <Reveal>
        <div className="text-center">
          <p className="tnum text-sm font-semibold tracking-wide text-brand-600">( 404 )</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink-900 md:text-5xl">
            Esta página se mudó
          </h1>
          <p className="mx-auto mt-4 max-w-md text-lg leading-7 text-ink-500">
            El enlace que seguiste ya no existe o cambió de dirección. Te
            ayudamos a volver.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/">Ir al inicio</Button>
            <Button href="/viviendas" variant="secondary">
              Ver viviendas
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
