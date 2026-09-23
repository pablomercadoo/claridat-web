import { createFileRoute, Link } from '@tanstack/react-router'
import { useI18n } from '#/lib/i18n'
import { buttonVariants } from '#/components/ui/button'
import teamRodrigo from '#/assets/team-rodrigo.jpg'
import teamPablo from '#/assets/team-pablo.jpg'

const teamPhotos = [teamRodrigo, teamPablo]

export const Route = createFileRoute('/nosotros')({
  head: () => ({
    meta: [
      { title: 'Nosotros | Claridat' },
      {
        name: 'description',
        content: 'Conoce quiénes somos, nuestro enfoque, principios y el equipo detrás de Claridat.',
      },
      { name: 'twitter:card', content: 'summary' },
      { property: 'og:title', content: 'Nosotros | Claridat' },
      {
        property: 'og:description',
        content: 'Quiénes somos, nuestro enfoque, principios y equipo.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://claridat.com.mx/nosotros' },
    ],
    links: [{ rel: 'canonical', href: 'https://claridat.com.mx/nosotros' }],
  }),
  component: Nosotros,
})

function Nosotros() {
  const { t } = useI18n()

  return (
    <div>
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="font-display text-4xl font-semibold text-[var(--color-primary)]">{t.nosotros.heroTitle}</h1>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[var(--color-muted-foreground)]">
          {t.nosotros.heroSubtitle}
        </p>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <section>
          <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.quienesTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.quienesText1}</p>
          <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.quienesText2}</p>
        </section>

        <section className="mt-14 rounded-2xl bg-[var(--color-muted)] p-8">
          <h2 className="font-display text-xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.enfoqueTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.enfoqueText1}</p>
          <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.enfoqueText2}</p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.principiosTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.nosotros.principios.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[var(--color-border)] p-6">
                <h3 className="font-display text-lg font-semibold text-[var(--color-primary)]">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-foreground)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.alcanceTitle}
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.alcanceText}</p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.equipoTitle}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {t.nosotros.equipo.map((member, i) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-4 rounded-2xl border border-[var(--color-border)] p-8 text-center"
              >
                <img
                  src={teamPhotos[i]}
                  alt={member.name}
                  className="h-32 w-32 rounded-full object-cover ring-4 ring-[var(--color-muted)]"
                />
                <div>
                  <div className="font-display text-lg font-semibold text-[var(--color-primary)]">
                    {member.name}
                  </div>
                  <div className="text-sm text-[var(--color-muted-foreground)]">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link to="/servicios" className={buttonVariants({ variant: 'primary', size: 'lg' })}>
            {t.nosotros.ctaText}
          </Link>
        </div>
      </div>
    </div>
  )
}
