document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("viewBtn");
  const gallery = document.getElementById("galleryGrid");
  if (!btn || !gallery) return;

  function setLabel() {
    const view = gallery.getAttribute("data-view") || "grid";
    btn.textContent = `view: ${view}`;
  }

  btn.addEventListener("click", () => {
    const view = gallery.getAttribute("data-view") || "grid";
    const next = view === "grid" ? "list" : "grid";

    gallery.setAttribute("data-view", next);
    gallery.classList.toggle("gallery--list", next === "list");

    setLabel();
  });

  setLabel();
});
