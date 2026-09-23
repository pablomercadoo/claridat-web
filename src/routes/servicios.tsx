import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { CheckCircle2 } from 'lucide-react'
import { useI18n } from '#/lib/i18n'
import { buttonVariants } from '#/components/ui/button'

export const Route = createFileRoute('/servicios')({
  head: () => ({
    meta: [
      { title: 'Servicios de datos e inteligencia de negocios | Claridat' },
      {
        name: 'description',
        content:
          'Diagnóstico, estructuración, integración, análisis y evolución de datos: conoce el proceso de trabajo de Claridat.',
      },
      { name: 'twitter:card', content: 'summary' },
      { property: 'og:title', content: 'Servicios de datos e inteligencia de negocios | Claridat' },
      {
        property: 'og:description',
        content: 'Un proceso de 5 etapas para pasar de información dispersa a control y decisiones.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://claridat.com.mx/servicios' },
    ],
    links: [{ rel: 'canonical', href: 'https://claridat.com.mx/servicios' }],
  }),
  component: Servicios,
})

function Servicios() {
  const { t } = useI18n()

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-semibold text-[var(--color-primary)]">{t.servicios.heroTitle}</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--color-muted-foreground)]">
          {t.servicios.heroSubtitle}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[var(--color-muted-foreground)]">
          {t.servicios.intro}
        </p>
      </section>

      {/* Proceso detallado */}
      <section className="mx-auto max-w-5xl px-6 pb-12">
        <h2 className="mb-10 text-center font-display text-2xl font-semibold text-[var(--color-primary)]">
          {t.servicios.timelineTitle}
        </h2>
        <div className="flex flex-col gap-10">
          {t.servicios.timeline.map((stage, i) => (
            <motion.div
              key={stage.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-[var(--color-border)] bg-white p-6 md:p-8"
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-display text-2xl font-semibold text-[var(--color-accent)]">{stage.n}</span>
                <h3 className="font-display text-xl font-semibold text-[var(--color-primary)]">{stage.name}</h3>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                {stage.objetivo}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    {t.servicios.activitiesLabel}
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {stage.actividades.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-[var(--color-muted-foreground)]">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-accent)]" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                    {t.servicios.deliverablesLabel}
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {stage.entregables.map((e) => (
                      <li key={e} className="flex items-start gap-2 text-sm text-[var(--color-muted-foreground)]">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[var(--color-chart-1)]" />
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs italic text-[var(--color-muted-foreground)]">
          {t.servicios.deliverablesNote}
        </p>
      </section>

      {/* CTA final */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-muted)]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">{t.servicios.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted-foreground)]">{t.servicios.ctaText}</p>
          <Link to="/contacto" className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8`}>
            {t.servicios.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
}
