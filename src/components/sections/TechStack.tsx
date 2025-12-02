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
  SiVercel,
  SiDocker,
  SiFirebase,
  SiFigma,
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

export function TechStack({ t }: { t: Translations }) {
  return (
    <section className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-6">
          {t.sections.techStack}
        </h2>

        <div className="grid gap-8 md:grid-cols-4 text-sm text-slate-300">
          {COLUMNS.map((col) => (
            <div key={col.id}>
              <h3 className="mb-3 text-sm font-semibold text-slate-100">
                {getColumnTitle(col.id, t)}
              </h3>

              <ul className="space-y-2">
                {col.items.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 border border-slate-700">
                      <Icon className="h-5 w-5 text-sky-400" />
                    </div>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
