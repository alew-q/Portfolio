import { useEffect, useRef, useState } from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiLaravel,
  SiPython,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker, 
  SiFigma,
  SiVercel,
  SiFirebase,
  SiRailway,
} from 'react-icons/si';
import type { IconType } from 'react-icons';
import type { Translations } from '../../i18n';

type TechItem = {
  name: string;
  icon: IconType;
};

type ColumnId = 'frontend' | 'backend' | 'tools' | 'cloud';

type Column = {
  id: ColumnId;
  items: TechItem[];
};

const COLUMNS: Column[] = [
  {
    id: 'frontend',
    items: [
      { name: 'HTML', icon: SiHtml5 },
      { name: 'CSS', icon: SiCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
    ],
  },
  {
    id: 'backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'PHP / Laravel', icon: SiLaravel },
      { name: 'Python', icon: SiPython },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    id: 'tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'Figma', icon: SiFigma },
      { name: 'Vercel', icon: SiVercel },
      { name: 'Railway', icon: SiRailway }
    ],
  },
  {
    id: 'cloud',
    items: [{ name: 'Firebase', icon: SiFirebase }],
  },
];

function getColumnTitle(id: ColumnId, t: Translations) {
  switch (id) {
    case 'frontend':
      return t.sections.frontend;
    case 'backend':
      return t.sections.backend;
    case 'tools':
      return t.sections.tools;
    case 'cloud':
      return t.sections.cloud;
  }
}

export function About({ t }: { t: Translations }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
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
      <div className="mx-auto w-full max-w-6xl px-6 py-16 space-y-10">
        {/* Título sección principal */}
        <div
          className={`
            transform transition-all duration-700 ease-out
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h2 className="text-2xl font-semibold text-slate-50 mb-2">
            {t.sections.about}
          </h2>
          <p className="text-sm text-slate-400">
            {t.sections.techStackSubtitle ??
              'Un poco sobre mí y las tecnologías con las que trabajo.'}
          </p>
        </div>

        <div className="space-y-10">
          {/* Sobre mí */}
          <div
            className={`
              space-y-6
              text-sm text-slate-300
              rounded-2xl border border-slate-800/80 bg-slate-900/40
              p-6
              transform transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <p>{t.aboutSection.p1}</p>
            <p>{t.aboutSection.p2}</p>
            <p>{t.aboutSection.p3}</p>
          </div>

          {/* Tech Stack */}
          <div
            className={`
              rounded-2xl border border-slate-800/80 bg-slate-900/40
              p-6
              transform transition-all duration-700 ease-out
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
            style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
          >
            {/* mismo estilo de título que "Sobre mí" */}
            <h2 className="text-2xl font-semibold text-slate-50 mb-2">
              {t.sections.techStack}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 text-sm text-slate-300 mt-2">
              {COLUMNS.map((col, index) => (
                <div
                  key={col.id}
                  className={`
                    space-y-2
                    transform transition-all duration-700 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}
                  `}
                  style={{
                    transitionDelay: isVisible
                      ? `${index * 120 + 180}ms`
                      : '0ms',
                  }}
                >
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {getColumnTitle(col.id, t)}
                  </h4>

                  {/* Chips compactos: FRONTEND -> HTML CSS JS ... */}
                  <div className="flex flex-wrap gap-2">
                    {col.items.map(({ name, icon: Icon }) => (
                      <span
                        key={name}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs"
                      >
                        <Icon className="h-4 w-4 text-sky-400" />
                        <span>{name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
