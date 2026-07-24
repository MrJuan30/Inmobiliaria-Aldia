'use client';

import { useState } from 'react';
import { PiCheck, PiShareNetwork, PiWhatsappLogo } from 'react-icons/pi';
import { waLink } from '@/data/business';
import type { Property } from '@/lib/types';

export default function PropertyActions({ p }: { p: Property }) {
  const [copiado, setCopiado] = useState(false);

  const url = `https://www.aldiainmobiliaria.com.co/viviendas/${p.slug}`;

  const whatsapp = waLink(
    `Hola, me interesa este inmueble: ${p.titulo} (${p.barrio}, Bogotá). ${url}`,
  );

  const compartir = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: p.titulo, text: p.titulo, url });
        return;
      } catch {
        return;
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      window.prompt('Copia el enlace de este inmueble:', url);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-base font-semibold text-white shadow-[0_8px_24px_rgba(254,102,2,0.28)] transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:bg-brand-600 active:scale-[0.98]"
      >
        <PiWhatsappLogo size={18} />
        Hablar por WhatsApp
      </a>
      <button
        type="button"
        onClick={compartir}
        className="inline-flex items-center justify-center gap-2 rounded-lg border border-ink-900/15 bg-white px-3 py-2 text-base font-semibold text-ink-900 transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:border-ink-900/40 active:scale-[0.98]"
      >
        {copiado ? <PiCheck size={18} className="text-brand-600" /> : <PiShareNetwork size={18} />}
        {copiado ? 'Enlace copiado' : 'Compartir'}
      </button>
    </div>
  );
}
