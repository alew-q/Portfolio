import type { Translations } from '../../i18n';

export function Footer({ t }: { t: Translations }) {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-6xl px-6 py-8 text-xs text-slate-500">
        2025 Alexander Sirlupu. {t.footer.rights}
      </div>
    </footer>
  );
}
