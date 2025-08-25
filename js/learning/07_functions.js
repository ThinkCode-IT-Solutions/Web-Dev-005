console.log("Welcome to the Functions class");
/**
 * FUNCTIONS
 * functions are the block of code that are meant to be reuse
 * function consists of two parts
 *  - function definition
 *  - function call
 * function perameters and function arguments
 * default perameters in function 
 * functions are of two types in js
 *  - common js functions
 *  - arrow functions
 *
 */

// function definition
function greet(nombre) {
  alert(`hola ${nombre} que tal?`);
}

function sum(num1, num2) {
  let result = num1 + num2;
  console.log(`The sum of ${num1} and ${num2} is ${result} `);
}

function getPercentage(name , obtained, total=1200) {
  if (total < obtained) {
    console.log("invalid values");
  } else {
    let percentage = (obtained / total) * 100;
    console.log(`${name}! you have awarded with ${percentage}% percentage `);
  }
}
// function

// let clientList = ["Amna", "Ali" , "Alizar" , "Aligulzar"];
// // function call
// let index = 0;
// while (index < clientList.length){
//     let clientName = clientList[index];
//     greet(clientName);
//     index++;
// }

sum(12, 35);

let number1 = 34;
let number2 = 98;
sum(number1, number2);

getPercentage("shahzad" , 1001, 1100);
getPercentage("Ayman", 960,1100);
