
const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const periodDisplay = document.getElementById("period");

const dateDisplay = document.getElementById("date");
const greeting = document.getElementById("greeting");

const formatBtn = document.getElementById("formatBtn");
const themeBtn = document.getElementById("themeBtn");

let is24Hour = false;

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const period = hours >= 12 ? "PM" : "AM";

    if (!is24Hour) {
        hours = hours % 12 || 12;
    }

    hoursDisplay.textContent = String(hours).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    periodDisplay.textContent = is24Hour ? "" : period;

    dateDisplay.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });

    const currentHour = now.getHours();

    if (currentHour < 12) {
        greeting.textContent = "Good Morning.";
    } else if (currentHour < 17) {
        greeting.textContent = "Good Afternoon.";
    } else {
        greeting.textContent = "Good Evening.";
    }
}

formatBtn.addEventListener("click", function () {

    is24Hour = !is24Hour;

    updateClock();
});

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☾ Dark Mode";
    } else {
        themeBtn.textContent = "☼ Light Mode";
    }
});

updateClock();

setInterval(updateClock, 1000);
