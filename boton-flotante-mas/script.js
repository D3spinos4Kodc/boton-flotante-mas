const btnMas = document.getElementById("btn-mas");
const btnMasContainer = document.querySelector(".btn-mas");
const masFloatLabel = document.getElementById("masfloat");

btnMasContainer.addEventListener("click", () => {
    btnMas.checked = !btnMas.checked;
    masFloatLabel.classList.toggle("rotate", btnMas.checked);
    const btnFloat = document.getElementById("btnfloat");
    if (btnMas.checked) {
        btnFloat.style.display = "flex";
    } else {
        btnFloat.style.display = "none";
    }
});
