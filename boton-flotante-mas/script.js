const masFloatLabel = document.getElementById("masfloat");

masFloatLabel.addEventListener("click", () => {
    masFloatLabel.classList.toggle("rotate");
});

const container = document.getElementById("main-menu");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    container.style.backgroundColor = "#F7F8F900"; /* Cambia el color de fondo cuando se desplaza más de 100px */
  } else {
    container.style.backgroundColor = "#F7F8F9"; /* Vuelve al color de fondo predeterminado */
  }
});
