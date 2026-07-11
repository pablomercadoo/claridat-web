import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from '#/components/logo'
import { LanguageToggle } from '#/components/language-toggle'
import { buttonVariants } from '#/components/ui/button'
import { useI18n } from '#/lib/i18n'

const navLinkClass =
  'text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors'

export function SiteHeader() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/nosotros', label: t.nav.nosotros },
    { to: '/servicios', label: t.nav.servicios },
    { to: '/contacto', label: t.nav.contacto },
  ] as const

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={navLinkClass}
              activeProps={{ className: 'text-[var(--color-accent)]' }}
              activeOptions={{ exact: link.to === '/' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageToggle />
          <Link to="/contacto" className={buttonVariants({ variant: 'primary', size: 'sm' })}>
            {t.nav.cta}
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-full p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <LanguageToggle />
            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className={buttonVariants({ variant: 'primary', size: 'sm' })}
            >
              {t.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
