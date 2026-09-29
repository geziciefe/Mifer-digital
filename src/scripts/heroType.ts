/** Do not expose fallback-to-Inter metric changes during the hero entrance. */
export function initHeroType(signal: AbortSignal) {
  const root = document.documentElement;
  const hero = document.querySelector<HTMLElement>('.hero-title');
  if (!hero) { root.classList.remove('hero-font-pending'); return; }
  root.classList.add('hero-font-pending');
  root.classList.remove('hero-font-fallback');
  const finish = (fallback: boolean) => {
    if (signal.aborted) return;
    root.classList.toggle('hero-font-fallback', fallback);
    root.classList.remove('hero-font-pending');
  };
  if (!document.fonts) { finish(true); return; }
  // Lock the fallback for this page if the font is unavailable; never swap it later.
  let settled = false;
  const settle = (fallback: boolean) => {
    if (settled) return;
    settled = true;
    clearTimeout(timeout);
    finish(fallback);
  };
  const timeout = window.setTimeout(() => settle(true), 3000);
  signal.addEventListener('abort', () => { settled = true; clearTimeout(timeout); }, { once: true });
  document.fonts.load('820 1em "Inter Variable"', hero.textContent || 'İŞ GROW')
    .then(faces => settle(!faces.length || faces.some(face => face.status !== 'loaded')))
    .catch(() => settle(true));
}
