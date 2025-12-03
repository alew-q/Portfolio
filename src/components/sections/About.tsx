import { useEffect, useRef, useState } from 'react';

export function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aparece al entrar y se esconde al salir, para que la animación se repita
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
      id="about"
      ref={sectionRef}
      className="border-t border-slate-800/60"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16 grid gap-16 md:grid-cols-[2fr_1fr]">
        {/* Columna izquierda: texto principal */}
        <div
          className={`
            space-y-4 text-sm text-slate-300
            transform transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">Sobre mí</h2>
          <p>
            Desarrollador full stack con experiencia en la creación de sistemas web modernos,
            automatización de procesos y soluciones de Business Intelligence. Mi pasión es construir
            aplicaciones que resuelvan problemas reales.
          </p>
          <p>
            Actualmente estoy cursando Ingeniería Informática en la Universidad Peruana Cayetano
            Heredia y he trabajado en diversos proyectos que van desde ticketing hasta registros
            médicos de pacientes.
          </p>
        </div>

        {/* Columna derecha: ubicación / correo */}
        <div
          className={`
            space-y-6 text-sm text-slate-300 md:pl-10
            transform transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
          style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
        >
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Ubicación
            </h3>
            <p className="mt-1">Lima, Perú</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Email
            </h3>
            <p className="mt-1">alewithoutq@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
