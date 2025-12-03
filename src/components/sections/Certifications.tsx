import { useEffect, useRef, useState } from 'react';

type Cert = {
  title: string;
  org: string;
  date: string; // Ej: "Nov 2025", "Ene 2025"
};

const CERTS: Cert[] = [
  { title: 'Remote Work Professional', org: 'CertiProf', date: 'Dic 2025' },
  { title: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy', date: 'Nov 2025' },
  { title: 'Scrum Foundation', org: 'CertiProf', date: 'Sep 2023' },
  { title: 'Git y GitHub', org: 'Oracle Alura Latam', date: 'Ene 2025' },
  { title: 'HTML, CSS y JavaScript', org: 'Oracle Alura Latam', date: 'Ene 2025' },
  { title: 'Business Intelligence Foundation', org: 'CertiProf', date: 'Sep 2024' },
  { title: 'AWS Academy Cloud Foundations', org: 'AWS', date: 'Jun 2023' },
];

// Mapeo de meses abreviados en español a número
const MONTH_MAP: Record<string, number> = {
  Ene: 1,
  Feb: 2,
  Mar: 3,
  Abr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Ago: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dic: 12,
};

function parseDate(date: string) {
  const [monthStr, yearStr] = date.split(' ');
  const month = MONTH_MAP[monthStr] ?? 0;
  const year = Number(yearStr) || 0;
  return { year, month };
}

export function Certifications() {
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
  const sortedCerts = [...CERTS].sort((a, b) => {
    const da = parseDate(a.date);
    const db = parseDate(b.date);

    if (db.year !== da.year) {
      return db.year - da.year; // año desc
    }
    return db.month - da.month; // mes desc
  });

  // Dividir en dos columnas: primero se llena la izquierda, luego la derecha
  const mid = Math.ceil(sortedCerts.length / 2);
  const leftColumn = sortedCerts.slice(0, mid);
  const rightColumn = sortedCerts.slice(mid);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="border-t border-slate-800/60"
    >
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-8">
          Certificaciones
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((c, index) => (
              <div
                key={c.title}
                className={`
                  flex items-center justify-between rounded-xl border border-slate-800 
                  bg-slate-900/40 px-4 py-3 text-sm
                  transform transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{
                  // index base 0
                  transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                }}
              >
                <div>
                  <p className="font-medium text-slate-100">{c.title}</p>
                  <p className="text-xs text-slate-400">{c.org}</p>
                </div>
                <span className="text-xs text-sky-400 whitespace-nowrap">
                  {c.date}
                </span>
              </div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((c, index) => (
              <div
                key={c.title}
                className={`
                  flex items-center justify-between rounded-xl border border-slate-800 
                  bg-slate-900/40 px-4 py-3 text-sm
                  transform transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{
                  // sumamos mid para que el stagger siga la secuencia después de la primera columna
                  transitionDelay: isVisible ? `${(mid + index) * 100}ms` : '0ms',
                }}
              >
                <div>
                  <p className="font-medium text-slate-100">{c.title}</p>
                  <p className="text-xs text-slate-400">{c.org}</p>
                </div>
                <span className="text-xs text-sky-400 whitespace-nowrap">
                  {c.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
