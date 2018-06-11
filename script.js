const tasks = ["buy milk", "eat dinner", "nail javascript", "give feedback"];

// - For each todo in the tasks array, append it to the `<ul id='todo-list'></ul>`
//   element

// function appendTask(task){
//     document.querySelector('ul').appendChild(document.createElement('li')).textContent = task;
// }

// tasks.forEach(appendTask);

tasks.forEach(task => {
  const newLi = document.createElement("li");
  newLi.textContent = task;
  document.getElementById("todo-list").appendChild(newLi);
});

// - Create a css class (e.g. `.done`) that, when applied on an element, adds the
//   `text-decoration: line-through` property

// - Add a click listener to the `<li></li>` elements that adds the css class that
//   you created in the previous step to the element that was clicked

// - Update the callback function so that clicking on the list element toggles
//   (i.e. add/remove) the `.done` css class (hint: take a look at the
//   documentation for `.classList.toggle()`)

var listItems = document.querySelectorAll("li");

function addClickHandler(eachLi) {
  eachLi.addEventListener("click", event => {
    event.target.classList.toggle("lineThrough");
  });
}

listItems.forEach(addClickHandler);

// ### Adding more To-Do items

// - Add a `<input>` HTML element and a `<button>Add Todo</button>` HTML element.

const newInput = document.createElement("input");
document.body
  .appendChild(newInput)
  .insertAdjacentHTML("afterend", "<button>Add ToDo</button>");

// - Add a 'click' event listener to the button that adds the value of the
//   `<input>` element as a new todo in the `ul#todo-list` (follow the 3 steps for
//   creating and appending a new DOM element -

function addToDoItem() {
	var addNewLi = document.createElement("li");
    addClickHandler(addNewLi);
    addNewLi.textContent = document.querySelector("input").value;
    document.getElementById("todo-list").appendChild(addNewLi);
    addNewBtn(addNewLi);
    document.querySelector("input").value = "";
}

document.querySelector("button").addEventListener("click", () => {
	addToDoItem();
});

document.addEventListener("keypress", () => {
  if (event.keyCode == 13 && document.querySelector("input").value != "") {
    addToDoItem()
  }
});

// Add cancel buttons

function addNewBtn(eachLi) {
  const newBtn = document.createElement("button");
  newBtn.textContent = "x";
  newBtn.classList.add("cancelBtn");
  addCancelf(newBtn);
  eachLi.appendChild(newBtn);
}

listItems.forEach(addNewBtn);

var cancelBtns = document.querySelectorAll(".cancelBtn");

function addCancelf(eachBtn) {
  eachBtn.addEventListener("click", event => {
    var liToRemove = event.target.parentNode;
    liToRemove.remove();
  });
}
