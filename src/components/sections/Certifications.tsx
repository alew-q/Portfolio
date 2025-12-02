type Cert = {
  title: string;
  org: string;
  date: string;
};

const CERTS: Cert[] = [
  { title: 'Introduction to Cybersecurity', org: 'Cisco Networking Academy', date: 'Nov 2025' },
  { title: 'Scrum Foundation', org: 'CertiProf', date: 'Sep 2023' },

  { title: 'Git y GitHub', org: 'Oracle Alura Latam', date: 'Ene 2025' },
  
  { title: 'HTML, CSS y JavaScript', org: 'Oracle Alura Latam', date: 'Ene 2025' },
  { title: 'Business Intelligence Foundation', org: 'CertiProf', date: 'Sep 2024' },
  
  { title: 'AWS Academy Cloud Foundations', org: 'AWS', date: 'Jun 2023' },

];

export function Certifications() {
  return (
    <section id="certifications" className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-8">Certificaciones</h2>

        <div className="grid gap-4 md:grid-cols-2">
          {CERTS.map((c) => (
            <div
              key={c.title}
              className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm"
            >
              <div>
                <p className="font-medium text-slate-100">{c.title}</p>
                <p className="text-xs text-slate-400">{c.org}</p>
              </div>
              <span className="text-xs text-sky-400">{c.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
