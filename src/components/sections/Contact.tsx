export function Contact() {
  return (
    <section id="contact" className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold text-slate-50 mb-4">¿Hablamos?</h2>
        <p className="text-sm text-slate-300 mb-6 max-w-xl">
          Estoy siempre disponible para discutir proyectos, oportunidades o simplemente conversar
          sobre desarrollo web.
        </p>

        <div className="flex flex-wrap gap-3 text-sm">
          <a
            href="mailto:alewithoutq@gmail.com"
            className="rounded-md border border-sky-500 px-4 py-2 text-sky-400 hover:bg-sky-500/10"
          >
            Enviar email
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-600 px-4 py-2 text-slate-200 hover:bg-slate-800/80"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-slate-600 px-4 py-2 text-slate-200 hover:bg-slate-800/80"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
