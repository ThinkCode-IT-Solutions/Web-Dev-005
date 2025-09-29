console.log("TODO APP");
let showNotes = () => {
  // fetch the notes from the localstorage
  let notes = localStorage.getItem("notes") ?? [];
  notes = JSON.parse(notes);
  console.log(notes);
  // show the notes
  let notesContainer = document.querySelector(".todo-list");
  notesContainer.innerHTML = "";
  // loop through the todo
  let index = 0;
  while (index < notes.length) {
    let todoItem = notes[index];
    let noteItemString = `<li class="todo-item">
          <div class="item-main">
            <input type="checkbox" id=${"task"+index} />
            <label for=${"task"+index}>${todoItem.title}</label>
          </div>
          <div class="item-meta">
            <span class="date">${todoItem.time}</span>
          </div>
        </li>`;
    notesContainer.innerHTML += noteItemString;

    index++;
  }
};
showNotes();
let todoArray = JSON.parse(localStorage.getItem("notes")) ?? [];
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
  // send the todoObj to the array
  todoArray.push(todoObj);
  console.log(todoArray);

  // stringify and send the array to the localstore
  let stringifiedArray = JSON.stringify(todoArray);
  console.log(stringifiedArray);
  localStorage.setItem("notes", stringifiedArray);

  formInput.value = "";
  showNotes();
};

let getCurrentTime = () => {
  let dateTime = new Date();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let dateToday = dateTime.getDate();
  let year = dateTime.getFullYear();
  let dayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
