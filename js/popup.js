const modal = document.getElementById("modal");
const btnSkip = document.getElementById("modal-skip");

window.onload = (event) => {
  setTimeout(() => modal.classList.add("modal-visible"), 2000);
};

//tap outside overlay or on cancel button to close window

btnSkip.addEventListener("click", () => {
  modal.classList.remove("modal-visible");
});
