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
      ctaSecondary: 'LinkedIn',
      availability: 'Available for internships',
      location: 'Remote work / Hybrid',
      avatarLabel: 'Alexander',
    },
    sections: {
      techStack: 'Tech Stack',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Tools',
      cloud: 'Cloud',
    },

  },
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
      ctaSecondary: 'LinkedIn',
      availability: 'Disponible para prácticas',
      location: 'Trabajo remoto / híbrido',
      avatarLabel: 'Alexander',
    },
    sections: {
      techStack: 'Stack tecnológico',
      frontend: 'Frontend',
      backend: 'Backend',
      tools: 'Herramientas',
      cloud: 'Cloud',
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];