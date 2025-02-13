const api = "https://official-joke-api.appspot.com/random_joke";
        const pera1 = document.querySelector(".pera1");
        const pera2 = document.querySelector(".pera2");
        const btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
    fetch(api)
    .then(response => response.json())
    .then(data => {
        pera1.innerHTML = data.setup;
        pera2.innerHTML = data.punchline + "😂";
    })
})