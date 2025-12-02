// src/i18n.ts
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
        'Crafting web platforms, intelligent systems & delightful experiences.',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'LinkedIn',
      availability: 'Available for internships / trainee positions',
      location: 'Lima, Peru · Remote friendly',
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
        'Creación de plataformas web, sistemas inteligentes y experiencias placenteras.',
      ctaPrimary: 'Hablemos',
      ctaSecondary: 'LinkedIn',
      availability: 'Disponible para prácticas / trainee',
      location: 'Lima, Perú · Remote friendly',
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