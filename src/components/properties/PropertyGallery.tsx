'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Pagination } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import type { ImagenInmueble } from '@/lib/types';

export default function PropertyGallery({ imagenes }: { imagenes: ImagenInmueble[] }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activa, setActiva] = useState(0);

  return (
    <div>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-surface">
        <Swiper
          modules={[Pagination, Keyboard, A11y]}
          pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          a11y={{ enabled: true }}
          onSwiper={setSwiper}
          onSlideChange={(s) => setActiva(s.activeIndex)}
          className="absolute inset-0 h-full w-full"
        >
          {imagenes.map((img, i) => (
            <SwiperSlide key={img.src}>
              <div className="relative h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {imagenes.length > 1 && (
        <div className="mt-4 flex gap-3" role="tablist" aria-label="Miniaturas de la galería">
          {imagenes.map((img, i) => (
            <button
              key={img.src}
              type="button"
              role="tab"
              aria-selected={activa === i}
              aria-label={`Ver imagen ${i + 1} de ${imagenes.length}`}
              onClick={() => swiper?.slideTo(i)}
              className={`relative h-16 w-24 overflow-hidden rounded-lg transition-all duration-300 ease-[var(--ease)] ${
                activa === i
                  ? 'ring-2 ring-brand-500 ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image src={img.src} alt="" fill sizes="96px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
