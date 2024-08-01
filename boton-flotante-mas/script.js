const masFloatLabel = document.getElementById("masfloat");
const checkbox = document.getElementById("btn-mas");
const btnFloat = document.getElementById("btnfloat");

masFloatLabel.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked;
    if (checkbox.checked) {
        btnFloat.style.display = "flex";
        setTimeout(() => {
            btnFloat.style.opacity = "1";
            btnFloat.style.transform = "translateY(0)";
        }, 10); // Slight delay to ensure CSS transition
    } else {
        btnFloat.style.opacity = "0";
        btnFloat.style.transform = "translateY(20px)";
        setTimeout(() => {
            btnFloat.style.display = "none";
        }, 300); // Match this duration with the CSS transition time
    }
});
