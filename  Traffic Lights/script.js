const divs = document.querySelectorAll(".red, .yellow, .green");
const time = document.querySelector(".time");
const colors = ["red", "yellow", "green"];
let index = 0;
let current = 1;

setInterval(() => {
    divs.forEach(div => div.style.background = "");
    divs[index].style.background = colors[index];
    index = (index+1) % divs.length;
}, 3000);

setInterval(() => {
    if(current < 3){
        current++;
        time.innerHTML = "0"  + current;
    }else{
        current = 1;
        time.innerHTML = "0" + current;
    }
}, 1000);