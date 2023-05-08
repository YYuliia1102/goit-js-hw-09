// commonjs
const flatpickr = require("flatpickr");

// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const myInput = document.querySelector("#datetime-picker");

//об'єкт, який потрібен для виконання завдання
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const date = new Date();
        const inputDate = new Date(selectedDates[0]);

        if (date.getTime() > inputDate.getTime()) {
            window.alert("Please choose a date in the future");
        } else {
            startButton.disabled = false;
        }

    },
};
const fp = flatpickr(myInput, options);  // flatpickr


const startButton = document.querySelector('[data-start]')
startButton.disabled = true;

let intervalId;

startButton.addEventListener("click", startTimer)

function startTimer() {
    intervalId = setInterval(calculateTimer, 1000)
}

function calculateTimer() {

    const date = new Date();
    const inputDate = new Date(myInput.value);
    if ((inputDate.getTime() - date.getTime() <= 0)) {
        clearInterval(intervalId);
    } else {
        const timeLeft = convertMs(inputDate.getTime() - date.getTime())
        document.querySelector("[data-days]").innerHTML = addLeadingZero(timeLeft.days);
        document.querySelector("[data-hours]").innerHTML = addLeadingZero(timeLeft.hours);
        document.querySelector("[data-minutes]").innerHTML = addLeadingZero(timeLeft.minutes);
        document.querySelector("[data-seconds]").innerHTML = addLeadingZero(timeLeft.seconds);
    }
}

function addLeadingZero(number) {
    return number.toString().padStart(2, 0);
}


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}






