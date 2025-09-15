console.log("hello from the date and time object");


let date = new Date();

let dateToday = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes()
let second = date.getSeconds();
let miliseconds = date.getMilliseconds()


let dayArray = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
let day = date.getDay();
let dayActual = dayArray[day];

let month = date.getMonth();
let monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let monthActual =monthArray[month];
console.log(monthActual);