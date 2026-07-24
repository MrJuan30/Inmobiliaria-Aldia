'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PiCaretDown } from 'react-icons/pi';
import Button from '@/components/ui/Button';
import Parallax from '@/components/motion/Parallax';

const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.25 + i * 0.14, duration: 0.9, ease: [0.32, 0.72, 0, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <Parallax speed={0.1} className="h-[118%]">
          <div className="relative h-full w-full">
            <Image
              src="/images/hero-apartamentos-bogota.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Parallax>
        <div className="absolute inset-0 bg-ink-900/45" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
        className="relative z-10 mx-6 mt-16 w-full max-w-[680px] rounded-2xl bg-white p-8 text-center shadow-[0_24px_72px_rgba(19,17,17,0.3)] md:p-12"
      >
        <motion.p
          custom={0}
          variants={item}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-2 text-sm font-semibold text-ink-500"
        >
          <span className="h-2 w-2 rounded-full bg-brand-500" aria-hidden="true" />
          Venta y arriendo en Bogotá
        </motion.p>

        <motion.h1
          custom={1}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-900 md:text-6xl"
        >
          Encuentra el lugar ideal para vivir.
        </motion.h1>

        <motion.p
          custom={2}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mx-auto mt-5 max-w-md text-lg leading-7 text-ink-500"
        >
          Más de 10 años ayudando a familias y empresas a encontrar el inmueble
          perfecto en Bogotá.
        </motion.p>

        <motion.div
          custom={3}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button href="/viviendas" className="w-full sm:w-auto">
            Ver viviendas
          </Button>
          <Button href="/contacto" variant="secondary" className="w-full sm:w-auto">
            Contáctanos
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#buscador"
        aria-label="Bajar al buscador de inmuebles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80 transition-colors hover:text-white"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1 text-sm font-medium"
        >
          Desliza
          <PiCaretDown size={18} />
        </motion.span>
      </motion.a>
    </section>
  );
}
