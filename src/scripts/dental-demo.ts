function initDental(){
 const body=document.querySelector<HTMLElement>('.av-body'); if(!body||body.dataset.initialized)return;body.dataset.initialized='true';
 const menu=body.querySelector<HTMLButtonElement>('.av-menu');const nav=body.querySelector<HTMLElement>('.av-nav');
 const closeMenu=()=>{menu?.setAttribute('aria-expanded','false');nav?.classList.remove('is-open');};
 menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav?.classList.toggle('is-open',open);});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
 body.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
 window.matchMedia('(min-width:1001px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
 const dialog=body.querySelector<HTMLDialogElement>('#av-contact-dialog');
 body.querySelectorAll<HTMLButtonElement>('[data-av-contact]').forEach(button=>button.addEventListener('click',()=>dialog?.showModal()));
 body.querySelector('[data-av-close]')?.addEventListener('click',()=>dialog?.close());
 body.querySelector('[data-av-dialog-book]')?.addEventListener('click',()=>dialog?.close());
 dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
 const form=body.querySelector<HTMLFormElement>('[data-av-form]');
 form?.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const output=form.querySelector<HTMLOutputElement>('output');form.reset();if(output){output.textContent=form.dataset.success||'';output.hidden=false;output.focus();}});form?.removeAttribute('inert');
 body.querySelector('[data-av-map]')?.addEventListener('click',()=>{const frame=body.querySelector<HTMLIFrameElement>('[data-map-frame]');if(frame){frame.src='https://www.google.com/maps?q=Nisantasi%2C%20Istanbul&output=embed';frame.hidden=false;body.querySelector<HTMLElement>('.av-map-cover')!.hidden=true;}});
 if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.04});body.classList.add('av-ready');body.querySelectorAll('[data-av-reveal]').forEach(el=>observer.observe(el));}
}
initDental();document.addEventListener('astro:page-load',initDental);
