console.log("hello from the operators page");

/**
 * OPERATORS
 * operators are the symbols that does a specific operation to some values
 * operators are of 4 types
 *  1: mathematical operators (+,-,*,/,%)
 *  2: camparision operators (<,>,<=,>=,== , ===, !=)
 *  3: assignment operators (=,+=,-=,*=,/=,%=)
 *  4: logical operator (&& , || , !)
 */

let num1 = 34;
let num2 = 10;

//? arithmatic operators

let result = num1 + num2;
result = num1 - num2;
result = num1 * num2;
result = num1 / num2;
result =  num1 % num2;
console.log("the result is  => ", result);


// ? camparision operator 
let age = 16;

let canDrive = age >= 18;
canDrive = age > 18;
canDrive = age < 18;
canDrive = age <= 18;
canDrive = age >= 18;
canDrive = age == "16"; // checks only value not datatype
canDrive = age === "16"; // checks both datatype and value
canDrive = age != 16;
console.log("can the user drive? =>" , canDrive);



// ? Assignment operators
let salary = 200;
console.log("salary is " , salary);
let increment = 7;
salary  = salary + 5;
salary += 6;
salary += increment;
salary -= 50;
salary *= 2;
salary /= 3;
console.log("salary is " , salary);



// ? Logical operators
let userAge = 12;
let userRelegion = "christian";
let condition1 = userAge >= 21;
let condition2 = userRelegion != "muslim";
let bothConditions = userAge >= 21 || userRelegion != "muslim";
console.log(!bothConditions)
