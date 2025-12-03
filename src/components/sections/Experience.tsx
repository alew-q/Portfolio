import { useEffect, useRef, useState } from 'react';

type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

const EXPERIENCES: ExperienceItem[] = [
  {
    title: 'Practicante Pre de Salud y desarrollador de software',
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
];

export function Experience() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

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
      id="experience"
      ref={sectionRef}
      className="border-t border-slate-800/60"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-8">
          Experiencia
        </h2>

        <div className="space-y-10">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.title}
              className={`
                grid gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,1fr)]
                transform transition-all duration-700 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
              `}
              style={{
                transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
              }}
            >
              {/* Columna izquierda: contenido */}
              <div className="border-l border-sky-500/60 pl-6">
                <h3 className="font-semibold text-slate-50">
                  {exp.title}{' '}
                  <span className="text-slate-400">- {exp.org}</span>
                </h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-300 list-disc list-outside ml-4">
                  {exp.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Columna derecha: periodo */}
              <div className="text-sm text-sky-400 md:text-right">
                {exp.period === 'Actual' ? (
                  <span className="italic">(Actual)</span>
                ) : (
                  <span className="italic">({exp.period})</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
