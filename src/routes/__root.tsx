import { Outlet, createRootRoute, HeadContent } from '@tanstack/react-router'

import '../styles.css'
import { I18nProvider } from '#/lib/i18n'
import { SiteHeader } from '#/components/site-header'
import { SiteFooter } from '#/components/site-footer'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Claridat | Datos claros. Decisiones inteligentes.' },
      {
        name: 'description',
        content:
          'Claridat ayuda a empresas e instituciones a ordenar, integrar y analizar su información mediante soluciones de datos, automatización y Business Intelligence.',
      },
      { name: 'twitter:card', content: 'summary' },
      { property: 'og:site_name', content: 'Claridat' },
      { property: 'og:title', content: 'Claridat | Datos claros. Decisiones inteligentes.' },
      {
        property: 'og:description',
        content: 'Convertimos información dispersa en herramientas de control, análisis y decisión.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'es_MX' },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <I18nProvider>
      <HeadContent />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </I18nProvider>
  )
}
