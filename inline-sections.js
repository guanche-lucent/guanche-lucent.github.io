(() => {
  const hero = document.querySelector('.hero-title');
  const panel = document.createElement('aside');
  panel.className = 'reading-panel';
  panel.hidden = true;
  panel.tabIndex = -1;
  panel.setAttribute('aria-label', '栏目详情');
  document.querySelector('.hero').append(panel);
  const close = document.createElement('button');
  close.className = 'reading-close'; close.textContent = '返回简介 ↗';
  const copy = document.createElement('div');
  panel.append(close, copy);
  const sections = new Map([...document.querySelectorAll('.content > .section')].map(el => [el.id, el]));
  const links = [...document.querySelectorAll('a[href*="showcase.html?slide="]')];
  links.forEach(link => { const key = new URL(link.href).searchParams.get('slide'); link.dataset.section = key; link.href = `#${key}`; });
  let current = '';
  let animation;
  function display(key, animate = true) {
    if (key === current) return;
    current = sections.has(key) ? key : '';
    animation?.cancel();
    links.forEach(link => {
      if (link.dataset.section === current) link.setAttribute('aria-current','page');
      else link.removeAttribute('aria-current');
    });
    document.body.classList.toggle('has-section', Boolean(current));
    hero.hidden = Boolean(current); panel.hidden = !current;
    if (current) {
      copy.replaceChildren(...[...sections.get(current).children].map(el => el.cloneNode(true)));
      copy.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      panel.scrollTop = 0;
    }
    if (animate && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animation = (current ? copy : hero).animate([{opacity:.35, transform:'translateY(6px)'},{opacity:1,transform:'translateY(0)'}],{duration:240,easing:'ease-out'});
    }
  }
  function go(key) {
    if (key === current) return;
    location.hash = key || 'home';
    display(key);
  }
  links.forEach(link => link.addEventListener('click', event => {
    if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault(); go(link.dataset.section);
  }));
  document.querySelector('.brand').addEventListener('click', event => {
    if(event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault(); go('');
  });
  close.addEventListener('click', () => { go(''); document.querySelector('.brand').focus(); });
  window.addEventListener('hashchange', () => display(location.hash.slice(1)));
  window.addEventListener('keydown', event => { if(event.key === 'Escape') go(''); });
  display(location.hash.slice(1), false);
})();
