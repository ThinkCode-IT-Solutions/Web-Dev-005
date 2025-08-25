console.log("Welcome to the Loop page");

/**
 * LOOPS
 * loops run a specific block of code over specified iteration
 * loops are 90% of the time are use to iterate arrays
 * there are 3 basic types of loop
 *      - for loop
 *      - while loop
 *      - do while loop
 *      - for in loop , for as loop , foreach loops (not loops)
 *
 * there are 3 concepts in a loop
 *      - controlling variable
 *      - condition
 *      - update the controlling variable
 */

let friends = [
  "Muhtshim",
  "Zaid",
  "Anosha",
  "Hassan",
  "Ali",
  "Areeba",
  "Fatima",
  "Hamza",
  "Sara",
  "Usman",
  "Ayesha",
  "Bilal",
  "Zoya",
  "Danish",
  "Laiba",
  "Omar",
  "Maryam",
  "Shahzad",
  "Hira",
  "Ahmad",
  "Nimra",
  "Saad",
  "Ifrah",
  "Kashan",
  "Mahnoor",
  "Taha",
  "Iqra",
  "Talha",
  "Sana",
  "Imran",
  "Ayman",
];
let cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Faisalabad",
  "Multan",
  "Hyderabad",
  "Sialkot",
  "Peshawar",
  "Quetta",
  "Gujranwala",
  "Bahawalpur",
  "Sukkur",
  "Larkana",
  "Mardan",
  "Abbottabad",
  "Okara",
  "Sargodha",
  "Kasur",
  "Jhelum",
  "Sheikhupura",
  "Swat",
  "Rahim Yar Khan",
  "Chiniot",
  "Dera Ghazi Khan",
  "Mirpur",
  "Gujrat",
  "Mansehra",
  "Gwadar",
  "London",
  "New York",
  "Toronto",
  "Paris",
  "Berlin",
  "Tokyo",
  "Beijing",
  "Dubai",
  "Istanbul",
  "Kuala Lumpur",
  "Jakarta",
  "Bangkok",
  "Madrid",
  "Rome",
  "Moscow",
  "Sydney",
  "Melbourne",
  "Cape Town",
  "Mexico City",
  "Singapore",
  "Seoul",
];

/**
 * controlling variable
 * condition
 * increment
 */

// for(let index = 0; index < myFavFood.length;index++){
//   let element = myFavFood[index];
//   console.log(element);
// }

let myFavFood = ["biryani", "palao", "pizza", "maggi", "beef"];

let loop = 0; // outside of the loop
// while(loop > myFavFood.length){
//   console.log(myFavFood[loop] + " is tasty");

//   loop++;
// }


do{
  console.log(myFavFood[loop] + " is tasty");
  loop++;
}while (loop > myFavFood.length);

