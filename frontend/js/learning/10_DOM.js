console.log("Hello There");

// old way
let buttonElement = document.getElementById("cta");
let paragraph = document.getElementsByClassName("para");
let tags = document.getElementsByTagName("p");



// buttonElement.innerHTML = "Hello guys";
// paragraph[0].innerHTML = "para changed";
// tags[1].innerHTML = "second para without class";


//  new way
let button = document.querySelector("#cta");
console.log(button);
button.innerHTML = "Something";

let paras = document.querySelectorAll("p");
console.log(paras);
paras[1].innerHTML = "everything";

