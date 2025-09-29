console.log("Event Listeners");

function onClick (){
        console.log("Hello there, button is pressed");
}
function onDblClick (){
    console.log("button do bar clicked");
}

// grabbing the element
let button = document.querySelector("#cta");
button.addEventListener("click",onClick);
button.addEventListener("dblclick",onDblClick);

