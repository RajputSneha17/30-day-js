const inputColor = document.querySelector(".inputColor");
const inputText = document.querySelector(".inputText");
const icon = document.querySelector("#icon");

function copy(){
    icon.addEventListener("click", function(){
        icon.className = "fa-solid fa-check";
        inputText.select();
        document.execCommand("copy");
        setTimeout(() => {
            icon.className = "fa-regular fa-copy";
        }, 500)
    })
}

function color(){
    inputText.value = inputColor.value;
}
copy();