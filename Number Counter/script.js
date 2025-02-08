const youtube = document.querySelector(".Youtube");
const linkedin = document.querySelector(".Linkedin");
const twitter = document.querySelector(".Twitter");
const submit = document.querySelector(".submit");

let lcount1 = document.querySelector(".count1");
let ycount2 = document.querySelector(".count2");
let tcount3 = document.querySelector(".count3");

function increase(count, app){
    let target = Number(app.value);
    let i =0;
    let interval = setInterval(() => {
         count.innerHTML = i;
        if(i >= target){
            clearInterval(interval);
        }
        i++;
    }, 0.5);
}

submit.addEventListener("click", function change(){

    increase(tcount3, twitter);
    increase(ycount2, youtube);
    increase(lcount1, linkedin);
})