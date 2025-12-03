const markers = document.querySelectorAll(".marker");
const footnotes = document.querySelectorAll(".footnote");

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    let i = marker.getAttribute("id");
    let footnote = document.getElementById(`foot${i}`);
    footnote.classList.toggle("hidden");
  });
});
