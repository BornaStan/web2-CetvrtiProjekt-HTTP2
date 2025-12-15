function animateNum(el, target) {
  const start = 0;
  const dur = 700;
  const t0 = performance.now();

  function step(t) {
    const p = Math.min(1, (t - t0) / dur);
    el.textContent = String(Math.floor(start + (target - start) * p));
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".stat__num").forEach(el => {
    const target = Number(el.dataset.target || "0");
    animateNum(el, target);
  });
});
