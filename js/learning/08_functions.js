console.log("Functions in js");

function sum(n1, n2, n3) {
  let result = n1 + n2 + n3;
  // console.log(`The result is ${result}`);
  return result;
}
// function to get percentage
function getPercentage(obtained, total = 1200) {
  let percentage = (obtained / total) * 100;
  percentage = Math.round(percentage);
  return percentage;
}
let percentage = getPercentage(1001, 1100);
// function to get grades
function getGrades(percentage) {
  if (percentage >= 90) {
    return "A+";
  } else if (percentage >= 80 && percentage < 90) {
    return "A";
  } else if (percentage >= 70 && percentage < 80) {
    return "B";
  } else if (percentage >= 60 && percentage < 70) {
    return "C";
  } else if (percentage >= 50 && percentage < 60) {
    return "D";
  } else {
    return "F";
  }
}


function getRemarks(gr) {
  if (gr == "A+") {
    return "Wonderful you are at the top";
  } else if (gr == "A") {
    return "Excellent! Keep it up";
  } else if (gr == "B") {
    return "Good job, but you can do even better";
  } else if (gr == "C") {
    return "Fair effort, but needs more improvement";
  } else if (gr == "D") {
    return "You passed, but you should work harder";
  } else if (gr == "F") {
    return "Failed! Don’t lose hope, try again with more focus";
  } else {
    return "Invalid grade";
  }
}


let grades = getGrades(percentage);
let remarks = getRemarks(grades);

console.log(`The percentage is ${percentage}% and the grades are ${grades} and remarks are ${remarks}`);



let greet = (name)=>{
    console.log("hy " + name);
    return "hy " +  name;
}


let greeting = greet("Yahya");
alert(greeting);



let somthing = "hello";