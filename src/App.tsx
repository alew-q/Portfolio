import { useState } from 'react';
import type { Lang } from './i18n';
import { translations } from './i18n';

import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

function App() {
  const [lang, setLang] = useState<Lang>('es');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Layout lang={lang} t={t} onChangeLang={setLang}>
        <div key={lang}>
          <Hero t={t} lang={lang} />
          <About t={t} />
          <Experience t={t} />
          <Projects t={t} />
          <Certifications t={t} />
          <Contact t={t} />
        </div>
      </Layout>
    </div>
  );
}

export default App;
