import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectModal } from './projects/ProjectModal';

import imgP1 from './projects/img/img_p_1.png';
import imgP2 from './projects/img/img_p_2.png';
import imgP3 from './projects/img/img_p_3.png';
import imgP4 from './projects/img/img_p_4.png';
import imgP5 from './projects/img/img_p_5.png';

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  features: string[];
  stack: string[];
  images?: string[];
};

const PROJECTS: Project[] = [
  {
    id: 'ticketing',
    title: 'Sistema de Ticketing UPCH',
    subtitle: 'Plataforma completa de venta de entradas',
    description:
      'Plataforma web con validación de pagos, asientos dinámicos y generación de códigos QR.\nRealizado para el Aniversario 64 de la Cayetano.',
    tags: ['TypeScript', 'PHP', 'Laravel', 'PostgreSQL'],
    features: ['Validación de pagos', 'Códigos QR', 'Asientos dinámicos', 'Gestión de eventos'],
    stack: ['TypeScript', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
    images: [imgP1,imgP2,imgP3],
  },
  {
    id: 'rework',
    title: 'Sistema de registro de atenciones médicas UPCH',
    subtitle: 'Sistema web para registro de tópicos',
    description:
      'Plataforma de registro de pacientes en tópicos de la universidad',
    tags: ['React','Firebase','Tailwind CSS'],
    features: ['Registro de datos', 'Roles y permisos', 'Historial de atenciones'],
    stack: ['Firebase Authenticator', 'Firebase Realtime Database', 'React', 'Tailwind CSS'],
    images: [imgP4],
  },
  {
    id: 'laliga',
    title: 'Sistema de predicción deportiva',
    subtitle: 'Modelo predictivo de resultados para La Liga Española',
    description:
      'Aplicación web para calcular probabilidades de resultado (G/E/P) en partidos de LaLiga con datos históricos',
    tags: ['Python', 'Streamlit','Kaggle'],
    features: ['Selección de equipo local y visitante (lista predefinida).', 'Cálculo de probabilidades con gráfica de barras.','Panel con features usadas para cada predicción.'],
    stack: ['Streamlit', 'Scikit-Learn', 'LightGBM','Pandas','Numpy'],
    images: [imgP5],
  },

  {
    id: 'dashboard',
    title: 'Dashboard de atenciones en Tópicos UPCH 2024',
    subtitle: 'Modelo predictivo de resultados para La Liga Española',
    description:
      'Aplicación web para calcular probabilidades de resultado (G/E/P) en partidos de LaLiga con datos históricos',
    tags: ['Python', 'Streamlit','Kaggle'],
    features: ['Selección de equipo local y visitante (lista predefinida).', 'Cálculo de probabilidades con gráfica de barras.','Panel con features usadas para cada predicción.'],
    stack: ['Streamlit', 'Scikit-Learn', 'LightGBM','Pandas','Numpy'],
    images: [imgP5],
  },
];

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = PROJECTS.find((p) => p.id === openId);

  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Efecto de aparición / desvanecimiento de la sección
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="border-t border-slate-800/60"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2
          className={`
            text-2xl font-semibold text-slate-50 mb-8
            transform transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          Proyectos
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p, index) => (
            <div
              key={p.id}
              className={`
                transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
              }}
            >
              <ProjectCard
                title={p.title}
                subtitle={p.subtitle}
                description={p.description}
                tags={p.tags}
                onOpen={() => setOpenId(p.id)}
              />
            </div>
          ))}
        </div>

        {openProject && (
          <ProjectModal
            open={true}
            onClose={() => setOpenId(null)}
            title={openProject.title}
            description={openProject.description}
            features={openProject.features}
            stack={openProject.stack}
            images={openProject.images}
          />
        )}
      </div>
    </section>
  );
}
