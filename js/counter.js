document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("countBtn");
  const info = document.getElementById("clickInfo");
  if (!btn || !info) return;

  let count = 0;

  btn.addEventListener("click", () => {
    count++;
    info.textContent = `button clicked ${count} time(s)`;
  });
});
