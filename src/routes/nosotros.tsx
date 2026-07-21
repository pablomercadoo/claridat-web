import { createFileRoute } from '@tanstack/react-router'
import { useI18n } from '#/lib/i18n'
import teamRodrigo from '#/assets/team-rodrigo.jpg'
import teamPablo from '#/assets/team-pablo.jpg'

const teamPhotos = [teamRodrigo, teamPablo]

export const Route = createFileRoute('/nosotros')({
  head: () => ({
    meta: [
      { title: 'Nosotros — Claridat' },
      {
        name: 'description',
        content: 'Conoce quiénes somos, nuestro objetivo, visión y el equipo detrás de Claridat.',
      },
      { property: 'og:title', content: 'Nosotros — Claridat' },
      {
        property: 'og:description',
        content: 'Quiénes somos, objetivo, visión y equipo de Claridat.',
      },
    ],
  }),
  component: Nosotros,
})

function Nosotros() {
  const { t } = useI18n()

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-display text-4xl font-semibold text-[var(--color-primary)]">{t.nosotros.title}</h1>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
          {t.nosotros.quienesTitle}
        </h2>
        <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.quienesText}</p>
      </section>

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        <section className="rounded-2xl border border-[var(--color-border)] p-6">
          <h2 className="font-display text-xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.objetivoTitle}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.objetivoText}</p>
        </section>
        <section className="rounded-2xl border border-[var(--color-border)] p-6">
          <h2 className="font-display text-xl font-semibold text-[var(--color-primary)]">
            {t.nosotros.visionTitle}
          </h2>
          <p className="mt-3 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.visionText}</p>
        </section>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-semibold text-[var(--color-primary)]">
          {t.nosotros.mercadoTitle}
        </h2>
        <p className="mt-4 leading-relaxed text-[var(--color-muted-foreground)]">{t.nosotros.mercadoText}</p>
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
    </div>
  )
}
