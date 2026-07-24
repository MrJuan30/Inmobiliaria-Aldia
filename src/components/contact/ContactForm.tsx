'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { PiPaperPlaneTilt, PiWhatsappLogo } from 'react-icons/pi';
import { BUSINESS, waLink } from '@/data/business';

const schema = z.object({
  nombre: z.string().min(2, 'Escribe tu nombre completo.'),
  email: z.email('Revisa el correo, parece incompleto.'),
  telefono: z
    .string()
    .regex(/^[0-9+()\s]{7,15}$/, 'Escribe un teléfono válido, solo números.')
    .or(z.literal('')),
  interes: z.string().min(1, 'Elige el motivo de tu mensaje.'),
  mensaje: z.string().min(10, 'Cuéntanos un poco más, al menos 10 caracteres.'),
});

type FormData = z.infer<typeof schema>;

const inputCls =
  'w-full rounded-lg border border-line bg-white px-3 py-2 text-base text-ink-900 transition-colors duration-300 placeholder:text-ink-300 hover:border-ink-300 focus:border-brand-500 focus:outline-none';

function Error({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p role="alert" className="mt-1.5 text-sm font-medium text-[#b3261e]">
      {msg}
    </p>
  );
}

export default function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { interes: '' },
  });

  const onSubmit = (data: FormData) => {
    const cuerpo = [
      `Nombre: ${data.nombre}`,
      `Correo: ${data.email}`,
      data.telefono ? `Teléfono: ${data.telefono}` : null,
      '',
      data.mensaje,
    ]
      .filter(Boolean)
      .join('\n');
    const mailto = `mailto:${BUSINESS.email}?subject=${encodeURIComponent(
      `Contacto web: ${data.interes}`,
    )}&body=${encodeURIComponent(cuerpo)}`;
    window.location.href = mailto;
    setEnviado(true);
  };

  if (enviado) {
    return (
      <div className="rounded-2xl bg-surface p-8 text-center md:p-12">
        <h2 className="text-2xl font-semibold text-ink-900">Tu mensaje está listo</h2>
        <p className="mx-auto mt-3 max-w-md text-base leading-7 text-ink-500">
          Abrimos tu aplicación de correo con el mensaje preparado. Si prefieres,
          también puedes escribirnos directo por WhatsApp.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={waLink('Hola, quiero hablar con un asesor de Aldia Inmobiliaria.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-base font-semibold text-white transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:bg-brand-600 active:scale-[0.98]"
          >
            <PiWhatsappLogo size={18} />
            Ir a WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setEnviado(false)}
            className="rounded-lg border border-ink-900/15 bg-white px-3 py-2 text-base font-semibold text-ink-900 transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:border-ink-900/40 active:scale-[0.98]"
          >
            Escribir otro mensaje
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-2xl bg-surface p-6 md:p-8"
      aria-label="Formulario de contacto"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-700">Nombre</span>
          <input
            type="text"
            autoComplete="name"
            placeholder="Tu nombre completo"
            aria-invalid={!!errors.nombre}
            className={inputCls}
            {...register('nombre')}
          />
          <Error msg={errors.nombre?.message} />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-700">Correo</span>
          <input
            type="email"
            autoComplete="email"
            placeholder="nombre@correo.com"
            aria-invalid={!!errors.email}
            className={inputCls}
            {...register('email')}
          />
          <Error msg={errors.email?.message} />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-700">
            Teléfono <span className="font-normal text-ink-300">(opcional)</span>
          </span>
          <input
            type="tel"
            autoComplete="tel"
            placeholder="310 000 0000"
            aria-invalid={!!errors.telefono}
            className={inputCls}
            {...register('telefono')}
          />
          <Error msg={errors.telefono?.message} />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-sm font-semibold text-ink-700">Me interesa</span>
          <select
            aria-invalid={!!errors.interes}
            className={inputCls}
            {...register('interes')}
          >
            <option value="" disabled>
              Elige una opción
            </option>
            <option>Comprar un inmueble</option>
            <option>Arrendar un inmueble</option>
            <option>Vender o arrendar mi inmueble</option>
            <option>Otro tema</option>
          </select>
          <Error msg={errors.interes?.message} />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-1.5 block text-sm font-semibold text-ink-700">Mensaje</span>
        <textarea
          rows={5}
          placeholder="Cuéntanos qué buscas: zona, presupuesto, fechas."
          aria-invalid={!!errors.mensaje}
          className={`${inputCls} resize-y`}
          {...register('mensaje')}
        />
        <Error msg={errors.mensaje?.message} />
      </label>

      <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="text-sm leading-6 text-ink-500">
          Al enviar aceptas nuestra política de tratamiento de datos personales.
        </p>
        <button
          type="submit"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-base font-semibold text-white shadow-[0_8px_24px_rgba(254,102,2,0.28)] transition-all duration-700 ease-[var(--ease)] hover:-translate-y-px hover:bg-brand-600 active:scale-[0.98]"
        >
          <PiPaperPlaneTilt size={18} />
          Enviar mensaje
        </button>
      </div>
    </form>
  );
}
