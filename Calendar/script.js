const todayBtn = document.querySelector(".top-left");
const weekBtn = document.querySelector(".bottom-left");
const monthBtn = document.querySelector(".top-right");
const yearBtn = document.querySelector(".bottom-right");

const weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

const now = new Date();
console.log(now);

const today = now.getDate();
const week = weeks[now.getDay()];
const month = months[now.getMonth()];
const year = now.getFullYear();

todayBtn.innerHTML = today;
weekBtn.innerHTML = week;
monthBtn.innerHTML = month;
yearBtn.innerHTML = year;

todayBtn.innerHTML = today < 10 ? "0" + today : today;
