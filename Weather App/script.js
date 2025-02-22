const Temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const windNum = document.querySelector(".windNum");
const humiNum = document.querySelector(".humiNum");
const inputText= document.querySelector(".inputText");
const search = document.querySelector(".search");
const weatherIcon = document.querySelector("#weatherIcon");

const weatherIcons = {
    Clear: { day: "fa-solid fa-sun", night: "fa-solid fa-moon" },
    Clouds: { day: "fa-solid fa-cloud-sun", night: "fa-solid fa-cloud-moon" },
    Rain: { day: "fa-solid fa-cloud-rain", night: "fa-solid fa-cloud-showers-heavy" },
    Drizzle: { day: "fa-solid fa-cloud-moon-rain", night: "fa-solid fa-cloud-moon-rain" },
    Thunderstorm: { day: "fa-solid fa-cloud-bolt", night: "fa-solid fa-cloud-bolt" },
    Snow: { day: "fa-solid fa-snowflake", night: "fa-solid fa-snowflake" },
    Mist: { day: "fa-solid fa-smog", night: "fa-solid fa-smog" },
    Smoke: { day: "fa-solid fa-smog", night: "fa-solid fa-smog" },
    Haze: { day: "fa-solid fa-smog", night: "fa-solid fa-smog" },
    Dust: { day: "fa-solid fa-wind", night: "fa-solid fa-wind" },
    Fog: { day: "fa-solid fa-smog", night: "fa-solid fa-smog" },
    Sand: { day: "fa-solid fa-wind", night: "fa-solid fa-wind" },
    Ash: { day: "fa-solid fa-volcano", night: "fa-solid fa-volcano" },
    Squall: { day: "fa-solid fa-wind", night: "fa-solid fa-wind" },
    Tornado: { day: "fa-solid fa-hurricane", night: "fa-solid fa-hurricane" }
};


let cityName = "delhi";


function fetchWeather(cityName){
    const apiKey = "159d379ecbb46e1954bd9395913088ea";
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(api)
    .then(response => response.json())
    .then(data => {
        let currentTime = new Date().getTime() / 1000;
        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let timeOfDay = (currentTime >= sunrise && currentTime < sunset) ? "day" : "night";
        Temp.innerHTML = data.main.temp;
        windNum.innerHTML = data.wind.speed;
        humiNum.innerHTML = data.main.humidity;
        city.innerHTML = cityName;
        weatherIcon.classList.remove(...weatherIcon.classList);
        let icn = data.weather[0].main;
        weatherIcon.className = weatherIcons[icn][timeOfDay];
        console.log(icn);
    })
    .catch(error => console.error(error));
}


fetchWeather(cityName);

function input(){
    if(inputText.value.trim() !== ""){
        cityName = inputText.value;
        fetchWeather(cityName);
    }else{
        alert("Enter Your City Name");
    }
}


search.addEventListener("click", input);
inputText.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        input();
    }
})