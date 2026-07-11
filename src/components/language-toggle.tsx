import { useI18n } from '#/lib/i18n'

export function LanguageToggle() {
  const { lang, setLang } = useI18n()

  return (
    <div className="inline-flex items-center rounded-full border border-[var(--color-border)] p-0.5 text-xs font-medium">
      <button
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === 'es' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-muted-foreground)]'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          lang === 'en' ? 'bg-[var(--color-primary)] text-white' : 'text-[var(--color-muted-foreground)]'
        }`}
      >
        EN
      </button>
    </div>
  )
}
