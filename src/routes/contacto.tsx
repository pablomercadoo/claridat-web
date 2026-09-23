import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { useI18n } from '#/lib/i18n'
import { Button } from '#/components/ui/button'

export const Route = createFileRoute('/contacto')({
  head: () => ({
    meta: [
      { title: 'Contacto | Claridat' },
      {
        name: 'description',
        content: 'Contáctanos por correo, WhatsApp o mediante nuestro formulario. Estamos en Mérida, Yucatán.',
      },
      { name: 'twitter:card', content: 'summary' },
      { property: 'og:title', content: 'Contacto | Claridat' },
      {
        property: 'og:description',
        content: 'Escríbenos por correo, WhatsApp o el formulario de contacto.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://claridat.com.mx/contacto' },
    ],
    links: [{ rel: 'canonical', href: 'https://claridat.com.mx/contacto' }],
  }),
  component: Contacto,
})

const initialForm = { name: '', company: '', email: '', phone: '', area: '', message: '' }

type Status = 'idle' | 'sending' | 'success' | 'error'

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

function Contacto() {
  const { t } = useI18n()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState<Status>('idle')

  function handleChange(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': 'contacto', ...form }),
      })
      if (res.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const whatsappText = encodeURIComponent(t.contacto.whatsappMessage)

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="font-display text-4xl font-semibold text-[var(--color-primary)]">{t.contacto.heroTitle}</h1>
      <p className="mt-4 max-w-xl text-[var(--color-muted-foreground)]">{t.contacto.heroText}</p>

      <div className="mt-14 grid gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <a
            href="mailto:contacto@claridat.com.mx"
            className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                {t.contacto.emailLabel}
              </div>
              <div className="font-medium text-[var(--color-primary)]">contacto@claridat.com.mx</div>
            </div>
          </a>

          <a
            href={`https://wa.me/529996352712?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                {t.contacto.whatsappLabel} <span className="sr-only">{t.contacto.opensNewTab}</span>
              </div>
              <div className="font-medium text-[var(--color-primary)]">+52 999 635 2712</div>
            </div>
          </a>

          <a
            href={`https://wa.me/529995112217?text=${whatsappText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-[var(--color-border)] p-5 transition-colors hover:border-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
              <MessageCircle size={20} />
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-wide text-[var(--color-muted-foreground)]">
                {t.contacto.whatsappLabel} <span className="sr-only">{t.contacto.opensNewTab}</span>
              </div>
              <div className="font-medium text-[var(--color-primary)]">+52 999 511 2217</div>
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

        <form
          name="contacto"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          noValidate={false}
        >
          <p className="text-sm leading-relaxed text-[var(--color-muted-foreground)]">{t.contacto.formIntro}</p>

          <div>
            <label htmlFor="contacto-name" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formName}
            </label>
            <input
              id="contacto-name"
              name="name"
              required
              value={form.name}
              onChange={handleChange('name')}
              placeholder={t.contacto.formNamePlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="contacto-company" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formCompany}
            </label>
            <input
              id="contacto-company"
              name="company"
              value={form.company}
              onChange={handleChange('company')}
              placeholder={t.contacto.formCompanyPlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="contacto-email" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formEmail}
            </label>
            <input
              id="contacto-email"
              name="email"
              required
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              placeholder={t.contacto.formEmailPlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="contacto-phone" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formPhone}
            </label>
            <input
              id="contacto-phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange('phone')}
              placeholder={t.contacto.formPhonePlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          <div>
            <label htmlFor="contacto-area" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formArea}
            </label>
            <select
              id="contacto-area"
              name="area"
              required
              value={form.area}
              onChange={handleChange('area')}
              className="w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            >
              <option value="" disabled>
                {t.contacto.formArea}
              </option>
              {t.contacto.areaOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contacto-message" className="mb-1.5 block text-sm font-medium text-[var(--color-primary)]">
              {t.contacto.formMessage}
            </label>
            <textarea
              id="contacto-message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange('message')}
              placeholder={t.contacto.formMessagePlaceholder}
              className="w-full rounded-lg border border-[var(--color-border)] px-4 py-2.5 text-sm outline-none focus:border-[var(--color-accent)]"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="mt-2" disabled={status === 'sending'}>
            {status === 'sending' ? t.contacto.formSending : t.contacto.formSubmit}
          </Button>

          <div role="status" aria-live="polite" className="min-h-5 text-sm">
            {status === 'success' && (
              <p className="text-[var(--color-accent)]">{t.contacto.formSuccess}</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">{t.contacto.formError}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
