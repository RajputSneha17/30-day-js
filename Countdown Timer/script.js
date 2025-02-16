let interval;

function startTimer() {
    const cdr = document.querySelector(".cdr").value;
    if (!cdr) {
        alert("Please select a date!");
        return;
    }

    const Days = document.querySelector(".Days");
    const Hours = document.querySelector(".Hours");
    const Minutes = document.querySelector(".Minutes");
    const Seconds = document.querySelector(".Seconds");

    const [year, month, day] = cdr.split("-");
    const targetDate = new Date(`${month}/${day}/${year} 00:00:00`).getTime();

    function timer() {
        const currentDate = new Date().getTime();
        const distance = targetDate - currentDate;

        if (distance < 0) {
            clearInterval(interval);
            Days.innerHTML = "00";
            Hours.innerHTML = "00";
            Minutes.innerHTML = "00";
            Seconds.innerHTML = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((distance / (1000 * 60)) % 60);
        const seconds = Math.floor((distance / 1000) % 60);

        Days.innerHTML = days < 10 ? "0" + days : days;
        Hours.innerHTML = hours < 10 ? "0" + hours : hours;
        Minutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
        Seconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
    }


    clearInterval(interval);
    interval = setInterval(timer, 1000);
    timer();
}
