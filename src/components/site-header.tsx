import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import { Logo } from '#/components/logo'
import { LanguageToggle } from '#/components/language-toggle'
import { buttonVariants } from '#/components/ui/button'
import { useI18n } from '#/lib/i18n'

const navLinkClass =
  'text-sm font-medium text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] rounded-sm'

export function SiteHeader() {
  const { t } = useI18n()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/' as const, hash: undefined, label: t.nav.home, exact: true },
    { to: '/' as const, hash: 'proceso', label: t.nav.howWeWork, exact: false },
    { to: '/servicios' as const, hash: undefined, label: t.nav.solutions, exact: false },
    { to: '/nosotros' as const, hash: undefined, label: t.nav.nosotros, exact: false },
    { to: '/contacto' as const, hash: undefined, label: t.nav.contacto, exact: false },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6 py-3.5">
        <Link to="/" className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] rounded-sm">
          <Logo variant="dark" />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={`${link.to}-${link.hash ?? ''}`}
              to={link.to}
              hash={link.hash}
              className={navLinkClass}
              activeProps={{ className: 'text-[var(--color-accent)]' }}
              activeOptions={{ exact: link.exact }}
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
          className="flex items-center justify-center rounded-full p-2 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-[var(--color-border)] px-6 py-4 md:hidden">
          <nav aria-label="Principal" className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={`${link.to}-${link.hash ?? ''}`}
                to={link.to}
                hash={link.hash}
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
