const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
const period = document.querySelector(".period");

function clock(){
    const now = new Date();
    const Hours = now.getHours() % 12;
    const minute = now.getMinutes();
    const second = now.getSeconds();

    hrs.textContent = Hours;
    min.textContent = minute;
    sec.textContent = second;

    period.textContent = Hours >= 12 ? "AM" : "PM";

    hrs.textContent = Hours < 10 ? "0" + Hours : Hours;
    min.textContent = minute < 10 ? "0" + minute : minute;
    sec.textContent = second < 10 ? "0" + second : second;
}

setInterval(() => {
    clock();
}, 1000);