import type { MetadataRoute } from 'next';
import { PROPERTIES } from '@/data/properties';

const BASE = 'https://www.aldiainmobiliaria.com.co';

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ['', '/viviendas', '/quienes-somos', '/contacto', '/privacidad', '/terminos'];
  return [
    ...estaticas.map((ruta) => ({
      url: `${BASE}${ruta}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: ruta === '' ? 1 : 0.7,
    })),
    ...PROPERTIES.map((p) => ({
      url: `${BASE}/viviendas/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
