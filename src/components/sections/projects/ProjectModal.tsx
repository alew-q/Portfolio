type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  stack: string[];
};

export function ProjectModal({
  open,
  onClose,
  title,
  description,
  features,
  stack,
}: ProjectModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
      <div className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-slate-900 border border-slate-700 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-slate-50">{title}</h3>
          <button
            type="button"
            className="text-slate-400 hover:text-slate-200"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <p className="mt-4 text-sm text-slate-300">{description}</p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-slate-300">
          <div>
            <h4 className="font-semibold text-sky-400 mb-2">
              Características principales:
            </h4>
            <ul className="list-disc list-inside space-y-1">
              {features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sky-400 mb-2">Stack utilizado:</h4>
            <ul className="list-disc list-inside space-y-1">
              {stack.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
