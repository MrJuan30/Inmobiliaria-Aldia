'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Afterimage cursor. El marcado, el CSS (globals.css) y el rastreador
 * (/cursor/afterimage.js) siguen al pie de la letra la especificación
 * entregada por el cliente. Este componente solo añade la integración:
 * como la capa fija no intercepta eventos (pointer-events: none), el
 * mismo seguimiento se replica a nivel de documento escribiendo
 * únicamente --x, --y, --angle y --speed y alternando .is-active e
 * .is-near, tal como define la especificación.
 */
export default function AfterimageCursor() {
  useEffect(() => {
    const layer = document.querySelector<HTMLElement>('body > .cur');
    if (!layer) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

    let lx = 0,
      ly = 0,
      has = false,
      idle: ReturnType<typeof setTimeout> | undefined;
    const set = (p: string, v: string) => layer.style.setProperty(p, v);

    const onMove = (e: PointerEvent) => {
      const r = layer.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      if (has) {
        const dx = x - lx;
        const dy = y - ly;
        const d = Math.hypot(dx, dy);
        if (d > 0.5) set('--angle', Math.atan2(dy, dx).toFixed(3) + 'rad');
        set('--speed', Math.min(1, d / 32).toFixed(3));
      }
      set('--x', x.toFixed(1) + 'px');
      set('--y', y.toFixed(1) + 'px');
      layer.classList.toggle(
        'is-near',
        Math.hypot(x - r.width / 2, y - r.height / 2) < 60,
      );
      layer.classList.add('is-active');
      lx = x;
      ly = y;
      has = true;
      clearTimeout(idle);
      idle = setTimeout(() => set('--speed', '0'), 120);
    };

    const onLeave = () => {
      layer.classList.remove('is-active', 'is-near');
      set('--speed', '0');
      has = false;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      clearTimeout(idle);
    };
  }, []);

  return (
    <>
      <Script src="/cursor/afterimage.js" strategy="afterInteractive" />
      <div
        className="cur cur-ghost"
        data-cursor="ghost"
        role="img"
        aria-label="Afterimage cursor demo"
      >
        <span className="cur-hint mono" aria-hidden="true">
          hover
        </span>
        <span className="cur-word" aria-hidden="true"></span>
        <i className="cursor" style={{ '--i': 0 } as React.CSSProperties}></i>
        <i className="cursor" style={{ '--i': 1 } as React.CSSProperties}></i>
        <i className="cursor" style={{ '--i': 2 } as React.CSSProperties}></i>
        <i className="cursor" style={{ '--i': 3 } as React.CSSProperties}></i>
        <i className="cursor" style={{ '--i': 4 } as React.CSSProperties}></i>
        <i className="cursor" style={{ '--i': 5 } as React.CSSProperties}></i>
      </div>
    </>
  );
}
