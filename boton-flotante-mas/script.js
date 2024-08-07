const btnMas = document.getElementById("btn-mas");
const btnMasContainer = document.querySelector(".btn-mas");
const masFloatLabel = document.getElementById("masfloat");

btnMasContainer.addEventListener("click", () => {
    btnMas.checked = !btnMas.checked;
    masFloatLabel.classList.toggle("rotate", btnMas.checked);
    const btnFloat = document.getElementById("btnfloat");
    const floatButtons = document.querySelectorAll(".flobn");

    if (btnMas.checked) {
        btnFloat.style.display = "flex";
        floatButtons.forEach((button, index) => {
            setTimeout(() => {
                button.style.transform = "translateY(0)";
                button.style.opacity = "1";
            }, index * 100);
        });
    } else {
        floatButtons.forEach((button, index) => {
            setTimeout(() => {
                button.style.transform = "translateY(20px)";
                button.style.opacity = "0";
            }, index * 100);
        });
        setTimeout(() => {
            btnFloat.style.display = "none";
        }, floatButtons.length * 100);
    }
});
