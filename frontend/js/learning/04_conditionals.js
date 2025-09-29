console.log("Welcome to the Conditional page");
/**
 * CONDITIONALS
 * conditionals are the structures that help the code decide
 * there are two conditional in js
 *  1: if else conditional
 *  2: switch case conditional
 * alert , prompt and confirm in js
 *
 */

// let nombre = prompt("Enter your name");
// let age = prompt(nombre + ", What is your age?");

// if(age < 18){
//     console.log(nombre + " you are not eligible for driving license");
// }else{
//     console.log(nombre + " you are eligible for driving license");
// }

//? 1: user se input lena hy
// let userName = prompt("Enter your name");
// let totalMarks = prompt("Enter total marks for matric");
// let obtainedMarks = prompt("Enter your obtained marks");

//? 2: percentage nikalni hy
// let percentage = (obtainedMarks / totalMarks) * 100;

// //? 3: pass a comment on percentage basic
// if (percentage >= 90) {
//   if (percentage > 95) {
//   } else {
//   }
//   console.log(
//     "Thank god you passed, I was about to replace you with the neighbor's kid."
//   );
// } else if (percentage >= 80) {
//   console.log(
//     "Not bad... but still not enough to make me proud at family dinners."
//   );
// } else if (percentage >= 70) {
//   console.log("You're the reason teachers sigh before marking papers.");
// } else if (percentage >= 60) {
//   console.log("Congrats, you’re just above the ‘failure’ museum display.");
// } else if (percentage >= 50) {
//   console.log(
//     "Barely made it. I’ve seen WiFi signals stronger than your grades."
//   );
// } else if (percentage >= 40) {
//   console.log("Even Google can't search for your potential.");
// } else if (percentage >= 30) {
//   console.log(
//     "You didn’t pass, but you could at least entertain us in a comedy show."
//   );
// } else if (percentage >= 20) {
//   console.log("If effort was a currency, you’d be bankrupt.");
// } else if (percentage >= 10) {
//   console.log(
//     "You’ve achieved the academic equivalent of tripping on a flat surface."
//   );
// } else {
//   console.log("Pack your bags, hommie — you're going to live on the streets.");
// }

let nam = "joe";

// Switch case conditionals

switch (nam) {
  case "obama":
    console.log("we'll remember your sacrifice ");
    break;
  case "trump":
    console.log("we never forget your service");
    break;
  default:
    console.log("your man is not in our database");
    break;
}
