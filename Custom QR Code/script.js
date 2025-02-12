const inputText = document.querySelector("#inputText");
const qrCodeImg = document.querySelector("#qrCodeImg");
const generate = document.querySelector("#generate");
const qrCode = document.querySelector(".qrCode");

generate.addEventListener("click", function() {
    if(inputText.value.length>""){
        qrCodeImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputText.value;
        qrCode.classList.add("newDiv");
    }else{
        inputText.classList.add("nothing");
        setTimeout(() => {
            inputText.classList.remove("nothing");
        },500)
    }
})