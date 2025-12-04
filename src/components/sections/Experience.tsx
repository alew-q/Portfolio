import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n';

export function Experience({ t }: { t: Translations }) {
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

  const experiences = t.experienceSection.items;

  return (
    <section
      id="experience"
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
          {t.sections.experience}
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${exp.org}-${exp.period}`}
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
                <span className="italic">({exp.period})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
