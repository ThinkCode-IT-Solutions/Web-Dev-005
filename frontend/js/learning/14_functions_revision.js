console.log("Hello from the Function page");

/**
 * FUNCTION => block of code to be reuse
 * function has two types
 * - common js
 * - arrow function
 * function has two components
 * - function definition
 * - function call
 * function has perameters and arguments
 * function return values back to code
 */

function greetSpanish(name, task) {
  console.log(`Hola ${name}, que tal .tus trabaha es ${task}`);
}

let greetArabic = (ism, kam) => {
  console.log("Kaefa Haluk , ya habibi");
};

let friendName = "John";
let friendTask = "clean the spreadsheets for onuvia.com lead gen";

let num1 = 23;
let num2 = 10;

let sum = (n1, n2) => {
  let result = n1 + n2;
  return result;
};

/**
 * welcome customer
 * ask if want to order
 * if yes show him menu
 * show him item detail
 * option to add more food
 * show him the bill
 */
let showMenu = () => {
  let menuChoice = prompt(
    "MENU\n0: Chicken Biryani\n1: Chicken Chowmin,\n\nNote: please enter the index number"
  );
  menuChoice = parseInt(menuChoice);
  console.log(menuChoice);
  return menuChoice;
};
let operations = () => {
  let userOrders = [];
  let foods = [
    { title: "Chicken Biryani", price: 1600, servingSize: 3, wait: 30 },
    { title: "Chicken Chowmin", price: 1350, servingSize: 2, wait: 20 },
  ];
  let menuChoice  = showMenu();
  // let indexAdjustment = menuChoice - 1;
  let userOrder = foods[menuChoice];
  let orderConfirmation = confirm(
    `Do you want to confirm this order\n Name :${userOrder.title}\n Price: PKR ${userOrder.price}\nServing Size: ${userOrder.servingSize} person\nNOTE: your food on the way. it might take ${userOrder.wait} minutes`
  );
  if (orderConfirmation) {
    userOrders.push(userOrder);
    console.log(userOrders);
  }
  let moreOrderPrompt = confirm("Do you want to order anything else");
  if (moreOrderPrompt) {
    // show menu again
    let showingMenuAgain = showMenu();
    
  } else {
    // calculate
    console.log("send a bill");
  }
};

let triggerProgram = () => {
  alert(
    "************************\nInfusio Eats\n*************************\n Welcome to our Diner"
  );
  let orderChoice = confirm("Do you want to order anything");
  if (orderChoice) {
    // show menu
    operations();
  } else {
    // have a good sitting
    alert("No Problems, you can sit as long as you want");
  }
};
triggerProgram();
