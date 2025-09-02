console.log("Hello from the DOM 11 class");

let mainButton = document.querySelector("#cta");
console.log(mainButton);

// inner content change krny ky liye
mainButton.innerHTML = "<u>Sell Now</u>";
mainButton.innerText = "Real Estate";

// styling change krny ky liye
mainButton.style.background = "#9b2a2a";
mainButton.style.background =
  "linear-gradient(47deg, rgba(155, 42, 42, 1) 0%, rgba(106, 87, 199, 1) 100%, rgba(237, 221, 83, 1) 93%)";
mainButton.style.padding = ".5rem 1.5rem";
mainButton.style.color = "white";
mainButton.style.fontWeight = "bold";
mainButton.style.fontSize = "large";
mainButton.style.border = "3px solid white";
mainButton.style.borderRadius = ".4rem";

// grabbing by class

let buttons = document.getElementsByClassName("btns");
console.log(buttons);

let index = 0;
while (index < buttons.length) {
  let element = buttons[index];
  element.innerHTML = "Explore Now";
  element.style.background = "#9b2a2a";
  element.style.background =
    "linear-gradient(47deg, rgba(155, 42, 42, 1) 0%, rgba(106, 87, 199, 1) 100%, rgba(237, 221, 83, 1) 93%)";
  element.style.padding = ".5rem 1.5rem";
  element.style.color = "white";
  element.style.fontWeight = "bold";
  element.style.fontSize = "large";
  element.style.border = "3px solid white";
  element.style.borderRadius = ".4rem";

  index++;
}







// event listeners
let
