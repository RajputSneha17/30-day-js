const addButton = document.querySelector(".fa-plus");
const parentDiv = document.querySelector(".new");
const trash = document.querySelector(".fa-trash-can");

addButton.addEventListener("click", function(){
    let wrapper = document.createElement("div");
    let input1 = document.createElement("input");
    input1.type = "text";
    input1.placeholder = "Enter Name";
    let input2 = document.createElement("input");
    input2.type = "email";
    input2.placeholder = "Enter Email";
    let icon = document.createElement("i");
    icon.className = "fa-solid fa-trash-can";

    wrapper.appendChild(input1);
    wrapper.appendChild(input2);
    wrapper.appendChild(icon);

    parentDiv.appendChild(wrapper);
    icon.addEventListener("click", function(){
        wrapper.remove();
    })
})