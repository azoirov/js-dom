// let val

// // querySelectorAll
// let ulElement = document.querySelector("ul.collection")
// let listItemElement = ulElement.querySelectorAll("li")

// val = ulElement.querySelector("li:first-child");
// val = ulElement.querySelector("li:nth-child(3)");

// // ulElement.querySelector("li:nth-child(2)").textContent = "Hello"

// // Get Child Nodes
// val = ulElement.childNodes[4].nodeType

// /*
// 	* Node Types
// 	1 - Element
// 	2 - Attribute
// 	3 - Text Node
// 	8 - Comment
// 	9 - Document
// 	10 - Doctype
// */

// val = ulElement.childNodes[3].nodeName

// val = ulElement.children[1].children[0].children

// val = ulElement.firstChild

// val = ulElement.firstElementChild

// val = ulElement.lastElementChild

// val = ulElement.childNodes

// for(let el of val) {
// 	if(el.nodeName === "LI") {
// 		// console.log(el)
// 	}
// }

// val = ulElement.childElementCount

// val = ulElement.childNodes[1].nextElementSibling.nextElementSibling.previousElementSibling.previousElementSibling

// // CreateElement
// let newlistElement = document.createElement("li")
// newlistElement.className = 'collection-item'
// let link = document.createElement("a")
// link.setAttribute("href", "#")
// val = link.getAttribute("href")

// link.className = "delete-item secondary-content"

// // link.innerHTML = `<i class="fa fa-remove"></i>`

// let icon = document.createElement("i");
// icon.className = 'fa fa-remove'

// link.appendChild(icon)

// let newTextNodeElement = document.createTextNode("Hello World")

// newlistElement.appendChild(newTextNodeElement)

// newlistElement.appendChild(link)

// val = newlistElement

// ulElement.appendChild(newlistElement)

// ulElement.replaceChild(newlistElement, ulElement.children[2])

// link.removeAttribute("href")

// val = link.hasAttribute("href")

// link.classList.add("test")
// link.classList.remove("test")

// val = link

// // Event

// let clearBtn = document.querySelector(".card-action").lastElementChild

// clearBtn.addEventListener("click", function(e) {
// 	val = e.clientY;

// 	val = e.clientX

// 	val = e.offsetY

// 	val = e.offsetX

// 	console.log(val)
// })

// 

let container = document.querySelector(".container");

let rowDivElement = document.createElement("div");

rowDivElement.classList.add('row');


let colElement = document.createElement("div");

colElement.className = "col s12"

let cardDivElement = document.createElement("div");

cardDivElement.className = "card";

cardDivElement.setAttribute("id", "main");

let cartContentElement = document.createElement("div");

cartContentElement.classList.add("card-content");


let spanElement = document.createElement("span");

spanElement.textContent = "Task List";

spanElement.className = "card-title"

cardDivElement.appendChild(spanElement)
cardDivElement.appendChild(cartContentElement);
let cardContentRowElement = document.createElement("div");

cardContentRowElement.className = 'row';

cartContentElement.appendChild(cardContentRowElement);

let formElement = document.createElement("form")

formElement.setAttribute("id", "task-form");

cardContentRowElement.appendChild(formElement);

let inputFieldElement = document.createElement("div");

inputFieldElement.classList.add("input-field");

let inputElement = document.createElement("input");

inputElement.setAttribute("type", "text")
inputElement.setAttribute("name", "task")
inputElement.setAttribute("value", "Fulfil");
inputElement.setAttribute("id", "task")

inputFieldElement.appendChild(inputElement);

let labelElement = document.createElement("label");

labelElement.setAttribute("for", "task");

labelElement.textContent = "New Task"

inputFieldElement.appendChild(labelElement);

formElement.appendChild(inputFieldElement)

let inputSubmitElement = document.createElement("input");

inputSubmitElement.setAttribute("type", "submit");
inputSubmitElement.setAttribute("value", "Add Task");
inputSubmitElement.className = "btn"

formElement.appendChild(inputSubmitElement)

cartContentElement.appendChild(cardContentRowElement);

let cardActionDivElement = document.createElement("div");

cardActionDivElement.className = "card-action";

let taskTitleElement = document.createElement("h5");

taskTitleElement.id = "task-title";

taskTitleElement.textContent = "Tasks";

cardActionDivElement.appendChild(taskTitleElement)

let ulElement = document.createElement("ul");

ulElement.className = "collection";


// // CreateElement

for(let i = 0; i<10; i++) {
	let newlistElement = document.createElement("li")
newlistElement.className = 'collection-item'
let link = document.createElement("a")
link.setAttribute("href", "#")
val = link.getAttribute("href")

link.className = "delete-item secondary-content"

// link.innerHTML = `<i class="fa fa-remove"></i>`

let icon = document.createElement("i");
icon.className = 'fa fa-remove'

link.appendChild(icon)

let newTextNodeElement = document.createTextNode("Hello World")

newlistElement.appendChild(newTextNodeElement)

newlistElement.appendChild(link)

val = newlistElement

ulElement.appendChild(newlistElement)

}

cardActionDivElement.appendChild(ulElement)

cardDivElement.appendChild(cardActionDivElement)

colElement.appendChild(cardDivElement)

rowDivElement.appendChild(colElement)

container.appendChild(rowDivElement)

// Styles
oddElements = document.querySelectorAll("li:nth-child(odd)")

evenElements = document.querySelectorAll("li:nth-child(even)")

oddElements.forEach(function(element) {
	element.style.backgroundColor = "#ccc"
})

evenElements.forEach(function(element) {
	element.style.backgroundColor = "#000"
	element.style.color = "#fff"
})

console.log(val)