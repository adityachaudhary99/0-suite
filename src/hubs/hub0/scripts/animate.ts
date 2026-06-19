// Bespoke landing motion: scroll-reveal (stagger), cursor-follow spotlight on
// cards, and count-up stats. All no-ops under prefers-reduced-motion.

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---- Scroll reveal ---------------------------------------------------- */
const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );
  revealEls.forEach((el) => io.observe(el));
}

/* ---- Cursor-follow spotlight ----------------------------------------- */
if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll<HTMLElement>('.spotlight').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

/* ---- Count-up stats --------------------------------------------------- */
const countEls = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
function runCount(el: HTMLElement) {
  const target = Number(el.dataset.count || '0');
  if (reduceMotion || target === 0) {
    el.textContent = String(target);
    return;
  }
  const duration = 1000;
  let startTs = 0;
  const step = (ts: number) => {
    if (!startTs) startTs = ts;
    const p = Math.min((ts - startTs) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
    el.textContent = String(Math.round(target * eased));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
if (countEls.length) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    countEls.forEach((el) => (el.textContent = String(Number(el.dataset.count || '0'))));
  } else {
    countEls.forEach((el) => (el.textContent = '0')); // avoid SSR→0 jump
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCount(entry.target as HTMLElement);
            cio.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    countEls.forEach((el) => cio.observe(el));
  }
}
