export const languages = {
  ca: "Català",
  es: "Español",
  en: "English",
}

export const defaultLang = "ca"

export const ui = {
  ca: {
    "meta.title": "Joan Enajas — Desenvolupador d'aplicacions i producte propi",
    "meta.description":
      "Desenvolupador Android & Web. Projectes reals amb clients de pagament i producte propi, des de plantilles web fins al panell de gestió centralitzat.",
    "nav.experience": "Experiència",
    "nav.projects": "Projectes",
    "nav.stack": "Stack",
    "nav.about": "Sobre mi",
    "nav.contact": "Contacte",
    "footer.about": "Sobre mi",
    "footer.contact": "Contacte",
    "hero.greeting": "Hola, soc en Joan",
    "hero.headline":
      "Construeixo productes que resolen problemes reals, des del primer client fins al sistema que els fa créixer tots alhora.",
    "hero.description":
      "Desenvolupador Android & Web. Treballo amb clients reals i he construït producte propi per gestionar-los. Aquí baix tens la meva experiència i els projectes que ho demostren.",
    "about.p1":
      "Soc en Joan, desenvolupador Android i web. M'agrada agafar un problema concret i convertir-lo en <strong>un producte que funciona de veritat</strong> — a la feina, apps de camp per a dispositius industrials; pel meu compte, un SaaS de presència web per a comerços locals amb clients reals actius.",
    "about.p2":
      "Aquest enfocament pràctic m'ha portat a <strong>construir eines des de zero</strong> quan les existents no encaixaven — com el panell d'administració a mida que vaig desenvolupar perquè els meus clients poguessin gestionar el seu contingut sense tocar codi.",
    "about.p3":
      "Ara mateix estic evolucionant l'arquitectura del meu producte cap a un model multi-tenant sobre Supabase/PostgreSQL, perquè un sol codebase pugui servir diferents tipus de negoci. M'interessa <strong>construir sistemes que es puguin mantenir i fer créixer amb el temps</strong>, no només que funcionin el dia de l'entrega.",
    "experience.sectionTitle": "Experiència laboral",
    "experience.idwaste.title": "Desenvolupador Android",
    "experience.idwaste.company": "IDWaste",
    "experience.idwaste.date": "2024 — Actualitat",
    "experience.idwaste.description":
      "Desenvolupament Android per a operacions de camp sobre dispositius industrials Speedata: apps de lectura/escriptura RFID UHF, navegació GPS amb TomTom SDK i HERE, i rutes personalitzades, comunicació BLE amb hardware de tancament de contenidors, i parsing NMEA per a dispositius sense serveis de Google. Manteniment i evolució d'apps en producció usades diàriament per equips de recollida de residus a diversos municipis.",
    "experience.aduxia.title": "Pràctiques Full Stack",
    "experience.aduxia.company": "Aduxia",
    "experience.aduxia.date": "Febrer 2023 — Juliol 2023",
    "experience.aduxia.description":
      "Vaig maquetar i estilitzar interfícies web amb Bootstrap, Tailwind i Chakra UI, seguint els estàndards de codi i el flux de treball d'un equip de desenvolupament professional.",
    "projects.sectionTitle": "Projectes",
    "projects.otherTitle": "Altres projectes i exercicis",
    "projects.liveLink": "Veure en directe",
    "projects.viewVideo": "Vídeo del projecte",
    "projects.code": "Codi",
    "projects.restaurantTemplate.title": "Plantilles de restaurants",
    "projects.restaurantTemplate.tagline": "Plataforma web per a negocis locals, amb panell d'administració propi",
    "projects.restaurantTemplate.description":
      "Plataforma de presència web per a negocis locals amb panell d'administració propi: el client actualitza el menú del dia des del mòbil i es publica sol, sense tocar codi. Traducció automàtica CA/ES/EN via Gemini API i arquitectura JAMstack sense servidor (contingut versionat a Git, funcions serverless a Netlify). Pensada com a white-label: un sol codebase replicable per client amb marca pròpia.",
    "projects.restaurantTemplate.businessCta": "Tens un negoci local? Escriu-me i en parlem.",
    "projects.saas.title": "Panell d'administració (React)",
    "projects.saas.tagline": "El sistema que va néixer d'aquell primer projecte",
    "projects.saas.description":
      "Editar fitxers TypeScript a mà per cada canvi de contingut no escala. Vaig construir un panell React propi amb dos nivells d'accés: el client gestiona el seu menú diari des del mòbil, i jo tinc una vista d'administració separada amb rols verificats al backend (JWT de Netlify Identity, validació de contingut i traçabilitat de qui fa cada canvi). Dissenyat com a base d'un futur panell multi-tenant que centralitzi tots els clients en un sol lloc.",
    "projects.saas.evolutionNote": "Arran d'aquest primer projecte",
    "projects.saas.link1": "Vista client · mòbil",
    "projects.saas.link2": "Vista admin · JWT",
    "projects.saas.superadminNote":
      "El superadmin està en català, el meu idioma de treball — però l'eina de traducció el detecta igualment i la web final funciona sense problemes en els tres idiomes.",
    "projects.courtstats.title": "CourtStats",
    "projects.courtstats.tagline": "Gestió d'equip i marcador en temps real amb estadístiques per jugadora",
    "projects.courtstats.description":
      "Aplicació de gestió i marcador de bàsquet en temps real: cada partit registra punts, rebots i assistències jugadora a jugadora, amb el marcador sincronitzant-se a l'instant entre dispositius via Firestore. Router SPA propi sense framework, autenticació amb aprovació manual (pendent → aprovat → admin) i dashboard amb estadístiques mensuals i històriques per jugadora. És una PWA instal·lable que funciona també des del mòbil. Construïda per resoldre una necessitat real de l'equip, no com a exercici.",
    "projects.pizza.title": "PizzaLgust — App de pizzes 100% personalitzables",
    "projects.pizza.description":
      "App Android nativa en Kotlin per personalitzar una pizza ingredient a ingredient, amb gestió d'estat en temps real que actualitza preu i composició a cada selecció.",
    "stack.sectionTitle": "Stack",
    "stack.subtitle": "Tecnologies amb què treballo diàriament, tant en producció industrial com al meu producte SaaS.",
    "stack.mobile": "Android",
    "stack.mobile.desc":
      "Desenvolupament natiu per a dispositius mòbils: lectors RFID, geolocalització i comunicació amb hardware.",
    "stack.frontend": "Frontend",
    "stack.frontend.desc":
      "Interfícies web ràpides i mantenibles, del portfolio estàtic a panells d'administració complexos.",
    "stack.backend": "Backend i dades",
    "stack.backend.desc": "Arquitectura multi-tenant per servir diversos clients des d'un sol codebase.",
    "stack.tools": "Desplegament i infraestructura",
    "stack.tools.desc":
      "Flux CI/CD complet: cada commit desplega, amb funcions serverless per a la lògica de backend.",
    "theme.select": "Tria el tema",
  },
  es: {
    "meta.title": "Joan Enajas — Desarrollador de aplicaciones y producto propio",
    "meta.description":
      "Desarrollador Android & Web. Proyectos reales con clientes de pago y producto propio, desde plantillas web hasta el panel de gestión centralizado.",
    "nav.experience": "Experiencia",
    "nav.projects": "Proyectos",
    "nav.stack": "Stack",
    "nav.about": "Sobre mí",
    "nav.contact": "Contacto",
    "footer.about": "Sobre mí",
    "footer.contact": "Contacto",
    "hero.greeting": "Hola, soy Joan",
    "hero.headline":
      "Construyo productos que resuelven problemas reales, desde el primer cliente hasta el sistema que los hace crecer a todos a la vez.",
    "hero.description":
      "Desarrollador Android & Web. Trabajo con clientes reales y he construido producto propio para gestionarlos. Aquí abajo tienes mi experiencia y los proyectos que lo demuestran.",
    "about.p1":
      "Soy Joan, desarrollador Android y web. Me gusta coger un problema concreto y convertirlo en <strong>un producto que funciona de verdad</strong> — en el trabajo, apps de campo para dispositivos industriales; por mi cuenta, un SaaS de presencia web para comercios locales con clientes reales activos.",
    "about.p2":
      "Este enfoque práctico me ha llevado a <strong>construir herramientas desde cero</strong> cuando las existentes no encajaban — como el panel de administración a medida que desarrollé para que mis clientes pudieran gestionar su contenido sin tocar código.",
    "about.p3":
      "Ahora mismo estoy evolucionando la arquitectura de mi producto hacia un modelo multi-tenant sobre Supabase/PostgreSQL, para que un solo codebase pueda servir a distintos tipos de negocio. Me interesa <strong>construir sistemas que se puedan mantener y hacer crecer con el tiempo</strong>, no solo que funcionen el día de la entrega.",
    "experience.sectionTitle": "Experiencia laboral",
    "experience.idwaste.title": "Desarrollador Android",
    "experience.idwaste.company": "IDWaste",
    "experience.idwaste.date": "2024 — Actualidad",
    "experience.idwaste.description":
      "Desarrollo Android para operaciones de campo sobre dispositivos industriales Speedata: apps de lectura/escritura RFID UHF, navegación GPS con TomTom SDK y HERE, y rutas personalizadas, comunicación BLE con hardware de cierre de contenedores, y parsing NMEA para dispositivos sin servicios de Google. Mantenimiento y evolución de apps en producción usadas a diario por equipos de recogida de residuos en varios municipios.",
    "experience.aduxia.title": "Prácticas Full Stack",
    "experience.aduxia.company": "Aduxia",
    "experience.aduxia.date": "Febrero 2023 — Julio 2023",
    "experience.aduxia.description":
      "Maqueté y di estilo a interfaces web con Bootstrap, Tailwind y Chakra UI, siguiendo los estándares de código y el flujo de trabajo de un equipo de desarrollo profesional.",
    "projects.sectionTitle": "Proyectos",
    "projects.otherTitle": "Otros proyectos y ejercicios",
    "projects.liveLink": "Ver en directo",
    "projects.viewVideo": "Vídeo del proyecto",
    "projects.code": "Código",
    "projects.restaurantTemplate.title": "Plantillas de restaurantes",
    "projects.restaurantTemplate.tagline": "Plataforma web para negocios locales, con panel de administración propio",
    "projects.restaurantTemplate.description":
      "Plataforma de presencia web para negocios locales con panel de administración propio: el cliente actualiza el menú del día desde el móvil y se publica solo, sin tocar código. Traducción automática CA/ES/EN vía Gemini API y arquitectura JAMstack sin servidor (contenido versionado en Git, funciones serverless en Netlify). Pensada como white-label: un solo codebase replicable por cliente con marca propia.",
    "projects.restaurantTemplate.businessCta": "¿Tienes un negocio local? Escríbeme y hablamos.",
    "projects.saas.title": "Panel de administración (React)",
    "projects.saas.tagline": "El sistema que nació de aquel primer proyecto",
    "projects.saas.description":
      "Editar archivos TypeScript a mano por cada cambio de contenido no escala. Construí un panel React propio con dos niveles de acceso: el cliente gestiona su menú diario desde el móvil, y yo tengo una vista de administración separada con roles verificados en el backend (JWT de Netlify Identity, validación de contenido y trazabilidad de quién hace cada cambio). Diseñado como base de un futuro panel multi-tenant que centralice todos los clientes en un solo sitio.",
    "projects.saas.evolutionNote": "A raíz de este primer proyecto",
    "projects.saas.link1": "Vista cliente · móvil",
    "projects.saas.link2": "Vista admin · JWT",
    "projects.saas.superadminNote":
      "El superadmin está en catalán, mi idioma de trabajo — pero la herramienta de traducción lo detecta igualmente y la web final funciona sin problemas en los tres idiomas.",
    "projects.courtstats.title": "CourtStats",
    "projects.courtstats.tagline": "Gestión de equipo y marcador en tiempo real con estadísticas por jugadora",
    "projects.courtstats.description":
      "Aplicación de gestión y marcador de baloncesto en tiempo real: cada partido registra puntos, rebotes y asistencias jugadora a jugadora, con el marcador sincronizándose al instante entre dispositivos vía Firestore. Router SPA propio sin framework, autenticación con aprobación manual (pendiente → aprobado → admin) y dashboard con estadísticas mensuales e históricas por jugadora. Es una PWA instalable que también funciona desde el móvil. Construida para resolver una necesidad real del equipo, no como ejercicio.",
    "projects.pizza.title": "PizzaLgust — App de pizzas 100% personalizables",
    "projects.pizza.description":
      "App Android nativa en Kotlin para personalizar una pizza ingrediente a ingrediente, con gestión de estado en tiempo real que actualiza precio y composición en cada selección.",
    "stack.sectionTitle": "Stack",
    "stack.subtitle": "Tecnologías con las que trabajo a diario, tanto en producción industrial como en mi producto SaaS.",
    "stack.mobile": "Android",
    "stack.mobile.desc":
      "Desarrollo nativo para dispositivos móviles: lectores RFID, geolocalización y comunicación con hardware.",
    "stack.frontend": "Frontend",
    "stack.frontend.desc":
      "Interfaces web rápidas y mantenibles, del portfolio estático a paneles de administración complejos.",
    "stack.backend": "Backend y datos",
    "stack.backend.desc": "Arquitectura multi-tenant para servir a varios clientes desde un solo codebase.",
    "stack.tools": "Despliegue e infraestructura",
    "stack.tools.desc":
      "Flujo CI/CD completo: cada commit despliega, con funciones serverless para la lógica de backend.",
    "theme.select": "Elige el tema",
  },
  en: {
    "meta.title": "Joan Enajas — Application developer & product builder",
    "meta.description":
      "Android & Web Developer. Real projects with paying clients and my own product, from web templates to the centralized management panel.",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.stack": "Stack",
    "nav.about": "About me",
    "nav.contact": "Contact",
    "footer.about": "About me",
    "footer.contact": "Contact",
    "hero.greeting": "Hi, I'm Joan",
    "hero.headline":
      "I build products that solve real problems, from the first client to the system that grows all of them at once.",
    "hero.description":
      "Android & Web Developer. I work with real clients and have built my own product to manage them. Below you'll find my experience and the projects that prove it.",
    "about.p1":
      "I'm Joan, an Android and web developer. I like taking a concrete problem and turning it into <strong>a product that actually works</strong> — at work, field apps for industrial devices; on my own, a web-presence SaaS for local businesses with real, active clients.",
    "about.p2":
      "That practical approach has led me to <strong>build tools from scratch</strong> when the existing ones didn't fit — like the custom admin panel I built so my clients could manage their content without touching code.",
    "about.p3":
      "Right now I'm evolving my product's architecture toward a multi-tenant model on Supabase/PostgreSQL, so a single codebase can serve different kinds of business. I'm interested in <strong>building systems that can be maintained and grown over time</strong>, not just made to work on delivery day.",
    "experience.sectionTitle": "Work experience",
    "experience.idwaste.title": "Android Developer",
    "experience.idwaste.company": "IDWaste",
    "experience.idwaste.date": "2024 — Present",
    "experience.idwaste.description":
      "Android development for field operations on industrial Speedata devices: RFID UHF read/write apps, GPS navigation with the TomTom SDK and HERE, and custom routes, BLE communication with container-locking hardware, and NMEA parsing for devices without Google services. Maintenance and evolution of production apps used daily by waste-collection teams across multiple municipalities.",
    "experience.aduxia.title": "Full Stack Internship",
    "experience.aduxia.company": "Aduxia",
    "experience.aduxia.date": "February 2023 — July 2023",
    "experience.aduxia.description":
      "I built and styled web interfaces with Bootstrap, Tailwind and Chakra UI, following the coding standards and workflow of a professional development team.",
    "projects.sectionTitle": "Projects",
    "projects.otherTitle": "Other projects & exercises",
    "projects.liveLink": "View live",
    "projects.viewVideo": "Project video",
    "projects.code": "Code",
    "projects.restaurantTemplate.title": "Restaurant templates",
    "projects.restaurantTemplate.tagline": "Web presence platform for local businesses, with its own admin panel",
    "projects.restaurantTemplate.description":
      "A web presence platform for local businesses with its own admin panel: the client updates today's menu from their phone and it publishes itself, no code involved. Automatic CA/ES/EN translation via the Gemini API and a serverless JAMstack architecture (content versioned in Git, serverless functions on Netlify). Built white-label: one codebase, replicable per client with their own branding.",
    "projects.restaurantTemplate.businessCta": "Have a local business? Get in touch and let's talk.",
    "projects.saas.title": "Admin panel (React)",
    "projects.saas.tagline": "The system born out of that first project",
    "projects.saas.description":
      "Hand-editing TypeScript files for every content change doesn't scale. I built my own React panel with two access levels: the client manages their daily menu from their phone, and I have a separate admin view with backend-verified roles (Netlify Identity JWTs, content validation and traceability of who made each change). Designed as the foundation for a future multi-tenant panel that centralizes every client in one place.",
    "projects.saas.evolutionNote": "Grew out of that first project",
    "projects.saas.link1": "Client view · mobile",
    "projects.saas.link2": "Admin view · JWT",
    "projects.saas.superadminNote":
      "The superadmin itself is in Catalan, my working language — but the translation tool detects it just the same, and the live site still works fine across all three languages.",
    "projects.courtstats.title": "CourtStats",
    "projects.courtstats.tagline": "Real-time team management and scoreboard with per-player stats",
    "projects.courtstats.description":
      "A real-time basketball team management and scoreboard app: every game tracks points, rebounds and assists player by player, with the scoreboard syncing instantly across devices via Firestore. Custom framework-free SPA router, manual-approval authentication (pending → approved → admin), and a dashboard with monthly and historical per-player stats. It's an installable PWA that also works on mobile. Built to solve a real need for the team, not as an exercise.",
    "projects.pizza.title": "PizzaLgust — 100% customizable pizza app",
    "projects.pizza.description":
      "A native Android app in Kotlin to customize a pizza ingredient by ingredient, with real-time state management driving price and composition as selections change.",
    "stack.sectionTitle": "Stack",
    "stack.subtitle": "Technologies I work with daily, both in industrial production and on my own SaaS product.",
    "stack.mobile": "Android",
    "stack.mobile.desc": "Native development for mobile devices: RFID readers, geolocation, and hardware communication.",
    "stack.frontend": "Frontend",
    "stack.frontend.desc": "Fast, maintainable web interfaces, from the static portfolio to complex admin panels.",
    "stack.backend": "Backend & data",
    "stack.backend.desc": "Multi-tenant architecture to serve multiple clients from a single codebase.",
    "stack.tools": "Deployment & infrastructure",
    "stack.tools.desc": "Full CI/CD flow: every commit deploys, with serverless functions for backend logic.",
    "theme.select": "Choose theme",
  },
} as const
