
// // document.querySelector("select").addEventListener("change", function(e) {
// // 	console.log(e.target.value)
// // })
// let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []

// let ulElement = document.querySelector("ul");

// tasks.forEach(function(task) {
// 	let li = document.createElement("li");
// 	li.className = "collection-item";
// 	let link = document.createElement('a');
// 	link.className = "delete-item secondary-content";
// 	let icon = document.createElement("i");
// 	icon.className = "fa fa-remove";
// 	link.appendChild(icon);
// 	let newText = document.createTextNode(task);
// 	li.appendChild(newText)
// 	li.appendChild(link)

// 	ulElement.appendChild(li)
// })

// document.querySelector("body").addEventListener("click", function(e) {
// 	if(e.target.parentElement.className==="delete-item secondary-content") {
// 		e.target.parentElement.parentElement.remove()

// 		let index = tasks.indexOf(e.target.parentElement.parentElement.textContent)

// 		tasks.splice(index, 1)

// 		localStorage.setItem('tasks', JSON.stringify(tasks))
// 	}
// })

// document.querySelector('form').addEventListener("submit", function(e) {
// 	let value = document.querySelector(".new-task-input").value

// 	tasks.push(value);

// 	localStorage.setItem("tasks", JSON.stringify(tasks))

// 	let li = document.createElement("li");
// 	li.className = "collection-item";
// 	let link = document.createElement('a');
// 	link.className = "delete-item secondary-content";
// 	let icon = document.createElement("i");
// 	icon.className = "fa fa-remove";
// 	link.appendChild(icon);
// 	let newText = document.createTextNode(value);
// 	li.appendChild(newText)
// 	li.appendChild(link)

// 	ulElement.appendChild(li)

// 	e.preventDefault()
// })


// let searchInput = document.querySelector("input.search-input");

// // searchInput.addEventListener("keyup", function(e) {
// // 	let query = e.target.value.toLowerCase();

// // 	let taskElements = document.querySelectorAll("li.collection-item");
// // 	taskElements.forEach(function(li) {
// // 		li.textContent = li.textContent.toLowerCase()
// // 		if(li.textContent.indexOf(query) != -1) {
// // 			li.style.display = "block"
// // 		} else {
// // 			li.style.display = 'none'
// // 		}
// // 	})
// // })

// searchInput.addEventListener("keyup", function(e) {
// 	let query = e.target.value.toLowerCase();

// 	let searched = tasks.filter(function(task) {
// 		return task.indexOf(query) == -1 ? false : true
// 	})

// 	ulElement.innerHTML = ""

// 	searched.forEach(function(task) {
// 		let li = document.createElement("li");
// 		li.className = "collection-item";
// 		let link = document.createElement('a');
// 		link.className = "delete-item secondary-content";
// 		let icon = document.createElement("i");
// 		icon.className = "fa fa-remove";
// 		link.appendChild(icon);
// 		let newText = document.createTextNode(task);
// 		li.appendChild(newText)
// 		li.appendChild(link)

// 		ulElement.appendChild(li)
// 	})
// })

// setTimeout(function() {
// 	console.log(true)
// }, 2000)

setInterval(function() {
	console.log(true)
}, 1000)