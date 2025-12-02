import type { ReactNode } from 'react';
import type { Lang, Translations } from '../../i18n';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

type Props = {
  lang: Lang;
  t: Translations;
  onChangeLang: (lang: Lang) => void;
  children: ReactNode;
};

export function Layout({ lang, t, onChangeLang, children }: Props) {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100">
      <Navbar lang={lang} t={t} onChangeLang={onChangeLang} />

      <main>{children}</main>

      <Footer />
    </div>
  );
}
