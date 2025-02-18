const stop = document.querySelector(".stop");
const play = document.querySelector(".play");
const reset = document.querySelector(".reset");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");


let Interval;


function startWatch() {
    second.innerHTML = second.innerHTML < 9 ? "0" + (++second.innerHTML) : ++second.innerHTML;
    if (second.innerHTML == 60) {
        second.innerHTML = "00";
        minute.innerHTML = minute.innerHTML < 9 ? "0" + (++minute.innerHTML) : ++minute.innerHTML;
        if (minute.innerHTML == 60) {
            minute.innerHTML = "00";
            hour.innerHTML = hour.innerHTML < 9 ? "0" + (++hour.innerHTML) : ++hour.innerHTML;
        }
    }
}


play.addEventListener("click", function () {
    if(!Interval){
        Interval = setInterval(startWatch, 1000);
    }
})


reset.addEventListener("click", function () {
    second.innerHTML = "00";
    minute.innerHTML = "00";
    hour.innerHTML = "00";
})


stop.addEventListener("click", function () {
    clearInterval(Interval);
    Interval = null;
})