function animateStat(el, target, duration = 600) {
  let start = 0;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.round(progress * target);
    el.textContent = value;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

window.addEventListener("load", () => {
  const nav = performance.getEntriesByType("navigation")[0];
  const loadMs = nav && nav.loadEventEnd
    ? Math.round(nav.loadEventEnd - nav.startTime)
    : Math.round(performance.now());

  const el = document.getElementById("loadTime");
  if (!el) return;

  el.dataset.target = loadMs;
  animateStat(el, loadMs);
});
