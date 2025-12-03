import { useEffect, useState } from 'react';

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  stack: string[];
  images?: string[];
};

export function ProjectModal({
  open,
  onClose,
  title,
  description,
  features,
  stack,
  images = [],
}: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showZoom, setShowZoom] = useState(false);

  // Bloquear scroll del body solo cuando el modal está abierto
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Resetear imagen activa y zoom cuando se abre/cambia de proyecto
  useEffect(() => {
    if (open) {
      setActiveIndex(0);
      setShowZoom(false);
    }
  }, [open, title]);

  if (!open) return null;

  const hasImages = images.length > 0;
  const mainImage = hasImages ? images[activeIndex] : null;

  return (
    <>
      {/* Modal principal */}
      <div
        className="fixed inset-0 z-30 flex items-center justify-center bg-black/50"
        onClick={onClose}
      >
        <div
          className="max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-slate-900 border border-slate-700 p-6"
          onClick={(e) => e.stopPropagation()}
        >
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

          {/* Galería de imágenes */}
          {hasImages && (
            <div className="mt-4 space-y-3">
              {/* Imagen principal */}
              <div
                className="overflow-hidden rounded-lg border border-slate-700 bg-slate-900 cursor-zoom-in"
                onClick={() => setShowZoom(true)}
              >
                <img
                  src={mainImage!}
                  alt={`${title} preview`}
                  className="w-full h-56 object-cover md:h-64"
                />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {images.map((img, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActiveIndex(idx)}
                        className={`
                          overflow-hidden rounded-md border
                          ${isActive ? 'border-sky-500 bg-slate-800' : 'border-slate-700 bg-slate-900'}
                        `}
                      >
                        <img
                          src={img}
                          alt={`${title} extra ${idx + 1}`}
                          className="h-16 w-24 object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          )}

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
              <h4 className="font-semibold text-sky-400 mb-2">
                Stack utilizado:
              </h4>
              <ul className="list-disc list-inside space-y-1">
                {stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay de zoom (imagen grande) */}
      {showZoom && hasImages && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80"
          onClick={() => setShowZoom(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute -top-10 right-0 text-slate-300 hover:text-white text-lg"
              onClick={() => setShowZoom(false)}
            >
              ✕
            </button>
            <img
              src={mainImage!}
              alt={`${title} zoom`}
              className="max-h-[90vh] w-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
