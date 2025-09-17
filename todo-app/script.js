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
  console.log(todoArray);
  formInput.value = "";

  // show the notes
  let notesContainer = document.querySelector(".todo-list");

  // loop through the todo
  let index = 0;
  while (index < todoArray.length) {
    let todoItem = todoArray[index];
    let noteItemString = `<li class="todo-item">
          <div class="item-main">
            <input type="checkbox" id="task3" />
            <label for="task3">${todoItem.title}</label>
          </div>
          <div class="item-meta">
            <span class="date">${todoItem.time}</span>
          </div>
        </li>`;
    notesContainer.innerHTML += noteItemString;
    index++;
  }

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
    "Wed",
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
    "Sep",
    "October",
    "November",
    "December",
  ];
  let monthActual = monthArray[month];

  let dateAndTime = `${hour}:${minute} ${dayActual} ${dateToday},${monthActual} ${year}`;
  return dateAndTime;
};

form.addEventListener("submit", submitForm);
