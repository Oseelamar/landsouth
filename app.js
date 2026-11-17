(() => {
  const q = new URLSearchParams(location.search);
  const flat = q.has('flat');
  const root = document.documentElement;
  if (flat) root.classList.add('flat', 'loaded');

  // hero wordmark + quick cards enter once fonts are ready
  document.fonts.ready.then(() => requestAnimationFrame(() => {
    document.querySelectorAll('.qcard').forEach((c, i) => c.style.transitionDelay = `${300 + i * 90}ms`);
    root.classList.add('loaded');
  }));

  // mobile menu
  const burger = document.querySelector('.pill__burger');
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu');
    burger.setAttribute('aria-expanded', open);
  });
  document.querySelectorAll('.pill__sheet a').forEach(a => a.addEventListener('click', () => {
    document.body.classList.remove('menu'); burger.setAttribute('aria-expanded', false);
  }));

  // headings rise line by line from behind a mask
  const split = el => {
    const words = el.textContent.trim().split(/\s+/);
    el.innerHTML = words.map(w => `<span class="w">${w}</span>`).join(' ');
    const lines = []; let top = null;
    el.querySelectorAll('.w').forEach(w => {
      if (w.offsetTop !== top) { lines.push([]); top = w.offsetTop; }
      lines[lines.length - 1].push(w.textContent);
    });
    el.innerHTML = lines.map((l, i) =>
      `<span class="ln"><span class="ln__i" style="transition-delay:${i * 90}ms">${l.join(' ')}</span></span>`).join('');
  };

  const els = [...document.querySelectorAll('[data-rise],[data-in]')];
  if (flat) { els.forEach(e => e.classList.add('in')); }
  else {
    document.fonts.ready.then(() => {
      document.querySelectorAll('[data-rise]').forEach(split);
      const io = new IntersectionObserver(es => es.forEach(e => {
        if (!e.isIntersecting) return;
        if (e.target.hasAttribute('data-in')) {
          const sibs = [...e.target.parentElement.children].filter(c => c.hasAttribute('data-in'));
          e.target.style.transitionDelay = `${Math.max(0, sibs.indexOf(e.target)) * 90}ms`;
          setTimeout(() => e.target.style.transitionDelay = '', 1400);
        }
        e.target.classList.add('in');
        io.unobserve(e.target);
      }), { rootMargin: '0px 0px -8% 0px' });
      els.forEach(e => io.observe(e));
      addEventListener('scroll', () => els.forEach(e => {
        if (!e.classList.contains('in') && e.getBoundingClientRect().top < innerHeight * .92) e.classList.add('in');
      }), { passive: true });
    });
  }

  // stat cards: the colour bars fill one after another as the section scrolls in
  const stairs = document.getElementById('stairs');
  const bars = [...document.querySelectorAll('.stair__bar')];
  const clamp = v => Math.max(0, Math.min(1, v));
  const setBars = p => bars.forEach((b, i) => b.style.setProperty('--fill', clamp((p - i * 0.2) / 0.5).toFixed(4)));
  const scrub = () => {
    if (flat || matchMedia('(prefers-reduced-motion: reduce)').matches) return setBars(1);
    const r = stairs.getBoundingClientRect();
    const start = innerHeight * 0.92, end = innerHeight * 0.25;
    setBars(clamp((start - r.top) / (start - end)));
  };
  addEventListener('scroll', () => requestAnimationFrame(scrub), { passive: true });
  scrub();

  // how switching works: the page fades from cream to forest once the section settles in (after the AdLib
  // prototype), then a house line drawing builds in three stages as the pinned section scrolls
  const sw = document.getElementById('switch');
  if (sw) {
    const cl = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
    const groups = [1, 2, 3].map(n => [...sw.querySelectorAll('.s' + n)]);
    groups.flat().forEach(pth => { const L = pth.getTotalLength() || 1; pth.style.strokeDasharray = L; pth.style.strokeDashoffset = L; pth.dataset.l = L; });
    const wins = [...sw.querySelectorAll('.win')], swSteps = [...sw.querySelectorAll('.d5__step')], swDots = [...sw.querySelectorAll('.d5__dots i')];
    const swFrame = () => {
      root.classList.toggle('dark', sw.getBoundingClientRect().top < innerHeight * .4);
      const r = sw.getBoundingClientRect();
      const p = flat ? 1 : cl(-r.top / (r.height - innerHeight));
      groups.forEach((g, i) => {
        const t = cl((p - i / 3) * 3 / .85);
        g.forEach(pth => { pth.style.strokeDashoffset = (pth.dataset.l * (1 - t)).toFixed(1); });
      });
      wins.forEach(w => w.classList.toggle('on', p > .9));
      const idx = Math.min(2, Math.floor(p * 3 * .999));
      swSteps.forEach((s, i) => s.classList.toggle('on', i === idx));
      swDots.forEach((d, i) => d.classList.toggle('on', i === idx));
    };
    let swTick = false;
    addEventListener('scroll', () => { if (!swTick) { swTick = true; requestAnimationFrame(() => { swTick = false; swFrame(); }); } }, { passive: true });
    addEventListener('resize', swFrame);
    swFrame();
  }

  // team portraits
  const team = document.querySelector('.team');
  const mates = [...team.querySelectorAll('.mate')];
  const dots = [...document.querySelectorAll('.team__dots i')];
  const phone = matchMedia('(max-width: 720px)');
  // phone carousel: scale and colour each card by its distance from the centre
  let raf = 0;
  const paint = () => {
    raf = 0;
    if (!phone.matches) { mates.forEach(m => m.style.removeProperty('--p')); return; }
    const mid = team.scrollLeft + team.clientWidth / 2;
    const step = mates[1].offsetLeft - mates[0].offsetLeft; // centre-to-centre distance
    let best = 0, bestD = Infinity;
    mates.forEach((m, i) => {
      const d = Math.abs(m.offsetLeft - team.offsetLeft + m.offsetWidth / 2 - mid) / step;
      m.style.setProperty('--p', Math.min(d, 1).toFixed(3));
      if (d < bestD) { bestD = d; best = i; }
    });
    dots.forEach((d, i) => d.classList.toggle('on', i === best));
  };
  const queue = () => { if (!raf) raf = requestAnimationFrame(paint); };
  team.addEventListener('scroll', queue, { passive: true });
  addEventListener('resize', queue);
  paint();
  // tablets have no hover either: colour the card nearest the middle of the screen
  if (matchMedia('(hover: none)').matches) {
    const tio = new IntersectionObserver(es => es.forEach(e => e.target.classList.toggle('on', e.isIntersecting && !phone.matches)),
      { rootMargin: '-38% 0px -38% 0px' });
    mates.forEach(m => tio.observe(m));
  }

  window.LS = {
    // Hero address box: carry the address down into the full analysis form
    start(form) {
      const addr = form.address.value.trim();
      const f = document.querySelector('#analysis .form');
      if (addr) f.address.value = addr;
      document.getElementById('analysis').scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => f.name.focus({ preventScroll: true }), 700);
      return false;
    },
    // Prototype: the live site would post this to its rental-analysis inbox
    send(form) {
      form.querySelector('.btn').hidden = true;
      form.querySelector('.form__done').hidden = false;
      return false;
    }
  };
})();
