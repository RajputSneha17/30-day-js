function updateClock(){
    const now = new Date();
    const hours = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    const secondDeg = second * 6;
    const minuteDeg = (minute * 6) + (second * 0.1);
    const hourDeg = (hours * 30) + (minute * 0.5);

    document.querySelector(".secondhand").style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`;
    document.querySelector(".minutehand").style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`;
    document.querySelector(".hourshand").style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`;

}

setInterval(updateClock, 1000);
updateClock();