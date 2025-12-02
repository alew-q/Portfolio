import { useState } from 'react';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectModal } from './projects/ProjectModal';

const PROJECTS = [
  {
    id: 'ticketing',
    title: 'Sistema de Ticketing UPCH',
    subtitle: 'Plataforma completa de venta de entradas',
    description:
      'Plataforma web con validación de pagos, asientos dinámicos y generación de códigos QR.',
    tags: ['TypeScript', 'PHP', 'Laravel', 'PostgreSQL'],
    features: ['Validación de pagos', 'Códigos QR', 'Asientos dinámicos', 'Gestión de eventos'],
    stack: ['TypeScript', 'Laravel', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'rawork',
    title: 'RaWork - Plataforma de Registro',
    subtitle: 'Sistema web para registro de tópicos',
    description:
      'Autenticación en tiempo real para estudiantes y personal, con base de datos NoSQL.',
    tags: ['Firebase', 'NoSQL', 'Responsive Design'],
    features: ['Autenticación en tiempo real', 'Roles y permisos', 'Historial de atenciones'],
    stack: ['Firebase', 'React', 'Tailwind CSS'],
  },
  {
    id: 'patients',
    title: 'Gestor de Pacientes',
    subtitle: 'Aplicación para gestión de pacientes',
    description:
      'Gestión de consultas, pacientes y registros médicos con interfaz amigable.',
    tags: ['NoSQL', 'HTML', 'CSS', 'JavaScript'],
    features: ['Gestión de historias clínicas', 'Agenda de consultas'],
    stack: ['Firebase', 'React', 'Tailwind CSS'],
  },
];

export function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const openProject = PROJECTS.find((p) => p.id === openId);

  return (
    <section id="projects" className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-8">Proyectos</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              tags={p.tags}
              onOpen={() => setOpenId(p.id)}
            />
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
          />
        )}
      </div>
    </section>
  );
}
