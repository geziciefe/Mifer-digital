const body = document.querySelector<HTMLElement>('.kv-body');

if (body && !body.dataset.kvInitialized) {
  body.dataset.kvInitialized = 'true';
  const english = document.documentElement.lang === 'en';
  const menu = document.querySelector<HTMLButtonElement>('[data-kv-menu]');
  const navigation = document.querySelector<HTMLElement>('#kv-navigation');
  const pageRegions = document.querySelectorAll<HTMLElement>('main, .kv-footer');
  const mobile = window.matchMedia('(max-width: 760px)');

  const setMenu = (open: boolean, returnFocus = false) => {
    navigation?.classList.toggle('is-open', open);
    body.classList.toggle('kv-menu-is-open', open);
    menu?.setAttribute('aria-expanded', String(open));
    menu?.setAttribute('aria-label', open ? (english ? 'Close menu' : 'Menüyü kapat') : (english ? 'Open menu' : 'Menüyü aç'));
    pageRegions.forEach(region => { region.inert = open; });
    if (open) navigation?.querySelector<HTMLAnchorElement>('a')?.focus();
    if (returnFocus) menu?.focus();
  };
  menu?.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  mobile.addEventListener('change', () => { if (!mobile.matches) setMenu(false); });

  const filters = document.querySelector<HTMLElement>('[data-kv-filters]');
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-kv-filter]');
  const projects = document.querySelectorAll<HTMLElement>('[data-kv-project]');
  const projectGrid = document.querySelector<HTMLElement>('[data-kv-project-grid]');
  const result = document.querySelector<HTMLElement>('[data-kv-results]');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const value = button.dataset.kvFilter;
    let count = 0;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    projects.forEach(project => {
      project.hidden = value !== 'all' && project.dataset.status !== value;
      if (!project.hidden) { count++; project.classList.add('is-visible'); }
    });
    projectGrid?.classList.toggle('is-filtered', value !== 'all');
    if (result) result.textContent = `${count} ${english ? (count === 1 ? 'project shown' : 'projects shown') : 'proje gösteriliyor'}`;
  }));
  if (filters) filters.hidden = false;

  const enquiry = document.querySelector<HTMLDialogElement>('#kv-enquiry-dialog');
  const contact = document.querySelector<HTMLDialogElement>('#kv-contact-dialog');
  let dialogOpener: HTMLElement | null = null;
  const openDialog = (dialog: HTMLDialogElement | null, trigger: HTMLElement) => {
    if (!dialog) return;
    // Keep the original opener when moving between the two native dialogs.
    if (!trigger.closest('dialog')) dialogOpener = trigger;
    document.querySelectorAll<HTMLDialogElement>('.kv-dialog[open]').forEach(current => current.close('switch'));
    dialog.showModal();
    body.classList.add('kv-dialog-is-open');
  };
  document.querySelectorAll<HTMLElement>('[data-kv-enquiry]').forEach(trigger => trigger.addEventListener('click', () => {
    const subject = enquiry?.querySelector<HTMLSelectElement>('select[name="subject"]');
    if (subject) subject.value = trigger.dataset.kvEnquiry || '0';
    const output = enquiry?.querySelector('output');
    if (output) output.hidden = true;
    openDialog(enquiry, trigger);
  }));
  document.querySelectorAll<HTMLElement>('[data-kv-contact]').forEach(trigger => trigger.addEventListener('click', () => openDialog(contact, trigger)));
  document.querySelectorAll<HTMLElement>('[data-kv-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog')?.close()));
  document.querySelectorAll<HTMLDialogElement>('.kv-dialog').forEach(dialog => {
    dialog.addEventListener('close', () => {
      if (!document.querySelector('.kv-dialog[open]')) {
        body.classList.remove('kv-dialog-is-open');
        dialogOpener?.focus();
      }
    });
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
  });
  const form = document.querySelector<HTMLFormElement>('[data-kv-form]');
  form?.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const output = form.querySelector('output');
    form.reset();
    if (output) {
      output.textContent = form.dataset.success || '';
      output.hidden = false;
      output.focus();
    }
  });
  if (form) form.inert = false;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Preserve the rendered final values without JS; animate once when visible.
  const counters = document.querySelectorAll<HTMLElement>('[data-kv-count]');
  const numberFormat = new Intl.NumberFormat(english ? 'en-GB' : 'tr-TR');
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const active = new Map<HTMLElement, number>();
    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        counterObserver.unobserve(element);
        const target = Number(element.dataset.kvCount);
        element.style.width = `${element.getBoundingClientRect().width}px`;
        element.style.display = 'inline-block';
        const started = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - started) / 1450, 1);
          if (progress === 1 || reducedMotion.matches) {
            element.textContent = element.dataset.kvFinal || String(target);
            element.style.removeProperty('width');
            active.delete(element);
            return;
          }
          element.textContent = numberFormat.format(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          active.set(element, requestAnimationFrame(tick));
        };
        active.set(element, requestAnimationFrame(tick));
      });
    }, { threshold: .65 });
    counters.forEach(element => counterObserver.observe(element));
    const finishCounters = () => {
      active.forEach((id, element) => { cancelAnimationFrame(id); element.textContent = element.dataset.kvFinal || ''; element.style.removeProperty('width'); });
      active.clear();
      counterObserver.disconnect();
    };
    reducedMotion.addEventListener('change', () => { if (reducedMotion.matches) finishCounters(); });
    window.addEventListener('pagehide', finishCounters, { once: true });
  }
  if (!reducedMotion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });
    document.querySelectorAll('[data-kv-reveal]').forEach(element => observer.observe(element));
    body.classList.add('kv-ready');
    reducedMotion.addEventListener('change', () => {
      if (reducedMotion.matches) { body.classList.remove('kv-ready'); observer.disconnect(); }
    });
  }
}

export {};
