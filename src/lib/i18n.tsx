import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Lang = 'es' | 'en'

const STORAGE_KEY = 'claridat-lang'

export const dictionary = {
  es: {
    nav: {
      home: 'Inicio',
      howWeWork: 'Cómo trabajamos',
      solutions: 'Soluciones',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
      cta: 'Agendar diagnóstico',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
    },
    home: {
      metaTitle: 'Claridat | Datos claros. Decisiones inteligentes.',
      metaDescription:
        'Claridat ayuda a empresas e instituciones a ordenar, integrar y analizar su información mediante soluciones de datos, automatización y Business Intelligence.',
      heroEyebrow: 'Consultoría de datos e inteligencia de negocios',
      heroTitleLine1: 'Datos claros.',
      heroTitleLine2: 'Decisiones inteligentes.',
      heroDescription:
        'Transformamos la información de tu organización en herramientas claras para controlar, analizar y tomar mejores decisiones.',
      heroSupporting:
        'Desde la organización y consolidación de tus datos hasta el desarrollo de indicadores, automatizaciones y tableros de Business Intelligence.',
      ctaPrimary: 'Agenda un diagnóstico',
      ctaSecondary: 'Conoce cómo trabajamos',

      problemTitle: 'Tu organización genera información. ¿Realmente la estás aprovechando?',
      problemIntro:
        'Muchas organizaciones generan grandes cantidades de información todos los días, pero ésta suele permanecer dispersa entre archivos, sistemas y áreas diferentes. Claridat ayuda a convertirla en una estructura útil, confiable y fácil de consultar.',
      problemItems: [
        { title: 'Información dispersa', desc: 'Archivos, sistemas y áreas que no se comunican entre sí.' },
        { title: 'Procesos manuales', desc: 'Reportes que requieren horas de copiar, cruzar y validar información.' },
        { title: 'Poca visibilidad', desc: 'Datos disponibles, pero sin indicadores claros para interpretarlos.' },
        { title: 'Decisiones tardías', desc: 'La información llega cuando ya perdió parte de su valor.' },
      ],

      whatTitle: 'Convertimos información dispersa en herramientas de control',
      whatText:
        'No llegamos únicamente a construir un dashboard. Primero entendemos la operación, organizamos la información y definimos qué necesita medir la organización. Después desarrollamos la estructura, los procesos y las herramientas necesarias para convertir los datos en decisiones.',
      whatQuote:
        'Un dashboard construido sobre datos mal estructurados solamente hace más bonito el mismo problema.',

      processTitle: 'Un proceso completo, desde el diagnóstico hasta la evolución',
      processIntro:
        'Cada organización tiene procesos, fuentes de información y objetivos diferentes. Por eso trabajamos mediante cinco etapas que pueden adaptarse al nivel de madurez y a las necesidades de cada proyecto.',
      processStages: [
        {
          n: '01',
          name: 'Diagnóstico',
          short: 'Entendemos cómo funciona tu operación, qué información generas y qué decisiones necesitas tomar.',
          detail: 'Analizamos procesos, fuentes de datos, reportes actuales, indicadores y necesidades de cada área.',
        },
        {
          n: '02',
          name: 'Estructuración',
          short: 'Organizamos la información para que pueda utilizarse de forma consistente y confiable.',
          detail: 'Diseñamos bases, plantillas, catálogos y estructuras adaptadas a la operación.',
        },
        {
          n: '03',
          name: 'Integración y control',
          short: 'Conectamos y consolidamos la información proveniente de diferentes fuentes.',
          detail: 'Desarrollamos modelos y procesos que reducen tareas manuales y facilitan el seguimiento de la operación.',
        },
        {
          n: '04',
          name: 'Análisis y visualización',
          short: 'Convertimos los datos en indicadores y herramientas visuales que permiten entender rápidamente qué está sucediendo.',
          detail: 'Integramos KPIs, análisis de tendencias, comparativos, alertas, reportes y dashboards de Business Intelligence.',
        },
        {
          n: '05',
          name: 'Evolución',
          short: 'La solución crece junto con la organización.',
          detail: 'Incorporamos nuevas áreas, fuentes de información, indicadores, automatizaciones y necesidades de análisis.',
        },
      ],
      processCta: 'Conoce nuestros servicios',

      capabilitiesTitle: 'Lo que podemos construir para tu organización',
      capabilities: [
        { title: 'Estructuración de datos', desc: 'Bases, plantillas, catálogos y modelos diseñados alrededor de la operación.' },
        { title: 'Consolidación de información', desc: 'Integración de datos provenientes de múltiples archivos, áreas o sistemas.' },
        { title: 'Automatización de reportes', desc: 'Reducción de procesos repetitivos y de la actualización manual de información.' },
        { title: 'Business Intelligence', desc: 'Dashboards interactivos para consultar indicadores y dar seguimiento a la operación.' },
        { title: 'Análisis de información', desc: 'Tendencias, desviaciones, comparativos, segmentaciones y detección de oportunidades.' },
        { title: 'Indicadores y sistemas de control', desc: 'KPIs y herramientas diseñadas específicamente para los objetivos de cada organización.' },
      ],

      diagramTitle: 'De información dispersa a una herramienta de decisión',
      diagramOriginLabel: 'Información de origen',
      diagramOrigin: ['Archivos de Excel', 'Ventas', 'Clientes', 'Gastos', 'Comisiones', 'Información operativa'],
      diagramMiddleLabel: 'Claridat',
      diagramMiddle: ['Estructuración', 'Consolidación', 'Validación', 'Modelado', 'Indicadores'],
      diagramResultLabel: 'Resultado',
      diagramResultIntro: 'Un sistema de información actualizado y una herramienta que permite analizar:',
      diagramResult: ['Ventas', 'Rentabilidad', 'Sucursales', 'Productos', 'Vendedores', 'Clientes', 'Metas', 'Tendencias', 'Desviaciones'],

      areasTitle: 'Soluciones adaptadas a distintas áreas',
      areas: [
        { title: 'Ventas y desempeño comercial', desc: 'Seguimiento de ventas, metas, vendedores, productos, sucursales y tendencias.' },
        { title: 'Finanzas y administración', desc: 'Análisis de ingresos, egresos, presupuestos, cuentas y variaciones.' },
        { title: 'Recursos humanos', desc: 'Seguimiento de plantilla, rotación, incidencias, productividad y costos.' },
        { title: 'Operaciones', desc: 'Control de volúmenes, tiempos, cumplimiento, productividad e incidencias.' },
        { title: 'Dirección', desc: 'Concentración de los principales indicadores de diferentes áreas en una sola herramienta.' },
      ],

      whyTitle: 'Por qué Claridat',
      whyItems: [
        { title: 'Soluciones personalizadas', desc: 'No adaptamos tu operación a una plantilla genérica. Diseñamos la solución alrededor de tus procesos y objetivos.' },
        { title: 'Enfoque en decisiones', desc: 'Cada indicador y herramienta debe responder una pregunta útil para la organización.' },
        { title: 'Información confiable', desc: 'Trabajamos en la estructura y validación de los datos antes de presentarlos.' },
        { title: 'Crecimiento progresivo', desc: 'La solución puede comenzar con un área y evolucionar conforme aparecen nuevas necesidades.' },
        { title: 'Trabajo por objetivos y entregables', desc: 'Cada etapa se desarrolla con alcances y resultados definidos, enfocados en generar valor concreto.' },
      ],

      diagnosisTitle: 'No necesitas saber qué dashboard necesitas',
      diagnosisText1:
        'Nuestro trabajo comienza entendiendo qué quieres controlar, qué decisiones necesitas tomar y qué información tiene disponible tu organización.',
      diagnosisText2:
        'A partir del diagnóstico definimos la solución, los indicadores, las fuentes de información, el alcance y los entregables necesarios.',
      diagnosisCta: 'Solicitar diagnóstico',

      finalCtaTitle: '¿Listo para convertir tus datos en decisiones?',
      finalCtaSubtitle: 'Cuéntanos cómo trabaja tu organización y encontremos el punto de partida adecuado.',
    },
    nosotros: {
      metaTitle: 'Nosotros | Claridat',
      metaDescription: 'Conoce quiénes somos, nuestro enfoque, principios y el equipo detrás de Claridat.',
      heroTitle: 'Nosotros',
      heroSubtitle:
        'Combinamos análisis cuantitativo, tecnología y entendimiento del negocio para construir soluciones de información útiles y aplicables.',
      quienesTitle: 'Quiénes somos',
      quienesText1:
        'Claridat es una consultoría de datos e inteligencia de negocios fundada para ayudar a organizaciones que generan información, pero todavía no cuentan con una forma clara y confiable de aprovecharla.',
      quienesText2:
        'Nuestro trabajo conecta la realidad operativa con el análisis. Entendemos cómo se produce la información, cómo se utiliza actualmente y qué necesita conocer cada responsable para tomar mejores decisiones.',
      enfoqueTitle: 'No empezamos por la herramienta. Empezamos por la decisión.',
      enfoqueText1:
        'Antes de construir un reporte o dashboard, identificamos qué necesita controlar la organización, qué preguntas debe responder y qué tan confiable es la información disponible.',
      enfoqueText2:
        'Este enfoque permite desarrollar soluciones con una función concreta, en lugar de acumular indicadores que no generan acción.',
      principiosTitle: 'Principios',
      principios: [
        { title: 'Claridad', desc: 'La información debe poder entenderse y utilizarse, no solamente almacenarse.' },
        { title: 'Rigor', desc: 'Los resultados dependen de estructuras, definiciones y datos confiables.' },
        { title: 'Utilidad', desc: 'Cada solución debe apoyar una decisión, un control o un proceso real.' },
        { title: 'Adaptabilidad', desc: 'La herramienta debe ajustarse a la operación de la organización y poder crecer con ella.' },
      ],
      alcanceTitle: 'Alcance',
      alcanceText:
        'Trabajamos con organizaciones privadas e instituciones públicas, con base en Mérida, Yucatán, y capacidad para desarrollar proyectos dentro y fuera de la región.',
      equipoTitle: 'Equipo',
      equipo: [
        { name: 'Rodrigo Escalante Castillo', role: 'Cofundador' },
        { name: 'Pablo Mercado Martínez', role: 'Cofundador' },
      ],
      ctaText: 'Conoce cómo podemos ayudarte',
    },
    servicios: {
      metaTitle: 'Servicios de datos e inteligencia de negocios | Claridat',
      metaDescription:
        'Diagnóstico, estructuración, integración, análisis y evolución de datos: conoce el proceso de trabajo de Claridat.',
      heroTitle: 'Servicios',
      heroSubtitle: 'Construimos soluciones de información que permiten ordenar, controlar y analizar la operación de una organización.',
      intro:
        'No todas las organizaciones parten del mismo punto. Algunas necesitan ordenar sus archivos; otras, integrar distintas fuentes, automatizar reportes o construir indicadores. Nuestro proceso se adapta a la necesidad real del proyecto.',
      timelineTitle: 'Nuestro proceso',
      activitiesLabel: 'Actividades',
      deliverablesLabel: 'Entregables',
      timeline: [
        {
          n: '01',
          name: 'Diagnóstico',
          objetivo: 'Comprender la operación, las decisiones prioritarias y el estado actual de la información.',
          actividades: [
            'Entrevistas con responsables de las áreas.',
            'Revisión de archivos, sistemas y reportes.',
            'Identificación de problemas y oportunidades.',
            'Definición preliminar de indicadores.',
            'Delimitación del alcance.',
          ],
          entregables: [
            'Informe de diagnóstico.',
            'Mapa de fuentes de información.',
            'Inventario de reportes e indicadores.',
            'Propuesta de solución, alcance y etapas.',
          ],
        },
        {
          n: '02',
          name: 'Estructuración',
          objetivo: 'Crear una base consistente para capturar, almacenar y utilizar la información.',
          actividades: [
            'Diseño de bases y plantillas.',
            'Homologación de campos y catálogos.',
            'Limpieza y transformación de datos.',
            'Definición de reglas de captura y validación.',
          ],
          entregables: [
            'Modelos de datos.',
            'Plantillas de captura.',
            'Diccionarios y catálogos.',
            'Reglas de calidad y documentación.',
          ],
        },
        {
          n: '03',
          name: 'Integración y control',
          objetivo: 'Consolidar diferentes fuentes y reducir procesos manuales.',
          actividades: [
            'Cruce de archivos y bases.',
            'Consolidación de información.',
            'Desarrollo de flujos de actualización.',
            'Controles de calidad y consistencia.',
            'Automatización de tareas repetitivas.',
          ],
          entregables: [
            'Bases consolidadas.',
            'Procesos automatizados.',
            'Modelos de control.',
            'Validaciones y alertas.',
          ],
        },
        {
          n: '04',
          name: 'Análisis y visualización',
          objetivo: 'Convertir los datos en información clara para entender la operación y decidir.',
          actividades: [
            'Diseño de KPIs.',
            'Análisis de tendencias y variaciones.',
            'Segmentaciones y comparativos.',
            'Construcción de dashboards.',
            'Diseño de reportes ejecutivos.',
          ],
          entregables: [
            'Dashboards interactivos.',
            'Reportes analíticos.',
            'Tableros de seguimiento.',
            'Documentación de indicadores.',
          ],
        },
        {
          n: '05',
          name: 'Evolución',
          objetivo: 'Mantener la solución vigente e incorporar nuevas necesidades.',
          actividades: [
            'Soporte y acompañamiento.',
            'Ajuste de indicadores y reportes.',
            'Incorporación de nuevas áreas.',
            'Integración de nuevas fuentes.',
            'Optimización continua.',
          ],
          entregables: [
            'Actualizaciones programadas.',
            'Nuevos módulos.',
            'Mejoras incrementales.',
            'Documentación actualizada.',
          ],
        },
      ],
      deliverablesNote:
        'Los entregables se definen para cada proyecto; esta lista es ilustrativa y no representa una promesa de incluir todos los elementos en cada proyecto.',
      ctaTitle: 'Empecemos por entender tu operación',
      ctaText: 'El diagnóstico nos permite definir qué necesita realmente tu organización antes de proponer una solución.',
      ctaButton: 'Solicitar diagnóstico',
    },
    contacto: {
      metaTitle: 'Contacto | Claridat',
      metaDescription: 'Contáctanos por correo, WhatsApp o mediante nuestro formulario. Estamos en Mérida, Yucatán.',
      heroTitle: 'Hablemos de tu información',
      heroText:
        'Cuéntanos qué quieres controlar, qué proceso te gustaría mejorar o qué información necesitas entender. No es necesario que ya tengas definida la solución.',
      emailLabel: 'Correo',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Ubicación',
      locationValue: 'Mérida, Yucatán, México',
      whatsappMessage: 'Hola, me gustaría conocer más sobre los servicios de Claridat y agendar un diagnóstico.',
      opensNewTab: '(abre en una nueva pestaña)',
      formIntro: 'Cuéntanos brevemente qué información utilizas actualmente y qué te gustaría mejorar.',
      formName: 'Nombre',
      formCompany: 'Empresa u organización',
      formEmail: 'Correo',
      formPhone: 'Teléfono o WhatsApp (opcional)',
      formArea: 'Área de interés',
      areaOptions: [
        'Diagnóstico',
        'Estructuración de datos',
        'Automatización de reportes',
        'Dashboards y Business Intelligence',
        'Análisis de información',
        'Otro',
      ],
      formMessage: 'Mensaje',
      formSubmit: 'Enviar solicitud',
      formSending: 'Enviando…',
      formSuccess: 'Gracias, recibimos tu solicitud. Te contactaremos pronto.',
      formError: 'No pudimos enviar el formulario. Escríbenos directamente por correo o WhatsApp.',
      formNamePlaceholder: 'Tu nombre',
      formCompanyPlaceholder: 'Nombre de tu empresa u organización',
      formEmailPlaceholder: 'tu@empresa.com',
      formPhonePlaceholder: '999 000 0000',
      formMessagePlaceholder: 'Cuéntanos brevemente qué necesitas...',
    },
    footer: {
      tagline: 'Convertimos información dispersa en herramientas claras para controlar, analizar y tomar mejores decisiones.',
      navTitle: 'Navegación',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      howWeWork: 'How we work',
      solutions: 'Solutions',
      nosotros: 'About',
      contacto: 'Contact',
      cta: 'Schedule a discovery session',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
    },
    home: {
      metaTitle: 'Claridat | Clear data. Smarter decisions.',
      metaDescription:
        'Claridat helps companies and institutions organize, integrate, and analyze their information through data, automation, and Business Intelligence solutions.',
      heroEyebrow: 'Data consulting & business intelligence',
      heroTitleLine1: 'Clear data.',
      heroTitleLine2: 'Smarter decisions.',
      heroDescription:
        "We turn your organization's information into clear tools to control, analyze, and make better decisions.",
      heroSupporting:
        'From organizing and consolidating your data to building indicators, automations, and Business Intelligence dashboards.',
      ctaPrimary: 'Schedule a discovery session',
      ctaSecondary: 'See how we work',

      problemTitle: 'Your organization generates information. Are you really using it?',
      problemIntro:
        "Many organizations generate large amounts of information every day, but it often stays scattered across files, systems, and departments. Claridat helps turn it into a structure that's useful, reliable, and easy to consult.",
      problemItems: [
        { title: 'Scattered information', desc: "Files, systems, and departments that don't talk to each other." },
        { title: 'Manual processes', desc: 'Reports that take hours of copying, cross-referencing, and validating information.' },
        { title: 'Limited visibility', desc: 'Data available, but without clear indicators to interpret it.' },
        { title: 'Late decisions', desc: 'Information arrives after it has already lost part of its value.' },
      ],

      whatTitle: 'We turn scattered information into tools for control',
      whatText:
        "We don't just show up to build a dashboard. We first understand the operation, organize the information, and define what the organization needs to measure. Then we develop the structure, processes, and tools needed to turn data into decisions.",
      whatQuote: 'A dashboard built on poorly structured data only makes the same problem look nicer.',

      processTitle: 'A complete process, from diagnosis to evolution',
      processIntro:
        "Every organization has different processes, information sources, and goals. That's why we work through five stages that can adapt to each project's maturity level and needs.",
      processStages: [
        {
          n: '01',
          name: 'Diagnosis',
          short: 'We understand how your operation works, what information you generate, and what decisions you need to make.',
          detail: "We analyze processes, data sources, current reports, indicators, and each area's needs.",
        },
        {
          n: '02',
          name: 'Structuring',
          short: 'We organize information so it can be used consistently and reliably.',
          detail: 'We design databases, templates, catalogs, and structures tailored to the operation.',
        },
        {
          n: '03',
          name: 'Integration and control',
          short: 'We connect and consolidate information from different sources.',
          detail: "We build models and processes that reduce manual work and make it easier to track the operation.",
        },
        {
          n: '04',
          name: 'Analysis and visualization',
          short: "We turn data into indicators and visual tools that make it easy to understand what's happening.",
          detail: 'We build KPIs, trend analysis, comparisons, alerts, reports, and Business Intelligence dashboards.',
        },
        {
          n: '05',
          name: 'Evolution',
          short: 'The solution grows along with the organization.',
          detail: 'We add new areas, data sources, indicators, automations, and analysis needs.',
        },
      ],
      processCta: 'See our services',

      capabilitiesTitle: 'What we can build for your organization',
      capabilities: [
        { title: 'Data structuring', desc: 'Databases, templates, catalogs, and models designed around the operation.' },
        { title: 'Information consolidation', desc: 'Integrating data from multiple files, departments, or systems.' },
        { title: 'Report automation', desc: 'Reducing repetitive tasks and manual data updates.' },
        { title: 'Business Intelligence', desc: 'Interactive dashboards to check indicators and track the operation.' },
        { title: 'Data analysis', desc: 'Trends, deviations, comparisons, segmentation, and opportunity detection.' },
        { title: 'Indicators and control systems', desc: "KPIs and tools designed specifically for each organization's goals." },
      ],

      diagramTitle: 'From scattered information to a decision-making tool',
      diagramOriginLabel: 'Source information',
      diagramOrigin: ['Excel files', 'Sales', 'Customers', 'Expenses', 'Commissions', 'Operational data'],
      diagramMiddleLabel: 'Claridat',
      diagramMiddle: ['Structuring', 'Consolidation', 'Validation', 'Modeling', 'Indicators'],
      diagramResultLabel: 'Result',
      diagramResultIntro: 'An up-to-date information system and a tool that lets you analyze:',
      diagramResult: ['Sales', 'Profitability', 'Branches', 'Products', 'Salespeople', 'Customers', 'Targets', 'Trends', 'Deviations'],

      areasTitle: 'Solutions tailored to different areas',
      areas: [
        { title: 'Sales and commercial performance', desc: 'Tracking sales, targets, salespeople, products, branches, and trends.' },
        { title: 'Finance and administration', desc: 'Analysis of revenue, expenses, budgets, accounts, and variances.' },
        { title: 'Human resources', desc: 'Tracking headcount, turnover, incidents, productivity, and costs.' },
        { title: 'Operations', desc: 'Control of volumes, times, compliance, productivity, and incidents.' },
        { title: 'Management', desc: 'Bringing together the main indicators from different areas into a single tool.' },
      ],

      whyTitle: 'Why Claridat',
      whyItems: [
        { title: 'Tailored solutions', desc: "We don't adapt your operation to a generic template. We design the solution around your processes and goals." },
        { title: 'Focus on decisions', desc: 'Every indicator and tool must answer a useful question for the organization.' },
        { title: 'Reliable information', desc: 'We work on structuring and validating data before presenting it.' },
        { title: 'Progressive growth', desc: 'The solution can start with one area and evolve as new needs appear.' },
        { title: 'Work by objectives and deliverables', desc: 'Each stage is developed with defined scopes and results, focused on generating concrete value.' },
      ],

      diagnosisTitle: "You don't need to know which dashboard you need",
      diagnosisText1:
        'Our work starts by understanding what you want to control, what decisions you need to make, and what information your organization has available.',
      diagnosisText2:
        'Based on the diagnosis, we define the solution, indicators, information sources, scope, and deliverables needed.',
      diagnosisCta: 'Request a diagnosis',

      finalCtaTitle: 'Ready to turn your data into decisions?',
      finalCtaSubtitle: "Tell us how your organization works and let's find the right starting point.",
    },
    nosotros: {
      metaTitle: 'About | Claridat',
      metaDescription: 'Learn who we are, our approach, principles, and the team behind Claridat.',
      heroTitle: 'About us',
      heroSubtitle:
        'We combine quantitative analysis, technology, and business understanding to build useful, applicable information solutions.',
      quienesTitle: 'Who we are',
      quienesText1:
        "Claridat is a data consulting and business intelligence firm founded to help organizations that generate information but still don't have a clear, reliable way to make use of it.",
      quienesText2:
        "Our work connects operational reality with analysis. We understand how information is produced, how it's currently used, and what each decision-maker needs to know to make better decisions.",
      enfoqueTitle: "We don't start with the tool. We start with the decision.",
      enfoqueText1:
        "Before building a report or dashboard, we identify what the organization needs to control, what questions it needs answered, and how reliable the available information is.",
      enfoqueText2:
        "This approach allows us to develop solutions with a concrete purpose, instead of piling up indicators that don't drive action.",
      principiosTitle: 'Principles',
      principios: [
        { title: 'Clarity', desc: 'Information should be understandable and usable, not just stored.' },
        { title: 'Rigor', desc: 'Results depend on reliable structures, definitions, and data.' },
        { title: 'Usefulness', desc: 'Every solution must support a real decision, control, or process.' },
        { title: 'Adaptability', desc: "The tool must fit the organization's operation and be able to grow with it." },
      ],
      alcanceTitle: 'Scope',
      alcanceText:
        'We work with private organizations and public institutions, based in Mérida, Yucatán, with the capacity to run projects both within and beyond the region.',
      equipoTitle: 'Team',
      equipo: [
        { name: 'Rodrigo Escalante Castillo', role: 'Co-founder' },
        { name: 'Pablo Mercado Martínez', role: 'Co-founder' },
      ],
      ctaText: 'See how we can help you',
    },
    servicios: {
      metaTitle: 'Data and Business Intelligence Services | Claridat',
      metaDescription: "Diagnosis, structuring, integration, analysis, and evolution of data: learn about Claridat's work process.",
      heroTitle: 'Services',
      heroSubtitle: "We build information solutions that organize, control, and analyze an organization's operation.",
      intro:
        "Not every organization starts from the same point. Some need to organize their files; others need to integrate different sources, automate reports, or build indicators. Our process adapts to the real need of the project.",
      timelineTitle: 'Our process',
      activitiesLabel: 'Activities',
      deliverablesLabel: 'Deliverables',
      timeline: [
        {
          n: '01',
          name: 'Diagnosis',
          objetivo: 'Understand the operation, priority decisions, and the current state of information.',
          actividades: [
            'Interviews with area leads.',
            'Review of files, systems, and reports.',
            'Identifying problems and opportunities.',
            'Preliminary definition of indicators.',
            'Defining scope.',
          ],
          entregables: [
            'Diagnostic report.',
            'Information source map.',
            'Inventory of reports and indicators.',
            'Solution, scope, and stage proposal.',
          ],
        },
        {
          n: '02',
          name: 'Structuring',
          objetivo: 'Create a consistent foundation for capturing, storing, and using information.',
          actividades: [
            'Database and template design.',
            'Standardizing fields and catalogs.',
            'Data cleaning and transformation.',
            'Defining capture and validation rules.',
          ],
          entregables: [
            'Data models.',
            'Capture templates.',
            'Dictionaries and catalogs.',
            'Quality rules and documentation.',
          ],
        },
        {
          n: '03',
          name: 'Integration and control',
          objetivo: 'Consolidate different sources and reduce manual processes.',
          actividades: [
            'Cross-referencing files and databases.',
            'Information consolidation.',
            'Building update workflows.',
            'Quality and consistency controls.',
            'Automating repetitive tasks.',
          ],
          entregables: [
            'Consolidated databases.',
            'Automated processes.',
            'Control models.',
            'Validations and alerts.',
          ],
        },
        {
          n: '04',
          name: 'Analysis and visualization',
          objetivo: 'Turn data into clear information to understand the operation and make decisions.',
          actividades: [
            'KPI design.',
            'Trend and variance analysis.',
            'Segmentation and comparisons.',
            'Dashboard development.',
            'Executive report design.',
          ],
          entregables: [
            'Interactive dashboards.',
            'Analytical reports.',
            'Tracking boards.',
            'Indicator documentation.',
          ],
        },
        {
          n: '05',
          name: 'Evolution',
          objetivo: 'Keep the solution current and incorporate new needs.',
          actividades: [
            'Support and follow-up.',
            'Adjusting indicators and reports.',
            'Adding new areas.',
            'Integrating new sources.',
            'Ongoing optimization.',
          ],
          entregables: [
            'Scheduled updates.',
            'New modules.',
            'Incremental improvements.',
            'Updated documentation.',
          ],
        },
      ],
      deliverablesNote:
        "Deliverables are defined for each project; this list is illustrative and doesn't represent a promise to include every item in every project.",
      ctaTitle: "Let's start by understanding your operation",
      ctaText: 'The diagnosis lets us define what your organization really needs before proposing a solution.',
      ctaButton: 'Request a diagnosis',
    },
    contacto: {
      metaTitle: 'Contact | Claridat',
      metaDescription: "Reach us by email, WhatsApp, or through our form. We're based in Mérida, Yucatán.",
      heroTitle: "Let's talk about your information",
      heroText:
        "Tell us what you want to control, what process you'd like to improve, or what information you need to understand. You don't need to already know the solution.",
      emailLabel: 'Email',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Location',
      locationValue: 'Mérida, Yucatán, Mexico',
      whatsappMessage: "Hi, I'd like to learn more about Claridat's services and schedule a diagnosis.",
      opensNewTab: '(opens in a new tab)',
      formIntro: "Briefly tell us what information you currently use and what you'd like to improve.",
      formName: 'Name',
      formCompany: 'Company or organization',
      formEmail: 'Email',
      formPhone: 'Phone or WhatsApp (optional)',
      formArea: 'Area of interest',
      areaOptions: [
        'Diagnosis',
        'Data structuring',
        'Report automation',
        'Dashboards and Business Intelligence',
        'Data analysis',
        'Other',
      ],
      formMessage: 'Message',
      formSubmit: 'Send request',
      formSending: 'Sending…',
      formSuccess: "Thanks, we received your request. We'll be in touch soon.",
      formError: "We couldn't send the form. Please email or WhatsApp us directly.",
      formNamePlaceholder: 'Your name',
      formCompanyPlaceholder: 'Your company or organization name',
      formEmailPlaceholder: 'you@company.com',
      formPhonePlaceholder: '+52 999 000 0000',
      formMessagePlaceholder: 'Briefly tell us what you need...',
    },
    footer: {
      tagline: 'We turn scattered information into clear tools to control, analyze, and make better decisions.',
      navTitle: 'Navigation',
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
