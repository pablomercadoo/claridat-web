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
      { title: 'Claridat — Consultoría de datos' },
      {
        name: 'description',
        content:
          'Consultoría de datos e inteligencia de negocios en Mérida, Yucatán. De caos a claridad.',
      },
      { property: 'og:title', content: 'Claridat — Consultoría de datos' },
      {
        property: 'og:description',
        content: 'Convertimos datos dispersos en decisiones accionables para empresas y gobierno.',
      },
      { property: 'og:type', content: 'website' },
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
