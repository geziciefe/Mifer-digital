const KEY = 'mifer-consent-v2';
const POLICY = '2026-09-26';
const TTL = 180 * 24 * 60 * 60 * 1000;
type Consent = { version: string; savedAt: number; expiresAt: number; maps: boolean };
let controller: AbortController | undefined;
let expiryTimer: ReturnType<typeof setTimeout> | undefined;
function read(): Consent | null {
  try {
    const value = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (value?.version === POLICY && typeof value.maps === 'boolean' && Number.isFinite(value.savedAt) && value.savedAt <= Date.now() && value.expiresAt > Date.now() && value.expiresAt === value.savedAt + TTL) return value;
    localStorage.removeItem(KEY);
  } catch { /* Storage denied: all optional services remain disabled. */ }
  return null;
}
function init() {
  controller?.abort(); controller = new AbortController(); const { signal } = controller;
  clearTimeout(expiryTimer);
  const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
  const dialog = document.querySelector<HTMLDialogElement>('[data-consent-dialog]');
  if (!banner || !dialog) return;
  const checkbox = dialog.querySelector<HTMLInputElement>('[data-consent-maps]')!;
  const status = dialog.querySelector<HTMLElement>('[data-consent-status]')!;
  function render() {
    const saved = read();
    document.documentElement.dataset.cookieConsent = saved?.maps ? 'maps' : 'essential';
    checkbox.checked = saved?.maps ?? false;
    banner!.hidden = Boolean(saved);
    document.querySelectorAll<HTMLIFrameElement>('iframe[data-consent-src]').forEach(frame => {
      const placeholder = frame.parentElement?.querySelector<HTMLElement>('[data-map-placeholder]');
      if (saved?.maps) { if (!frame.hasAttribute('src')) frame.src = frame.dataset.consentSrc!; frame.hidden = false; if (placeholder) placeholder.hidden = true; }
      else { frame.removeAttribute('src'); frame.hidden = true; if (placeholder) placeholder.hidden = false; }
    });
    clearTimeout(expiryTimer);
    if (saved) expiryTimer = setTimeout(render, Math.min(saved.expiresAt - Date.now() + 20, 2147483647));
  }
  function save(maps: boolean) {
    const now = Date.now();
    try { localStorage.setItem(KEY, JSON.stringify({ version: POLICY, savedAt: now, expiresAt: now + TTL, maps })); localStorage.removeItem('mifer-cookie-consent'); }
    catch { status.textContent = dialog!.dataset.error!; render(); if (!dialog!.open) dialog!.showModal(); return; }
    status.textContent = ''; render(); dialog!.close();
  }
  document.querySelectorAll<HTMLElement>('[data-cookie-choice]').forEach(button => button.addEventListener('click', () => save(button.dataset.cookieChoice === 'all'), { signal }));
  document.querySelectorAll('[data-cookie-settings]').forEach(button => button.addEventListener('click', event => { event.preventDefault(); checkbox.checked = read()?.maps ?? false; status.textContent = ''; if (!dialog!.open) dialog!.showModal(); }, { signal }));
  dialog.querySelector('[data-consent-save]')!.addEventListener('click', () => save(checkbox.checked), { signal });
  window.addEventListener('storage', render, { signal });
  window.addEventListener('pageshow', render, { signal });
  document.addEventListener('visibilitychange', render, { signal });
  signal.addEventListener('abort', () => { clearTimeout(expiryTimer); dialog!.close(); }, { once: true });
  render();
}
document.addEventListener('astro:before-swap', () => controller?.abort());
document.addEventListener('astro:page-load', init);
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
