import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useI18n } from '#/lib/i18n'
import { buttonVariants } from '#/components/ui/button'

export const Route = createFileRoute('/servicios')({
  head: () => ({
    meta: [
      { title: 'Servicios — Claridat Experience' },
      {
        name: 'description',
        content:
          'Conoce el pipeline Claridat Experience de 5 etapas y nuestros paquetes STARTER, GROWTH, DECISION y PARTNER.',
      },
      { property: 'og:title', content: 'Servicios — Claridat Experience' },
      {
        property: 'og:description',
        content: 'Pipeline de 5 etapas y 4 paquetes de consultoría de datos.',
      },
    ],
  }),
  component: Servicios,
})

function Servicios() {
  const { t } = useI18n()

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-semibold text-[var(--color-primary)]">{t.servicios.title}</h1>
        <h2 className="mt-6 font-display text-xl font-semibold text-[var(--color-accent)]">
          {t.servicios.introTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--color-muted-foreground)]">
          {t.servicios.introText}
        </p>
      </section>

      {/* Timeline de 5 etapas */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <h2 className="mb-10 text-center font-display text-2xl font-semibold text-[var(--color-primary)]">
          {t.servicios.timelineTitle}
        </h2>
        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-[var(--color-border)] md:left-1/2 md:block" />
          <div className="flex flex-col gap-10">
            {t.servicios.timeline.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 md:pl-0"
              >
                <div className="absolute left-5 top-1.5 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--color-accent)] text-xs font-semibold text-white md:left-1/2">
                  {i + 1}
                </div>
                <div
                  className={`max-w-sm rounded-2xl border border-[var(--color-border)] bg-white p-6 md:w-[calc(50%-2.5rem)] ${
                    i % 2 === 1 ? 'md:ml-[calc(50%+2.5rem)]' : ''
                  }`}
                >
                  <div className="font-display text-lg font-semibold text-[var(--color-primary)]">
                    {stage.name}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">
                    {stage.desc}
                  </p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
                    {stage.entregables}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquetes */}
      <section className="bg-[var(--color-muted)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-2xl font-semibold text-[var(--color-primary)]">
            {t.servicios.packagesTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-[var(--color-muted-foreground)]">
            {t.servicios.packagesSubtitle}
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.servicios.packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col rounded-2xl border border-[var(--color-border)] bg-white p-6"
              >
                <span className="font-display text-lg font-bold tracking-wide text-[var(--color-primary)]">
                  {pkg.name}
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-wide text-[var(--color-accent)]">
                  {pkg.stages}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{pkg.desc}</p>
                <p className="mt-3 text-xs italic text-[var(--color-muted-foreground)]">{pkg.who}</p>
                <Link
                  to="/contacto"
                  className={`${buttonVariants({ variant: 'outline', size: 'sm' })} mt-6`}
                >
                  {t.servicios.quoteCta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
