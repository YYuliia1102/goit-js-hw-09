let intervalId;

document.querySelector("[data-start]").addEventListener("click", startColorChange)
document.querySelector("[data-stop]").addEventListener("click", stopColorChange)
document.querySelector("[data-stop]").disabled = true;

function startColorChange() {
    if (!intervalId) {
        document.querySelector("[data-start]").disabled = true;
        document.querySelector("[data-stop]").disabled = false;
        intervalId = setInterval(changeBodyColor, 1000);
    }
}

function changeBodyColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;
    document.body.style.backgroundColor = randomColor;
}

function stopColorChange() {
    clearInterval(intervalId);
    intervalId = null;
    document.querySelector("[data-start]").disabled = false;
    document.querySelector("[data-stop]").disabled = true;

}
