const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".empty")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)

	for(let empty of empties) {
		empty.addEventListener("dragover", dragOver)
		empty.addEventListener("dragenter", dragEnter)
		empty.addEventListener("dragleave", dragLeave)
		empty.addEventListener("drop", dragDrop)
	}
	

function dragStart(e) {
	e.target.parentElement.classList.add("hold")
	setTimeout(function() {
		e.target.classList.add('invisible')
	}, 0)
}

function dragEnd(e) {
	e.preventDefault()
	e.target.parentElement.classList.remove("hold")
	e.target.classList.remove('invisible')
}

function dragEnter(e) {
	e.preventDefault()
	e.target.classList.add('hovered')
}

function dragLeave(e) {
	e.preventDefault()
	e.target.classList.remove('hovered')
}

function dragOver(e) {
	e.preventDefault()
}

function dragDrop(e) {
	e.preventDefault()
	e.target.appendChild(fill)
	empties.forEach(function(empty) {
		empty.className = "empty"
	})
}

const draggables = document.querySelectorAll("p")
const containers = document.querySelectorAll(".container")
let pElement
draggables.forEach(function(draggable) {
	draggable.addEventListener("dragstart", function(e) {
		e.target.classList.add("hovered")
		pElement = e.target
	})

	draggable.addEventListener("dragend", function(e) {
		e.target.classList.remove("hovered")
	})
})

let containerSelected

containers.forEach(function(container) {
	container.addEventListener("dragover", function(e) {
		e.preventDefault()
	});

	container.addEventListener("drop", function(e) {
		e.preventDefault()
		e.currentTarget.appendChild(pElement)
	})
})

const openModal = document.querySelector(".open-modal");
const closeModal = document.querySelector(".close-modal");
const modalWrapper = document.querySelector(".modal-wrapper");

openModal.addEventListener("click", function(e) {
	modalWrapper.style.display = "flex"
})

closeModal.addEventListener("click", function(e) {
	modalWrapper.style.display = "none"
})

function sum(numbers) {
	return numbers.reduce(function(total, currentValue) {
		console.log(total, currentValue)
		return total + currentValue
	})
}

console.log(sum([2, 3, 4, 5, 10]))