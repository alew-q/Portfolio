type ProjectCardProps = {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  onOpen: () => void;
};

export function ProjectCard({
  title,
  subtitle,
  description,
  tags,
  onOpen,
}: ProjectCardProps) {
  return (
    <article
      className="
        rounded-xl border border-slate-800 bg-slate-900/40 p-6
        hover:border-sky-500/70 hover:bg-slate-900/70
        transition-all duration-200
        cursor-pointer hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10
      "
      onClick={onOpen}
    >
      <h3 className="font-semibold text-slate-50 mb-1">{title}</h3>
      <p className="text-xs text-slate-400 mb-3">{subtitle}</p>
      <p className="text-xs text-slate-300 mb-3 whitespace-pre-line">{description}</p>

      <div className="flex flex-wrap gap-2 text-[11px] mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-800 px-2 py-1 text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); 
          onOpen();
        }}
        className="text-[11px] font-medium text-sky-400 hover:text-sky-300"
      >
        Ver detalles →
      </button>
    </article>
  );
}
