import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

const STORAGE_KEY = 'claridat-lang'

export const dictionary = {
  es: {
    nav: {
      home: 'Inicio',
      nosotros: 'Nosotros',
      servicios: 'Servicios',
      contacto: 'Contacto',
      cta: 'Agendar diagnóstico',
    },
    home: {
      metaTitle: 'Claridat — De caos a claridad',
      metaDescription:
        'Consultoría de datos e inteligencia de negocios en Mérida, Yucatán. Convertimos datos dispersos en decisiones accionables.',
      heroEyebrow: 'Consultoría de datos e inteligencia de negocios',
      heroTitle: 'De caos a claridad',
      heroSubtitle:
        'Ayudamos a empresas y gobierno a ordenar sus datos, construir control real sobre su información y tomar decisiones con evidencia, no con intuición.',
      ctaPrimary: 'Agendar diagnóstico',
      ctaSecondary: 'Ver servicios',
      stripSede: 'Sede',
      stripSedeValue: 'Mérida',
      stripMercado: 'Mercado',
      stripMercadoValue: 'Privado + gobierno',
      stripPaquetes: 'Paquetes',
      stripPaquetesValue: '4 a la medida',
      stripPipeline: 'Pipeline',
      stripPipelineValue: '5 etapas',
      whatWeDoTitle: 'Qué hacemos',
      whatWeDoItems: [
        {
          title: 'Diagnóstico',
          desc: 'Revisamos cómo se genera, guarda y usa tu información hoy, y detectamos dónde se pierde valor.',
        },
        {
          title: 'Estructuración',
          desc: 'Ordenamos y conectamos tus fuentes de datos en una base sólida, confiable y lista para crecer.',
        },
        {
          title: 'Decisiones',
          desc: 'Convertimos esa base en reportes, análisis y modelos que sostienen decisiones de negocio reales.',
        },
      ],
      whyTitle: 'Por qué Claridat',
      whyItems: [
        {
          title: 'Enfoque de proceso, no de proyecto único',
          desc: 'Trabajamos con un pipeline de 5 etapas pensado para madurar tu operación de datos de forma progresiva.',
        },
        {
          title: 'Experiencia en sector privado y gobierno',
          desc: 'Entendemos las particularidades de operar con datos tanto en empresas como en instituciones públicas.',
        },
        {
          title: 'Sin humo: entregables concretos',
          desc: 'Cada etapa tiene entregables claros, sin jerga innecesaria ni promesas vacías.',
        },
      ],
      finalCtaTitle: '¿Listo para ver claro en tus datos?',
      finalCtaSubtitle: 'Agenda un diagnóstico inicial sin compromiso y platiquemos sobre tu operación.',
    },
    nosotros: {
      metaTitle: 'Nosotros — Claridat',
      metaDescription: 'Conoce quiénes somos, nuestro objetivo, visión y el equipo detrás de Claridat.',
      title: 'Nosotros',
      quienesTitle: 'Quiénes somos',
      quienesText:
        'Claridat es una consultoría de datos e inteligencia de negocios fundada para ayudar a organizaciones a dejar de operar a ciegas. Combinamos experiencia técnica en datos con una visión de negocio pragmática, para que cada proyecto termine en decisiones mejor informadas, no solo en dashboards.',
      objetivoTitle: 'Objetivo',
      objetivoText: 'Transformar datos dispersos en decisiones accionables.',
      visionTitle: 'Visión',
      visionText:
        'Ser el partner de datos de referencia para empresas y gobierno en el sureste de México, con expansión nacional.',
      mercadoTitle: 'Mercado y geografía',
      mercadoText:
        'Atendemos organizaciones privadas y entidades de gobierno, con base en Mérida, Yucatán, y foco inicial en el sureste de México.',
      equipoTitle: 'Equipo',
      equipo: [
        { name: 'Rodrigo Escalante Castillo', role: 'Cofundador' },
        { name: 'Pablo Mercado Martínez', role: 'Cofundador' },
      ],
    },
    servicios: {
      metaTitle: 'Servicios — Claridat Experience',
      metaDescription:
        'Conoce el pipeline Claridat Experience de 5 etapas y nuestros paquetes STARTER, GROWTH, DECISION y PARTNER.',
      title: 'Servicios',
      introTitle: 'El Claridat Experience',
      introText:
        'Un pipeline de 5 etapas diseñado para llevar tu operación de datos de la dispersión al control, y del control a la toma de decisiones sostenida.',
      timelineTitle: 'Nuestro proceso',
      timeline: [
        {
          name: 'Diagnóstico',
          desc: 'Evaluamos el estado actual de tus datos, sistemas y procesos.',
          entregables: 'Reporte de hallazgos y mapa de oportunidades.',
        },
        {
          name: 'Estructuración',
          desc: 'Diseñamos y ordenamos la arquitectura de datos necesaria.',
          entregables: 'Modelo de datos y flujos de integración documentados.',
        },
        {
          name: 'Control',
          desc: 'Implementamos gobierno, calidad y monitoreo continuo de datos.',
          entregables: 'Tableros de calidad y reglas de gobierno de datos.',
        },
        {
          name: 'Análisis',
          desc: 'Construimos análisis e indicadores que responden preguntas de negocio.',
          entregables: 'Dashboards y reportes analíticos a la medida.',
        },
        {
          name: 'Mantenimiento',
          desc: 'Damos soporte continuo para que la operación de datos siga funcionando y evolucione.',
          entregables: 'Soporte periódico y mejoras incrementales.',
        },
      ],
      packagesTitle: 'Paquetes',
      packagesSubtitle: 'Cuatro formas de trabajar con nosotros, según en qué etapa esté tu organización.',
      packages: [
        {
          name: 'STARTER',
          stages: 'Diagnóstico',
          who: 'Organizaciones que aún no saben en qué estado están sus datos.',
          desc: 'Un primer acercamiento para entender dónde estás parado y qué oportunidades existen.',
        },
        {
          name: 'GROWTH',
          stages: 'Diagnóstico + Estructuración',
          who: 'Equipos listos para ordenar su información de forma definitiva.',
          desc: 'Construimos las bases sólidas que tu operación de datos necesita para crecer.',
        },
        {
          name: 'DECISION',
          stages: 'Diagnóstico + Estructuración + Control + Análisis',
          who: 'Organizaciones que quieren pasar de reportes a decisiones basadas en datos.',
          desc: 'Cubrimos todo el camino hasta tener análisis confiables que sostienen decisiones reales.',
        },
        {
          name: 'PARTNER',
          stages: 'Las 5 etapas, de forma continua',
          who: 'Organizaciones que buscan un aliado de datos de largo plazo.',
          desc: 'Acompañamiento integral y continuo a través de todo el pipeline Claridat Experience.',
        },
      ],
      quoteCta: 'Solicitar cotización',
    },
    contacto: {
      metaTitle: 'Contacto — Claridat',
      metaDescription: 'Contáctanos por correo, WhatsApp o mediante nuestro formulario. Estamos en Mérida, Yucatán.',
      title: 'Contacto',
      subtitle: 'Cuéntanos sobre tu organización y agendemos un diagnóstico inicial.',
      emailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Ubicación',
      locationValue: 'Mérida, Yucatán, México',
      formName: 'Nombre',
      formCompany: 'Empresa',
      formEmail: 'Email',
      formMessage: 'Mensaje',
      formSubmit: 'Enviar mensaje',
      formNamePlaceholder: 'Tu nombre',
      formCompanyPlaceholder: 'Nombre de tu empresa',
      formEmailPlaceholder: 'tu@empresa.com',
      formMessagePlaceholder: 'Cuéntanos brevemente qué necesitas...',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      nosotros: 'About',
      servicios: 'Services',
      contacto: 'Contact',
      cta: 'Book a diagnostic',
    },
    home: {
      metaTitle: 'Claridat — From chaos to clarity',
      metaDescription:
        'Data consulting and business intelligence in Mérida, Yucatán. We turn scattered data into actionable decisions.',
      heroEyebrow: 'Data consulting & business intelligence',
      heroTitle: 'From chaos to clarity',
      heroSubtitle:
        'We help companies and government bodies organize their data, build real control over their information, and make decisions backed by evidence, not intuition.',
      ctaPrimary: 'Book a diagnostic',
      ctaSecondary: 'See services',
      stripSede: 'Based in',
      stripSedeValue: 'Mérida',
      stripMercado: 'Market',
      stripMercadoValue: 'Private + government',
      stripPaquetes: 'Packages',
      stripPaquetesValue: '4 tailored options',
      stripPipeline: 'Pipeline',
      stripPipelineValue: '5 stages',
      whatWeDoTitle: 'What we do',
      whatWeDoItems: [
        {
          title: 'Diagnosis',
          desc: 'We review how your information is generated, stored, and used today, and where value is being lost.',
        },
        {
          title: 'Structuring',
          desc: 'We organize and connect your data sources into a solid, reliable foundation ready to grow.',
        },
        {
          title: 'Decisions',
          desc: 'We turn that foundation into reports, analysis, and models that support real business decisions.',
        },
      ],
      whyTitle: 'Why Claridat',
      whyItems: [
        {
          title: 'A process, not a one-off project',
          desc: 'We work through a 5-stage pipeline designed to progressively mature your data operation.',
        },
        {
          title: 'Experience in private sector and government',
          desc: 'We understand the particularities of working with data both in companies and public institutions.',
        },
        {
          title: 'No smoke: concrete deliverables',
          desc: 'Every stage has clear deliverables, without unnecessary jargon or empty promises.',
        },
      ],
      finalCtaTitle: 'Ready to see clearly in your data?',
      finalCtaSubtitle: 'Book an initial diagnostic with no commitment and let\u2019s talk about your operation.',
    },
    nosotros: {
      metaTitle: 'About — Claridat',
      metaDescription: 'Learn who we are, our goal, vision, and the team behind Claridat.',
      title: 'About us',
      quienesTitle: 'Who we are',
      quienesText:
        'Claridat is a data consulting and business intelligence firm founded to help organizations stop operating blind. We combine technical data expertise with a pragmatic business view, so every project ends in better-informed decisions, not just dashboards.',
      objetivoTitle: 'Goal',
      objetivoText: 'Turn scattered data into actionable decisions.',
      visionTitle: 'Vision',
      visionText:
        'To be the reference data partner for companies and government across southeastern Mexico, with national expansion.',
      mercadoTitle: 'Market and geography',
      mercadoText:
        'We serve private organizations and government entities, based in Mérida, Yucatán, with an initial focus on southeastern Mexico.',
      equipoTitle: 'Team',
      equipo: [
        { name: 'Rodrigo Escalante Castillo', role: 'Co-founder' },
        { name: 'Pablo Mercado Martínez', role: 'Co-founder' },
      ],
    },
    servicios: {
      metaTitle: 'Services — Claridat Experience',
      metaDescription: 'Discover the 5-stage Claridat Experience pipeline and our STARTER, GROWTH, DECISION, and PARTNER packages.',
      title: 'Services',
      introTitle: 'The Claridat Experience',
      introText:
        'A 5-stage pipeline designed to take your data operation from scattered to controlled, and from controlled to sustained decision-making.',
      timelineTitle: 'Our process',
      timeline: [
        {
          name: 'Diagnosis',
          desc: 'We assess the current state of your data, systems, and processes.',
          entregables: 'Findings report and opportunity map.',
        },
        {
          name: 'Structuring',
          desc: 'We design and organize the data architecture you need.',
          entregables: 'Documented data model and integration flows.',
        },
        {
          name: 'Control',
          desc: 'We implement governance, quality checks, and continuous data monitoring.',
          entregables: 'Quality dashboards and data governance rules.',
        },
        {
          name: 'Analysis',
          desc: 'We build analytics and indicators that answer real business questions.',
          entregables: 'Custom dashboards and analytical reports.',
        },
        {
          name: 'Maintenance',
          desc: 'We provide ongoing support so your data operation keeps running and evolving.',
          entregables: 'Periodic support and incremental improvements.',
        },
      ],
      packagesTitle: 'Packages',
      packagesSubtitle: 'Four ways to work with us, depending on where your organization stands today.',
      packages: [
        {
          name: 'STARTER',
          stages: 'Diagnosis',
          who: 'Organizations that don\u2019t yet know the state of their data.',
          desc: 'A first step to understand where you stand and what opportunities exist.',
        },
        {
          name: 'GROWTH',
          stages: 'Diagnosis + Structuring',
          who: 'Teams ready to put their information in order for good.',
          desc: 'We build the solid foundation your data operation needs to grow.',
        },
        {
          name: 'DECISION',
          stages: 'Diagnosis + Structuring + Control + Analysis',
          who: 'Organizations that want to move from reports to data-driven decisions.',
          desc: 'We cover the full path to reliable analysis that supports real decisions.',
        },
        {
          name: 'PARTNER',
          stages: 'All 5 stages, ongoing',
          who: 'Organizations looking for a long-term data ally.',
          desc: 'Comprehensive, ongoing support across the entire Claridat Experience pipeline.',
        },
      ],
      quoteCta: 'Request a quote',
    },
    contacto: {
      metaTitle: 'Contact — Claridat',
      metaDescription: 'Reach us by email, WhatsApp, or through our form. We\u2019re based in Mérida, Yucatán.',
      title: 'Contact',
      subtitle: 'Tell us about your organization and let\u2019s book an initial diagnostic.',
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Location',
      locationValue: 'Mérida, Yucatán, Mexico',
      formName: 'Name',
      formCompany: 'Company',
      formEmail: 'Email',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formNamePlaceholder: 'Your name',
      formCompanyPlaceholder: 'Your company name',
      formEmailPlaceholder: 'you@company.com',
      formMessagePlaceholder: 'Briefly tell us what you need...',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
}

type I18nContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (typeof dictionary)['es']
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'es' ? stored : 'es'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(next: Lang) {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  return (
    <I18nContext.Provider value={{ lang, setLang, t: dictionary[lang] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}
