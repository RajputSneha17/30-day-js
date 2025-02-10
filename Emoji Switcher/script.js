const array = ["😀","😁","😂","🤣","😃","😄","😅","😆","😉","😊","😋","😎","😍","😘","🥰","😗","😙","🥲","😚","🙂","🤗","🤩","🤔","🫡","🤨","😐","😑"];

const container = document.querySelector(".container");

let index = 0;

function change(){
    container.innerHTML = array[index];
  index = (index +1) % array.length;
}
container.addEventListener("mouseover", change);
container.addEventListener("click", change);