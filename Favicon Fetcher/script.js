const img = document.querySelector(".img");
const inputText = document.querySelector(".inputText");
const sub = document.querySelector(".sub");

function favicon(){
    if(inputText.value.length>0){
        const url = `https://www.google.com/s2/favicons?sz=128&domain=${inputText.value}`;
        img.classList.remove("show");
        img.style.display = "inline";
            setTimeout(() => {
                img.classList.add("show");
                img.src = url;
            }, 300);
    }else{
        inputText.classList.add("nothing");
        setTimeout(() => {
            inputText.classList.remove("nothing");
        },500)
    }
}

sub.addEventListener("click", favicon);
inputText.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        favicon();
    }
})