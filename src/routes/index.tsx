import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'motion/react'
import {
  FileWarning,
  Copy,
  EyeOff,
  Clock,
  Database,
  Layers,
  RefreshCw,
  BarChart3,
  TrendingUp,
  Gauge,
  Wallet,
  Users,
  Settings2,
  Compass,
  ChevronRight,
  ChevronDown,
} from 'lucide-react'
import { useI18n } from '#/lib/i18n'
import { buttonVariants } from '#/components/ui/button'
import { Card, CardTitle, CardDescription } from '#/components/ui/card'
import iconDark from '#/assets/claridat-icon-dark.png'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'Claridat | Datos claros. Decisiones inteligentes.' },
      {
        name: 'description',
        content:
          'Claridat ayuda a empresas e instituciones a ordenar, integrar y analizar su información mediante soluciones de datos, automatización y Business Intelligence.',
      },
      { name: 'twitter:card', content: 'summary' },
      { property: 'og:title', content: 'Claridat | Datos claros. Decisiones inteligentes.' },
      {
        property: 'og:description',
        content: 'Convertimos información dispersa en herramientas de control, análisis y decisión.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://claridat.com.mx/' },
    ],
    links: [{ rel: 'canonical', href: 'https://claridat.com.mx/' }],
  }),
  component: Home,
})

const problemIcons = [FileWarning, Copy, EyeOff, Clock]
const capabilityIcons = [Database, Layers, RefreshCw, BarChart3, TrendingUp, Gauge]
const areaIcons = [TrendingUp, Wallet, Users, Settings2, Compass]

function Home() {
  const { t } = useI18n()

  return (
    <div>
      {/* 1. Hero */}
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
            {t.home.heroTitleLine1}
            <br />
            {t.home.heroTitleLine2}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted-foreground)]">
            {t.home.heroDescription}
          </p>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-[var(--color-muted-foreground)]">
            {t.home.heroSupporting}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contacto" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
              {t.home.ctaPrimary}
            </Link>
            <a href="#proceso" className={buttonVariants({ variant: 'outline', size: 'lg' })}>
              {t.home.ctaSecondary}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-1 items-center justify-center"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 -z-10 rounded-full bg-[var(--color-accent)]/10 blur-2xl" />
            <img src={iconDark} alt="Claridat" className="h-40 w-auto md:h-56" />
          </div>
        </motion.div>
      </section>

      {/* 2. El problema */}
      <section className="border-y border-[var(--color-border)] bg-[var(--color-muted)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="max-w-2xl font-display text-3xl font-semibold text-[var(--color-primary)]">
            {t.home.problemTitle}
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted-foreground)]">
            {t.home.problemIntro}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {t.home.problemItems.map((item, i) => {
              const Icon = problemIcons[i]
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex gap-4 rounded-2xl border border-[var(--color-border)] bg-white p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[var(--color-primary)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. Qué hace Claridat */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">{t.home.whatTitle}</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-[var(--color-muted-foreground)]">{t.home.whatText}</p>
        <blockquote className="mx-auto mt-8 max-w-xl border-l-4 border-[var(--color-accent)] pl-5 text-left font-display text-lg font-medium italic text-[var(--color-primary)]">
          “{t.home.whatQuote}”
        </blockquote>
      </section>

      {/* 4. Cómo trabajamos */}
      <section id="proceso" className="scroll-mt-24 bg-[var(--color-muted)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">{t.home.processTitle}</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-muted-foreground)]">{t.home.processIntro}</p>

          <div className="mt-12 grid gap-6 md:grid-cols-5">
            {t.home.processStages.map((stage, i) => (
              <motion.div
                key={stage.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="rounded-2xl border border-[var(--color-border)] bg-white p-6"
              >
                <span className="font-display text-2xl font-semibold text-[var(--color-accent)]">{stage.n}</span>
                <h3 className="mt-2 font-display text-base font-semibold text-[var(--color-primary)]">{stage.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{stage.short}</p>
                <p className="mt-3 text-xs leading-relaxed text-[var(--color-muted-foreground)]/80">{stage.detail}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/servicios" className={buttonVariants({ variant: 'ghost', size: 'default' })}>
              {t.home.processCta}
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Capacidades */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">{t.home.capabilitiesTitle}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {t.home.capabilities.map((item, i) => {
            const Icon = capabilityIcons[i]
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
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

      {/* 6. Ejemplo visual del proceso */}
      <section className="bg-[var(--color-primary)] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-display text-3xl font-semibold">{t.home.diagramTitle}</h2>
          <div className="mt-12 flex flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-4">
            <div className="flex-1 rounded-2xl bg-white/10 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {t.home.diagramOriginLabel}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.home.diagramOrigin.map((label) => (
                  <li key={label} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <ChevronDown className="mx-auto h-6 w-6 shrink-0 text-white/50 md:hidden" />
            <ChevronRight className="mx-auto hidden h-6 w-6 shrink-0 text-white/50 md:block" />

            <div className="flex-1 rounded-2xl border border-white/20 bg-white/5 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-chart-1)]">
                {t.home.diagramMiddleLabel}
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.home.diagramMiddle.map((label) => (
                  <li key={label} className="rounded-full bg-[var(--color-accent)]/20 px-3 py-1 text-sm text-white">
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            <ChevronDown className="mx-auto h-6 w-6 shrink-0 text-white/50 md:hidden" />
            <ChevronRight className="mx-auto hidden h-6 w-6 shrink-0 text-white/50 md:block" />

            <div className="flex-1 rounded-2xl bg-white/10 p-6">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/60">
                {t.home.diagramResultLabel}
              </div>
              <p className="mt-3 text-sm text-white/80">{t.home.diagramResultIntro}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {t.home.diagramResult.map((label) => (
                  <li key={label} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Soluciones por área */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">{t.home.areasTitle}</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {t.home.areas.map((item, i) => {
            const Icon = areaIcons[i]
            return (
              <div key={item.title} className="rounded-2xl border border-[var(--color-border)] p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Icon size={18} />
                </div>
                <h3 className="font-display text-base font-semibold text-[var(--color-primary)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 8. Por qué Claridat */}
      <section className="bg-[var(--color-primary)] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-3xl font-semibold">{t.home.whyTitle}</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {t.home.whyItems.map((item) => (
              <div key={item.title}>
                <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Diagnóstico */}
      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">{t.home.diagnosisTitle}</h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-[var(--color-muted-foreground)]">
          {t.home.diagnosisText1}
        </p>
        <p className="mx-auto mt-3 max-w-xl leading-relaxed text-[var(--color-muted-foreground)]">
          {t.home.diagnosisText2}
        </p>
        <Link to="/contacto" className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8`}>
          {t.home.diagnosisCta}
        </Link>
      </section>

      {/* 10. CTA final */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-muted)]">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-3xl font-semibold text-[var(--color-primary)]">
            {t.home.finalCtaTitle}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted-foreground)]">{t.home.finalCtaSubtitle}</p>
          <Link to="/contacto" className={`${buttonVariants({ variant: 'primary', size: 'lg' })} mt-8`}>
            {t.home.ctaPrimary}
          </Link>
        </div>
      </section>
    </div>
  )
}
