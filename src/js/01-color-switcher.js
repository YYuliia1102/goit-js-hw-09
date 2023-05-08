let intervalId;

document.querySelector("[data-start]").addEventListener("click", startColorChange)
document.querySelector("[data-stop]").addEventListener("click", stopColorChange)

function startColorChange() {
    if (!intervalId) {
        document.querySelector("[data-start]").disabled = true;
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

}
