type ExperienceItem = {
  title: string;
  org: string;
  year: string;
  description: string;
  tags: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    title: 'Sistema de venta de entradas',
    org: 'Proyecto académico UPCH',
    year: '2025',
    description:
      'Ticketing con asientos dinámicos, validación de pagos y códigos QR.',
    tags: ['TypeScript', 'PHP', 'Laravel', 'PostgreSQL', 'Tailwind'],
  },
  {
    title: 'RaWork - Sistema de Registro Tópicos',
    org: 'UPCH',
    year: '2025',
    description:
      'Plataforma web de autenticación en tiempo real y base de datos NoSQL.',
    tags: ['Firebase', 'NoSQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Sistema web de registro de pacientes',
    org: 'Proyecto de gestión',
    year: '2024',
    description:
      'Gestión de pacientes y consultas médicas con interfaz intuitiva.',
    tags: ['Firebase', 'NoSQL', 'HTML', 'CSS', 'JavaScript'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-8">Experiencia</h2>

        <div className="space-y-10">
          {EXPERIENCES.map((exp) => (
            <div
              key={exp.title}
              className="grid gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]"
            >
              <div className="border-l border-sky-500/60 pl-6">
                <h3 className="font-semibold text-slate-50">{exp.title}</h3>
                <p className="text-xs text-slate-400 mt-1">{exp.org}</p>
                <p className="mt-3 text-sm text-slate-300">{exp.description}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-slate-800 px-2 py-1 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-sm text-sky-400 md:text-right">{exp.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
