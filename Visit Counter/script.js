const minus = document.querySelector("#minus");
        const plus = document.querySelector("#plus");
        const num = document.querySelector(".num");

        num.innerHTML = 0;
        minus.addEventListener("click", function(){
            num.innerHTML--;
        })
        plus.addEventListener("click", function(){
            num.innerHTML++;
        })