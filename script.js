const header = document.querySelector("#header");

// Add shadow on scroll down, remove it at top of page.
window.addEventListener("scroll", () => {
  if (window.scrollY < 5) {
    header.classList.remove("shadow");
  } else {
    header.classList.add("shadow");
  }
});
