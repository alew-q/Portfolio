// src/components/sections/Hero.tsx
import { useEffect, useRef, useState } from 'react';
import type { Translations } from '../../i18n';

export function Hero({ t }: { t: Translations }) {
  const heroAny = t.hero as any;
  const hasSplitRole = heroAny.rolePrimary && heroAny.roleSecondary;

  const sectionRef = useRef<HTMLElement | null>(null);
  const [fadeProgress, setFadeProgress] = useState(0); // 0 = visible, 1 = totalmente desvanecido

  useEffect(() => {
    const handleScroll = () => {
      const node = sectionRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // Cuando top = 0  -> distanceFromTop = 0
      // Cuando top = -windowHeight -> distanceFromTop = windowHeight
      const distanceFromTop = Math.min(Math.max(-rect.top, 0), windowHeight);
      const progress = distanceFromTop / windowHeight; 

      setFadeProgress(progress);
    };

    // Calcular una vez al cargar
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 0 -> 1 (visible) | 1 -> 0 (invisible)
  const opacity = 1 - fadeProgress;
  const translateY = fadeProgress * 24; // hasta ~24px hacia abajo cuando se va

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen flex items-center"
    >
      <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16 grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center">
        {/* Columna de texto */}
        <div
          className={`
            space-y-7
            transition-all duration-200 ease-out
          `}
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <p className="text-lg sm:text-xl font-semibold text-sky-300 tracking-tight">
            {t.hero.hi}{' '}
            <span className="text-slate-50">{t.hero.name} </span>
          </p>

          {/* Título principal con gradiente animado */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            {hasSplitRole ? (
              <span
                className="
                  block
                  bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400
                  bg-[length:200%_200%]
                  bg-clip-text text-transparent
                  animate-gradient-move
                "
              >
                {heroAny.rolePrimary}{' '}
                <span className="font-black">{heroAny.roleSecondary}</span>
              </span>
            ) : (
              <span
                className="
                  block
                  bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-400
                  bg-[length:200%_200%]
                  bg-clip-text text-transparent
                  animate-gradient-move
                "
              >
                {t.hero.role}
              </span>
            )}
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-slate-300">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-sky-500 px-5 py-2 text-sm font-semibold text-sky-400 hover:bg-sky-500/10 transition-colors"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400">
            <span>{t.hero.availability}</span>
            <span className="h-1 w-1 rounded-full bg-sky-500 inline-block align-middle mx-1" />
            <span>{t.hero.location}</span>
          </div>
        </div>

        {/* Columna del avatar */}
        <div
          className={`
            flex justify-center md:justify-end
            transition-all duration-200 ease-out
          `}
          style={{
            opacity,
            transform: `translateY(${translateY}px)`,
          }}
        >
          <div className="relative">
            <div className="h-52 w-52 rounded-full bg-gradient-to-tr from-sky-500 via-cyan-400 to-blue-600 p-[3px] shadow-[0_0_40px_rgba(56,189,248,0.4)]">
              <div className="h-full w-full rounded-full bg-[#020617] flex flex-col items-center justify-center gap-2">
                <span className="text-4xl">AS</span>
                <span className="text-xs text-slate-300">{t.hero.avatarLabel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
