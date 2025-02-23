const display = document.querySelector(".display");

function calculate(value){
    display.value += value;
}

function clearValue(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0, -1);
}

function result(){
    try{
        display.value = eval(display.value);
    }catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown", function(event){
    const key = event.key;
    if(/[0-9.+\-*/]/.test(key)){
        calculate(key);
    }else if(key === "Enter"){
        result();
    }else if(key === "Backspace"){
        deleteLast();
    }
})