import { useEffect, useRef, useState } from 'react';
import { ProjectCard } from './projects/ProjectCard';
import { ProjectModal } from './projects/ProjectModal';
import type { Translations } from '../../i18n';

import imgP1 from './projects/img/img_p_1.png';
import imgP2 from './projects/img/img_p_2.png';
import imgP3 from './projects/img/img_p_3.png';
import imgP4 from './projects/img/img_p_4.png';
import imgP5 from './projects/img/img_p_5.png';
import imgP6 from './projects/img/img_p_6.png';

type ProjectId = 'ticketing' | 'rework' | 'laliga' | 'dashboard';

type ProjectConfig = {
  id: ProjectId;
  tags: string[];
  stack: string[];
  images?: string[];
};

const PROJECTS_CONFIG: ProjectConfig[] = [
  {
    id: 'ticketing',
    tags: ['TypeScript', 'PHP', 'React', 'Laravel', 'PostgreSQL'],
    stack: ['TypeScript', 'Laravel', 'React', 'PostgreSQL', 'Tailwind CSS'],
    images: [imgP1, imgP2, imgP3],
  },
  {
    id: 'rework',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    stack: ['Firebase Authenticator', 'Firebase Realtime Database', 'React', 'Tailwind CSS'],
    images: [imgP4],
  },
  {
    id: 'laliga',
    tags: ['Python', 'Streamlit', 'Kaggle'],
    stack: ['Streamlit', 'Scikit-Learn', 'LightGBM', 'Pandas', 'Numpy'],
    images: [imgP5],
  },
  {
    id: 'dashboard',
    tags: ['Power BI', 'Visualización de datos', 'ETL'],
    stack: ['Power BI', 'Excel', 'Power Query'],
    images: [imgP6],
  },
];

export function Projects({ t }: { t: Translations }) {
  const [openId, setOpenId] = useState<ProjectId | null>(null);

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

  const projectsTexts = t.projectsSection.items;
  const openProjectConfig = openId
    ? PROJECTS_CONFIG.find((p) => p.id === openId) ?? null
    : null;
  const openProjectText =
    openId && projectsTexts[openId] ? projectsTexts[openId] : null;

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
          {t.sections.projects}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS_CONFIG.map((config, index) => {
            const data = projectsTexts[config.id];

            return (
              <div
                key={config.id}
                className={`
                  transform transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
                style={{
                  transitionDelay: isVisible ? `${index * 120}ms` : '0ms',
                }}
              >
                <ProjectCard
                  title={data.title}
                  subtitle={data.subtitle}
                  description={data.description}
                  tags={config.tags}
                  onOpen={() => setOpenId(config.id)}
                  viewDetailsLabel={t.projectsSection.viewDetails}
                />
              </div>
            );
          })}
        </div>

        {openProjectConfig && openProjectText && (
          <ProjectModal
            open={true}
            onClose={() => setOpenId(null)}
            title={openProjectText.title}
            description={openProjectText.description}
            features={[...openProjectText.features]}
            stack={openProjectConfig.stack}
            images={openProjectConfig.images}
          />
        )}
      </div>
    </section>
  );
}
