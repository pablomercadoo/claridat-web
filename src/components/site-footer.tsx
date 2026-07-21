import { Link } from '@tanstack/react-router'
import { Mail, MapPin, MessageCircle } from 'lucide-react'
import { Logo } from '#/components/logo'
import { useI18n } from '#/lib/i18n'

export function SiteFooter() {
  const { t } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-primary)] text-[var(--color-primary-foreground)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <Logo variant="light" />
          <p className="mt-4 max-w-xs text-sm text-white/70">
            {t.home.heroSubtitle}
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <span className="mb-1 font-display font-semibold text-white/90">{t.nav.servicios}</span>
          <Link to="/" className="text-white/70 hover:text-white transition-colors">{t.nav.home}</Link>
          <Link to="/nosotros" className="text-white/70 hover:text-white transition-colors">{t.nav.nosotros}</Link>
          <Link to="/servicios" className="text-white/70 hover:text-white transition-colors">{t.nav.servicios}</Link>
          <Link to="/contacto" className="text-white/70 hover:text-white transition-colors">{t.nav.contacto}</Link>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="mb-1 font-display font-semibold text-white/90">{t.nav.contacto}</span>
          <a href="mailto:contacto@claridat.com.mx" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <Mail size={16} /> contacto@claridat.com.mx
          </a>
          <a
            href="https://wa.me/529996352712"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <MessageCircle size={16} /> +52 999 635 2712
          </a>
          <a
            href="https://wa.me/529995112217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <MessageCircle size={16} /> +52 999 511 2217
          </a>
          <span className="flex items-center gap-2 text-white/70">
            <MapPin size={16} /> {t.contacto.locationValue}
          </span>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/50">
        © {year} Claridat. {t.footer.rights}
      </div>
    </footer>
  )
}
