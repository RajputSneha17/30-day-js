const showInput = document.querySelector(".showInput");
const changeBtn = document.querySelector(".changeBtn");
const copyBtn = document.querySelector(".copyBtn");
const copyIcon = document.querySelector(".copyIcon");


function changeColor(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    showInput.value = randomColor;
    document.body.style.backgroundColor = randomColor;
}

changeBtn.addEventListener("click", () => {
    changeColor();
}
)

copyBtn.addEventListener("click", () => {
    showInput.select();
    document.execCommand("copy");
    copyIcon.className = 'fa-solid fa-check';
    setTimeout(() => {
        copyIcon.className = 'fa-regular fa-copy';
    }, 300);
})