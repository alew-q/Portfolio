import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n';

type CertId =
  | 'remoteWork'
  | 'cybersecurity'
  | 'scrum'
  | 'gitGithub'
  | 'htmlCssJs'
  | 'bi'
  | 'aws';

type CertConfig = {
  id: CertId;
  year: number;
  month: number; // 1-12
};

// Solo info para orden (sin textos)
const CERTS_CONFIG: CertConfig[] = [
  { id: 'remoteWork',    year: 2025, month: 12 }, // Dic 2025
  { id: 'cybersecurity', year: 2025, month: 11 }, // Nov 2025
  { id: 'gitGithub',     year: 2025, month: 1  }, // Ene 2025
  { id: 'htmlCssJs',     year: 2025, month: 1  }, // Ene 2025
  { id: 'bi',            year: 2024, month: 9  }, // Sep 2024
  { id: 'aws',           year: 2023, month: 6  }, // Jun 2023
  { id: 'scrum',         year: 2023, month: 9  }, // Sep 2023
];

export function Certifications({ t }: { t: Translations }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Aparece al entrar y se esconde al salir
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Ordenar de más reciente a menos reciente
  const sortedCerts = [...CERTS_CONFIG].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return b.month - a.month;
  });

  // Dividir en dos columnas
  const mid = Math.ceil(sortedCerts.length / 2);
  const leftColumn = sortedCerts.slice(0, mid);
  const rightColumn = sortedCerts.slice(mid);

  const certTexts = t.certificationsSection.items;

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="border-t border-slate-800/60"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-8">
          {t.certificationsSection.title}
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((c, index) => {
              const data = certTexts[c.id];
              return (
                <div
                  key={c.id}
                  className={`
                    flex items-center justify-between rounded-xl border border-slate-800 
                    bg-slate-900/40 px-4 py-3 text-sm
                    transform transition-all duration-700 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                  style={{
                    transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                  }}
                >
                  <div>
                    <p className="font-medium text-slate-100">{data.title}</p>
                    <p className="text-xs text-slate-400">{data.org}</p>
                  </div>
                  <span className="text-xs text-sky-400 whitespace-nowrap">
                    {data.date}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((c, index) => {
              const data = certTexts[c.id];
              return (
                <div
                  key={c.id}
                  className={`
                    flex items-center justify-between rounded-xl border border-slate-800 
                    bg-slate-900/40 px-4 py-3 text-sm
                    transform transition-all duration-700 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                  `}
                  style={{
                    transitionDelay: isVisible
                      ? `${(mid + index) * 100}ms`
                      : '0ms',
                  }}
                >
                  <div>
                    <p className="font-medium text-slate-100">{data.title}</p>
                    <p className="text-xs text-slate-400">{data.org}</p>
                  </div>
                  <span className="text-xs text-sky-400 whitespace-nowrap">
                    {data.date}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
