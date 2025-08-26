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

function getPercentage(name, obtained, total = 1200) {
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

let number1 = 34;
let number2 = 98;

// let tableOf = prompt("Enter a number to print a table");
// tableOf = parseInt(tableOf);

// function definition
function getTable(tableof) {
  for (let index = 1; index <= 10; index++) {
    let result = tableof * index;
    console.log(`${tableof} X ${index} = ${result}`);
  }
}

// wasif -> calculator
let num1 = parseInt(prompt("Enter number 1"));
let num2 = parseInt(prompt("Enter number 2"));
let operation = prompt(
  "Choose an operation \n[1] : Addition (+)\n[2] : Multiplication (*)\n[3] : Division (/)\n[4] : Subtraction (-)\n"
);
calculator(num1,num2,operation)

function calculator(n1, n2, ops) {
  if (ops == 1) {
    let result = n1 + n2;
    console.log("the sum is ", result);
  } else if (ops == 2) {
    result = n1 * n2;
    console.log("the multiplication is ", result);
  } else if (ops == 3) {
    result = n1 / n2;
    console.log("the divison is ", result);
  } else if (ops == 4) {
    result = n1 - n2;
    console.log("the minus is ", result);
  }else{
    console.log("invalid vale");
  }
}
