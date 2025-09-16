console.log("TODO APP");
let todoArray = [];
let form = document.querySelector(".todo-form");
let submitForm = (e) => {
  // stop the page reload after form submission
  e.preventDefault();

  // grab the input value
  let formInput = document.querySelector(".todo-input");

  // constructing the object
  let todoObj = {
    title: formInput.value,
    isCompleted: false,
    time: getCurrentTime(),
  };

  todoArray.push(todoObj);
  formInput.value = "";
 
  return todoObj;
};

let getCurrentTime = () => {
  let dateTime = new Date();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let dateToday = dateTime.getDate();
  let year = dateTime.getFullYear();
  let dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = dateTime.getDay();
  let dayActual = dayArray[day];

  let month = dateTime.getMonth();
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
    "December",
  ];
  let monthActual = monthArray[month];

  let dateAndTime = `${hour}:${minute} ${dateTime},${monthActual} ${year}`;
  return dateAndTime;
};


form.addEventListener("submit", submitForm);
