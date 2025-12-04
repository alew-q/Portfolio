export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
    },

    hero: {
      hi: "Hi, I'm",
      name: 'Alexander',
      role: 'Full Stack Developer',
      description:
        'Transforming ideas into functional and attractive web applications.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Download CV',
      availability: 'Available for internships',
      location: 'Remote work / Hybrid',
      avatarLabel: 'Alexander',
    },

    sections: {
      about: 'About me',
      techStack: 'Tech Stack',
      techStackSubtitle: 'A bit about me and the technologies I use.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
      cloud: 'Cloud',
      projects: 'Projects',
      certifications: 'Certifications',
      contact: 'Contact',
      experience: 'Experience',
    },

    aboutSection: {
      p1: `Full stack developer with experience in building modern web systems, process automation, and data management in institutional environments. I’m passionate about creating technological solutions that solve real problems and improve operational efficiency.`,
      p2: `I have participated in projects that integrate web development, data analysis, and Business Intelligence solutions, contributing to the optimization of administrative workflows and information management. I handle databases, intuitive UI design, and dashboards that support decision-making.`,
      p3: `I am currently studying at Universidad Peruana Cayetano Heredia, where I have worked on initiatives ranging from student portals to medical record systems for university clinics, including process digitization and full development of internal platforms.`,
    },

    projectsSection: {
      title: 'Projects',
      viewDetails: 'View details',

      items: {
        ticketing: {
          title: 'UPCH Ticketing System',
          subtitle: 'Complete event ticketing platform',
          description:
            'Web platform with payment validation, dynamic seating, and QR code generation. Developed for UPCH’s 64th Anniversary.',
          tagsTitle: 'Technologies',
          featuresTitle: 'Features',
          features: [
            'Payment validation',
            'QR codes',
            'Dynamic seating',
            'Event management',
          ],
        },

        rework: {
          title: 'UPCH Medical Care Registration System',
          subtitle: 'Web system for medical topic records',
          description:
            'Platform for registering patients and medical care inside the university clinics.',
          tagsTitle: 'Technologies',
          featuresTitle: 'Features',
          features: [
            'Data registration',
            'Roles and permissions',
            'Care history',
          ],
        },

        laliga: {
          title: 'Sports Prediction System',
          subtitle: 'Predictive model for LaLiga match outcomes',
          description:
            'Web application that calculates win/draw/loss probabilities using historical football data.',
          tagsTitle: 'Technologies',
          featuresTitle: 'Features',
          features: [
            'Team selection (home vs away)',
            'Probability calculation with bar chart',
            'Panel with features used for each prediction',
          ],
        },

        dashboard: {
          title: 'UPCH 2024 Medical Attention Dashboard',
          subtitle:
            'Analytical platform for visualization and tracking of medical care records',
          description:
            'Full visualization of 2024 medical attentions with KPIs, faculty analysis, diagnoses, locations, and trends.',
          tagsTitle: 'Technologies',
          featuresTitle: 'Features',
          features: [
            'Analysis of diagnoses and type of care',
            'Comparison by campus and peak days',
            'Monthly trends and percentage variations',
          ],
        },
      },
    },

    experienceSection: {
      items: [
        {
          title: 'Health pre-intern and software developer',
          org: 'Oficina Universitaria de Bienestar Estudiantil, UPCH',
          period: 'Current',
          bullets: [
            'Management of medical appointments and coordination of PEMA evaluations for students.',
            'Support in nutrition care management and digitalization of records.',
            'End-to-end development of internal systems for the department.',
            'Technical and functional support for the Tópicos system; automation of internal processes.',
            'Creation of reports to track key indicators in student health.',
          ],
        },
        {
          title: 'Software development internship',
          org: 'Oficina Universitaria de Bienestar Estudiantil, UPCH',
          period: '2024',
          bullets: [
            'Design, development and deployment of the Tópicos System.',
            'Digitalization and migration of historical Tópicos data.',
            'Creation of the institutional dashboard for 2024 medical attentions.',
            'Training of administrative staff and support in system adoption.',
          ],
        },
      ],
    },
  },

  // ─────────────────────────────────────────────────────────────

  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
    },

    hero: {
      hi: 'Hola, soy',
      name: 'Alexander',
      role: 'Desarrollador Full Stack',
      description:
        'Transformo ideas en aplicaciones web funcionales y atractivas.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'Descargar CV',
      availability: 'Disponible para prácticas',
      location: 'Trabajo remoto / híbrido',
      avatarLabel: 'Alexander',
    },

    sections: {
      about: 'Sobre mí',
      techStack: 'Stack tecnológico',
      techStackSubtitle:
        'Un poco sobre mí y las tecnologías con las que trabajo.',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas',
      cloud: 'Cloud',
      projects: 'Proyectos',
      certifications: 'Certificaciones',
      contact: 'Contacto',
      experience: 'Experiencia',
    },

    aboutSection: {
      p1: `Desarrollador full stack con experiencia en la creación de sistemas web modernos, automatización de procesos y gestión de datos en entornos institucionales. Me apasiona construir soluciones tecnológicas que resuelvan problemas reales y mejoren la eficiencia operativa.`,
      p2: `He participado en proyectos que integran desarrollo web, análisis de datos y soluciones de Business Intelligence, contribuyendo a optimizar flujos administrativos y la gestión de información. Manejo bases de datos, diseño de interfaces intuitivas y desarrollo de dashboards que facilitan la toma de decisiones.`,
      p3: `Actualmente estudio en la Universidad Peruana Cayetano Heredia, donde he trabajado en iniciativas que van desde portales estudiantiles hasta sistemas de registro médico para tópicos universitarios, incluyendo digitalización de procesos y desarrollo integral de plataformas internas.`,
    },

    projectsSection: {
      title: 'Proyectos',
      viewDetails: 'Ver detalles',

      items: {
        ticketing: {
          title: 'Sistema de Ticketing UPCH',
          subtitle: 'Plataforma completa de venta de entradas',
          description:
            'Plataforma web con validación de pagos, asientos dinámicos y generación de códigos QR. Realizado para el Aniversario 64 de la Cayetano.',
          tagsTitle: 'Tecnologías',
          featuresTitle: 'Características',
          features: [
            'Validación de pagos',
            'Códigos QR',
            'Asientos dinámicos',
            'Gestión de eventos',
          ],
        },

        rework: {
          title: 'Sistema de registro de atenciones médicas UPCH',
          subtitle: 'Sistema web para registro de tópicos',
          description:
            'Plataforma para registrar pacientes y atenciones médicas dentro de los tópicos de la universidad.',
          tagsTitle: 'Tecnologías',
          featuresTitle: 'Características',
          features: [
            'Registro de datos',
            'Roles y permisos',
            'Historial de atenciones',
          ],
        },

        laliga: {
          title: 'Sistema de predicción deportiva',
          subtitle: 'Modelo predictivo de resultados para La Liga Española',
          description:
            'Aplicación web que calcula probabilidades de victoria/empate/derrota usando datos históricos de fútbol.',
          tagsTitle: 'Tecnologías',
          featuresTitle: 'Características',
          features: [
            'Selección de equipo local y visitante',
            'Cálculo de probabilidades con gráfica de barras',
            'Panel con variables usadas en cada predicción',
          ],
        },

        dashboard: {
          title: 'Dashboard de atenciones en Tópicos UPCH 2024',
          subtitle:
            'Plataforma analítica para visualizar y monitorear el registro histórico de atenciones',
          description:
            'Visualización completa de las atenciones 2024 con KPIs, análisis por facultad, diagnósticos, sedes y tendencias.',
          tagsTitle: 'Tecnologías',
          featuresTitle: 'Características',
          features: [
            'Análisis de diagnósticos y tipo de atención',
            'Comparativa por sedes y días de mayor demanda',
            'Tendencia mensual y variación porcentual',
          ],
        },
      },
    },

    experienceSection: {
      items: [
        {
          title: 'Practicante pre de salud y desarrollador de software',
          org: 'Oficina Universitaria de Bienestar Estudiantil, UPCH',
          period: 'Actual',
          bullets: [
            'Gestión de atenciones y coordinación de evaluaciones médicas PEMA para alumnos.',
            'Apoyo en gestión de atenciones de nutrición y digitalización de registros.',
            'Desarrollo completo de sistemas internos para el área.',
            'Soporte técnico y funcional al sistema de Tópicos; automatización de procesos internos.',
            'Creación de reportes para seguimiento de indicadores clave en salud estudiantil.',
          ],
        },
        {
          title: 'Pasantía como desarrollador de software',
          org: 'Oficina Universitaria de Bienestar Estudiantil, UPCH',
          period: '2024',
          bullets: [
            'Diseño, desarrollo y despliegue del Sistema de Tópicos.',
            'Digitalización y migración de la data histórica de Tópicos.',
            'Creación del dashboard institucional de registro de atenciones 2024.',
            'Capacitación a personal administrativo y soporte en la adopción del sistema.',
          ],
        },
      ],
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
