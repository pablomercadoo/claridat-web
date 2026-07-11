import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { useI18n } from '#/lib/i18n'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/contacto')({
  head: () => ({
    meta: [
      { title: 'Contacto — Claridat' },
      {
        name: 'description',
        content: 'Contáctanos por correo, WhatsApp o mediante nuestro formulario. Estamos en Mérida, Yucatán.',
      },
      { property: 'og:title', content: 'Contacto — Claridat' },
      {
        property: 'og:description',
        content: 'Escríbenos por correo, WhatsApp o el formulario de contacto.',
      },
    ],
  }),
  component: Contacto,
})

function Contacto() {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto de ${form.name || 'sitio web'} — Claridat`)
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmpresa: ${form.company}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:rodrigo@claridat.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-4xl font-semibold text-[var(--color-primary)]">{t.contacto.title}</h1>
      <p className="mt-4 max-w-xl text-[var(--color-muted-foreground)]">{t.contacto.subtitle}</p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <a
            href="mailto:rodrigo@claridat.com"
            className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                {t.contacto.emailLabel}
              </div>
              <div className="font-medium text-[var(--color-primary)]">rodrigo@claridat.com</div>
            </div>
          </a>

          <a
            href="https://wa.me/529992689654"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                {t.contacto.whatsappLabel}
              </div>
              <div className="font-medium text-[var(--color-primary)]">+52 999 268 9654</div>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] p-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                {t.contacto.locationLabel}
              </div>
              <div className="font-medium text-[var(--color-primary)]">{t.contacto.locationValue}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formName}
            </label>
            <input
              required
              value={form.name}
              onChange={handleChange('name')}
              placeholder={t.contacto.formNamePlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formCompany}
            </label>
            <input
              value={form.company}
              onChange={handleChange('company')}
              placeholder={t.contacto.formCompanyPlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formEmail}
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              placeholder={t.contacto.formEmailPlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formMessage}
            </label>
            <textarea
              required
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
              placeholder={t.contacto.formMessagePlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>
          <Button type="submit" variant="primary" size="lg" className="mt-2">
            {t.contacto.formSubmit}
          </Button>
        </form>
      </div>
    </div>
  )
}
