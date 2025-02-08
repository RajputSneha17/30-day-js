const copyBtnIcon = document.querySelector(".copyBtnIcon");
const copyBtn = document.querySelector(".copyBtn");
const generateBtn = document.querySelector(".generateBtn");
const showInput = document.querySelector(".showInput");


function copy(){
    copyBtn.addEventListener("click", function(){
        copyBtnIcon.className = "fa-solid fa-check";
        setTimeout(() => {
            copyBtnIcon.className = "fa-regular fa-copy";
        },800);

        showInput.select();
        document.execCommand("copy");
    })
}

copy();

function show(){
        let password = "";
        const numbers = "123456789";
        const smallLetters = "abcdefghijklmnopqrstuvwxyz";
        const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const specialCharacters = "@#$%&*!?";
        
        const allCharacters = numbers+smallLetters + capitalLetters + specialCharacters;
    
        for(let i=0; i < 16; i++){
            let num = Math.floor(Math.random()*allCharacters.length);
            let random = allCharacters[num];
            if(!password.includes(random)){
                password+=random;
            }else{
                i--;
            }
        }
        
        showInput.value = password;
    }
    

function generate(){
    generateBtn.addEventListener("click", function(){
        show();
    })
}

generate();