const randomText = document.querySelector(".randomText");
const inputText = document.querySelector(".inputText");
const submitText = document.querySelector(".submitText");
const speedResult = document.querySelector(".speedResult");

const randomTexts = [
    "The journey of a thousand miles begins with a single step, and every step you take brings you closer to your goals.",
    "Success doesn't come from what you do occasionally, it comes from what you do consistently, and with determination.",
    "The best way to predict the future is to create it yourself, by taking the necessary steps towards your dreams every day.",
    "Believe in yourself, even when others doubt you. The strength within you is greater than any obstacle you may face.",
    "Great things never come from comfort zones, so push yourself out of your comfort zone to achieve something extraordinary."
];

let startTime, endTime, totalTime;
submitText.addEventListener("click", function () {
    if (submitText.innerHTML == "Start") {
        inputText.disabled = false;
        submitText.innerHTML = "Done";
        startTyingTest();
    } else {
        submitText.innerHTML = "Start";
        randomText.innerHTML = "Type fast, beat your own record! Click 'Start' to begin.";
        endTypingTest();
    }
})

function startTyingTest() {
    let random = Math.floor(Math.random() * randomTexts.length);
    randomText.innerHTML = randomTexts[random];
    startTime = new Date().getTime();
}

function endTypingTest() {
    endTime = new Date().getTime();
    totalTime = Math.round((endTime - startTime) / 1000);
    calculateTypingSpeed();
    inputText.value = "";
    inputText.disabled = true;
}

function calculateTypingSpeed() {
    let arr = inputText.value.trim().split(/\s+/);
    let num = arr.length;
    if (num == 1) {
        speedResult.innerHTML = "Please type something to calculate typing speed.";
    } else {
        speedResult.innerHTML = `Your wrote ${num} words & time taken ${totalTime} sec`;
    }
}