let input = document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector("ul");

function addListItem(){
    newValue = input.value;
    if(newValue){
        const newListItem =  document.createElement('li');
        const dustbin = document.createElement('i');
        const circle = document.createElement('i');
        const rightCircle = document.createElement('i');

        circle.className = 'fa-regular fa-circle';
        rightCircle.className ='fa-regular fa-circle-check';
        dustbin.className = 'fa-solid fa-trash-can';

        newListItem.textContent = newValue;

        list.appendChild(newListItem);
        newListItem.appendChild(dustbin);
        newListItem.appendChild(circle);
        newListItem.appendChild(rightCircle);
        rightCircle.style.display='none';
        input.value = '';
        circle.addEventListener('click', function(){
            circle.style.display='none';
            rightCircle.style.display='inline';
            newListItem.style.textDecoration = 'line-through';
        })
        rightCircle.addEventListener('click', function(){
            circle.style.display='inline';
            rightCircle.style.display='none';
            newListItem.style.textDecoration = 'none';
        })
        dustbin.addEventListener('click', function(){
            list.removeChild(newListItem);
        })

}};

button.addEventListener('click', addListItem);
input.addEventListener('keyup', function(event){
   if(event.key === 'Enter'){
    addListItem()
   }
})