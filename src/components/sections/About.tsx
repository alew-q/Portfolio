export function About() {
  return (
    <section id="about" className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-16 grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="space-y-4 text-sm text-slate-300">
          <h2 className="text-2xl font-semibold text-slate-50 mb-4">Sobre mí</h2>
          <p>
            Soy un desarrollador full stack con experiencia en la creación de sistemas web modernos,
            automatización de procesos y soluciones de Business Intelligence. Mi pasión es construir
            aplicaciones que resuelvan problemas reales.
          </p>
          <p>
            Actualmente estoy cursando Ingeniería Informática en Perú y he trabajado en diversos
            proyectos que van desde ticketing hasta registros médico de pacientes.
          </p>
        </div>

        <div className="space-y-6 text-sm text-slate-300">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Ubicación
            </h3>
            <p className="mt-1">Lima, Perú</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Email
            </h3>
            <p className="mt-1">alewithoutq@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
