// src/components/sections/Contact.tsx
import { useEffect, useRef, useState } from 'react';
import { FiMail, FiLinkedin, FiGithub } from 'react-icons/fi';
import type { Translations } from '../../i18n';

export function Contact({ t }: { t: Translations }) {
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

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="border-t border-slate-800/60"
    >
      <div
        className={`
          mx-auto w-full max-w-6xl px-6 py-16
          transform transition-all duration-700 ease-out
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        `}
      >
        <h2 className="text-2xl font-semibold text-slate-50 mb-4">
          {t.contactSection.title}
        </h2>

        <p className="text-sm text-slate-300 mb-6 max-w-xl">
          {t.contactSection.intro}
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          {/* Email */}
          <a
            href="mailto:alewithoutq@gmail.com"
            className="
              inline-flex items-center gap-2
              rounded-md border border-sky-500 px-4 py-2 text-sky-400
              hover:bg-sky-500/10 hover:border-sky-400
              transition-all duration-200 hover:-translate-y-0.5
            "
          >
            <FiMail className="h-4 w-4" />
            <span>{t.contactSection.emailLabel}</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/alexander-sirlupu-meza-510400258"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-md border border-slate-600 px-4 py-2 text-slate-200
              hover:bg-slate-800/80 hover:border-slate-400
              transition-all duration-200 hover:-translate-y-0.5
            "
          >
            <FiLinkedin className="h-4 w-4" />
            <span>{t.contactSection.linkedinLabel}</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex items-center gap-2
              rounded-md border border-slate-600 px-4 py-2 text-slate-200
              hover:bg-slate-800/80 hover:border-slate-400
              transition-all duration-200 hover:-translate-y-0.5
            "
          >
            <FiGithub className="h-4 w-4" />
            <span>{t.contactSection.githubLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
