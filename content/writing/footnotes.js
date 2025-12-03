const markers = document.querySelectorAll(".marker");
const footnotes = document.querySelectorAll(".footnote");
const close = document.querySelector(".close");
const notesFooter = document.querySelector(".footnotes");

markers.forEach((marker) => {
  marker.addEventListener("click", () => {
    let i = marker.getAttribute("id");
    let footnote = document.getElementById(`foot${i}`);
    footnote.classList.toggle("hidden");
    notesFooter.classList.remove("hidden");
  });
});

close.addEventListener("click", () => {
  notesFooter.classList.add("hidden");
})
