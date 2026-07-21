import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { Search, Layers, LineChart } from 'lucide-react'
import { useI18n } from '#/lib/i18n'
import { buttonVariants } from '#/components/ui/button'
import { Card, CardTitle, CardDescription } from '#/components/ui/card'
import iconDark from '#/assets/claridat-icon-dark.png'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Claridat — De caos a claridad' },
      {
        name: 'description',
        content:
          'Consultoría de datos e inteligencia de negocios en Mérida, Yucatán. Convertimos datos dispersos en decisiones accionables.',
      },
      { property: 'og:title', content: 'Claridat — De caos a claridad' },
      {
        property: 'og:description',
        content: 'Consultoría de datos e inteligencia de negocios en Mérida, Yucatán.',
      },
    ],
  }),
  component: Home,
})

const whatWeDoIcons = [Search, Layers, LineChart]

function Home() {
  const { t } = useI18n()

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <span className="font-display text-sm font-medium uppercase tracking-wider text-[var(--color-accent)]">
            {t.home.heroEyebrow}
          </span>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-[var(--color-primary)] md:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            {t.home.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contacto" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              {t.home.ctaPrimary}
            </Link>
            <Link to="/servicios" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              {t.home.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="flex items-center justify-center rounded-3xl bg-[var(--color-muted)] p-16">
            <motion.img
              src={iconDark}
              alt="Claridat"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
              className="h-40 w-auto md:h-52"
            />
          </div>
        </motion.div>
      </section>

      {/* Strip de datos clave */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-muted)]">
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-8 px-6 py-10">
          {[
            { label: t.home.stripSede, value: t.home.stripSedeValue },
            { label: t.home.stripMercado, value: t.home.stripMercadoValue },
            { label: t.home.stripPipeline, value: t.home.stripPipelineValue },
          ].map((item) => (
            <div key={item.label}>
              <div className="font-display text-xl font-semibold text-[var(--color-primary)]">
                {item.value}
              </div>
              <div className="text-sm text-[var(--color-muted-foreground)]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Qué hacemos */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">
          {t.home.whatWeDoTitle}
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.home.whatWeDoItems.map((item, i) => {
            const Icon = whatWeDoIcons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Icon size={20} />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Por qué Claridat */}
      <section className="bg-[var(--color-primary)] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold">{t.home.whyTitle}</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {t.home.whyItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">
          {t.home.finalCtaTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted-foreground)]">
          {t.home.finalCtaSubtitle}
        </p>
        <Link to="/contacto" className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8`}>
          {t.home.ctaPrimary}
        </Link>
      </section>
    </div>
  )
}
