import { useState } from 'react';
import type { Lang, Translations } from '../../i18n';

type Props = {
  lang: Lang;
  t: Translations;
  onChangeLang: (lang: Lang) => void;
};

export function Navbar({ lang, t, onChangeLang }: Props) {
  const isEn = lang === 'en';
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-slate-800/60 bg-[#020617]/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-xl font-semibold tracking-tight">
          <span className="text-sky-400">alew</span>
          <span className="text-slate-100">.q</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <a href="#about" className="hover:text-sky-400 transition-colors">
            {t.nav.about}
          </a>
          <a href="#experience" className="hover:text-sky-400 transition-colors">
            {t.nav.experience}
          </a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">
            {t.nav.projects}
          </a>
          <a href="#certifications" className="hover:text-sky-400 transition-colors">
            {t.nav.certifications}
          </a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">
            {t.nav.contact}
          </a>

          {/* selector idioma */}
          <div className="relative ml-6 text-xs">
            <button
              type="button"
              onClick={() => setIsLangOpen((prev) => !prev)}
              className="flex items-center gap-1 rounded-full border border-slate-700 px-3 py-1 text-slate-300 hover:border-sky-500 hover:text-sky-400"
            >
              {lang.toUpperCase()}
              <span className="text-[10px]">▾</span>
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-md border border-slate-700 bg-[#020617] shadow-lg py-1">
                <button
                  className={`block w-full px-3 py-1 text-left text-xs hover:bg-slate-800 ${
                    !isEn ? 'text-sky-400' : 'text-slate-300'
                  }`}
                  onClick={() => {
                    onChangeLang('es');
                    setIsLangOpen(false);
                  }}
                >
                  Español
                </button>
                <button
                  className={`block w-full px-3 py-1 text-left text-xs hover:bg-slate-800 ${
                    isEn ? 'text-sky-400' : 'text-slate-300'
                  }`}
                  onClick={() => {
                    onChangeLang('en');
                    setIsLangOpen(false);
                  }}
                >
                  English
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
