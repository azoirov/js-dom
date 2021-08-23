let capslock = false
let shift = false
let isLowerCased = false

let keyboard = {
	first_line: [
	{
		symbol: '`',
		shift: "~"
	},
	{
		symbol: '1',
		shift: "!"
	},
	{
		symbol: '2',
		shift: "@"
	},
	{
		symbol: '3',
		shift: "#"
	},
	{
		symbol: '4',
		shift: "$"
	},
	{
		symbol: '5',
		shift: "%"
	},
	{
		symbol: '6',
		shift: "^"
	},
	{
		symbol: '7',
		shift: "&"
	},
	{
		symbol: '8',
		shift: "*"
	},
	{
		symbol: '9',
		shift: "("
	},
	{
		symbol: '0',
		shift: ")"
	},
	{
		symbol: '-',
		shift: "_"
	},
	{
		symbol: '=',
		shift: "+"
	},
	],
	second_line: [
		{
		symbol: 'q',
		shift: "Q",
		isLetter: true
	},
	{
		symbol: 'w',
		shift: "W",
		isLetter: true
	},
	{
		symbol: 'e',
		shift: "E",
		isLetter: true
	},
	{
		symbol: 'r',
		shift: "R",
		isLetter: true
	},
	{
		symbol: 't',
		shift: "T",
		isLetter: true
	},
	{
		symbol: 'y',
		shift: "Y",
		isLetter: true
	},
	{
		symbol: 'u',
		shift: "U",
		isLetter: true
	},
	{
		symbol: 'i',
		shift: "I",
		isLetter: true
	},
	{
		symbol: 'o',
		shift: "O",
		isLetter: true
	},
	{
		symbol: 'p',
		shift: "P",
		isLetter: true
	},
	{
		symbol: '[',
		shift: "{"
	},
	{
		symbol: ']',
		shift: "}"
	},
	{
		symbol: '\\',
		shift: "|"
	},
	],
	third_line: [
	{
		symbol: 'a',
		shift: "A",
		isLetter: true
	},
	{
		symbol: 's',
		shift: "S",
		isLetter: true
	},
	{
		symbol: 'd',
		shift: "D",
		isLetter: true
	},
	{
		symbol: 'f',
		shift: "F",
		isLetter: true
	},
	{
		symbol: 'g',
		shift: "G",
		isLetter: true
	},
	{
		symbol: 'h',
		shift: "H",
		isLetter: true
	},
	{
		symbol: 'j',
		shift: "J",
		isLetter: true
	},
	{
		symbol: 'k',
		shift: "K",
		isLetter: true
	},
	{
		symbol: 'l',
		shift: "L",
		isLetter: true
	},
	{
		symbol: ';',
		shift: ":"
	},
	{
		symbol: "'",
		shift: '"'
	},
	],
	forth_line: [
	{
		symbol: 'z',
		shift: "Z",
		isLetter: true
	},
	{
		symbol: 'x',
		shift: "X",
		isLetter: true
	},
	{
		symbol: 'c',
		shift: "C",
		isLetter: true
	},
	{
		symbol: 'v',
		shift: "V",
		isLetter: true
	},
	{
		symbol: 'b',
		shift: "B",
		isLetter: true
	},
	{
		symbol: 'n',
		shift: "N",
		isLetter: true
	},
	{
		symbol: 'm',
		shift: "M",
		isLetter: true
	},
	{
		symbol: ',',
		shift: "<"
	},
	{
		symbol: '.',
		shift: ">"
	},
	{
		symbol: '/',
		shift: "?"
	},]
}

let openBtn = document.querySelector(".toggle-keyboard")
let container = document.querySelector(".container")

openBtn.addEventListener('click', function(e) {
	container.classList.toggle("open")
})

let firstLineElement = document.querySelector('.first-line')
let secondLineElement = document.querySelector('.second-line')
let thirdLineElement = document.querySelector('.third-line')
let forthLineElement = document.querySelector('.forth-line')
	
let shiftBtn


init()


function init() {
	// First Line

	firstLineElement.innerHTML = ""
	secondLineElement.innerHTML = ""
	thirdLineElement.innerHTML = ""
	forthLineElement.innerHTML = ""

	keyboard.first_line.forEach(function(element) {
		if(capslock) {
			firstLineElement.innerHTML +=`<span class="button button-style">${element.isLetter ? element.shift : element.symbol}</span>`
		} else {
			firstLineElement.innerHTML +=`<span class="button button-style">${shift ? element.shift : element.symbol}</span>`
		}
	})

	firstLineElement.innerHTML += `<span class="button-style backspace" style="font-size: 15px;line-height: 48px">Backspace</span>`

	// Second Line
	secondLineElement.innerHTML += `<span class="button-style tab">Tab</span>`
	keyboard.second_line.forEach(function(element) {
		if(capslock) {
			secondLineElement.innerHTML +=`<span class="button button-style">${element.isLetter ? element.shift : element.symbol}</span>`
		} else {
			secondLineElement.innerHTML +=`<span class="button button-style">${shift ? element.shift : element.symbol}</span>`
		}
	})

	// Third Line
	thirdLineElement.innerHTML += `<span class="capsLock button-style" style="font-size: 15px; text-align: left; padding-left: 10px;">CapsLK
	                <span class="light"></span></span>`
	keyboard.third_line.forEach(function(element) {
		if(capslock) {
			thirdLineElement.innerHTML +=`<span class="button button-style">${element.isLetter ? element.shift : element.symbol}</span>`
		} else {
			thirdLineElement.innerHTML +=`<span class="button button-style">${shift ? element.shift : element.symbol}</span>`
		}
	})
	thirdLineElement.innerHTML += `<span class="button-style enter">Enter</span>`

	// Forth Line
	forthLineElement.innerHTML += `<span class="button-style shift">Shift</span>`
	keyboard.forth_line.forEach(function(element) {
		if(capslock) {
			forthLineElement.innerHTML +=`<span class="button button-style">${element.isLetter ? element.shift : element.symbol}</span>`
		} else {
			forthLineElement.innerHTML +=`<span class="button button-style">${shift ? element.shift : element.symbol}</span>`
		}
	})
	forthLineElement.innerHTML += `<span class="button-style shift">Shift</span>`

	shiftBtn = document.querySelectorAll(".shift");

}


let displayElement = document.querySelector(".display");

function keyClick() {
	let btns = document.querySelectorAll("span.button")

	btns.forEach(function(btn) {
		btn.addEventListener("click", function(e) {

			if(!capslock) {
				displayElement.innerHTML += btn.textContent
			} else {
				displayElement.innerHTML += btn.textContent
			}

			capslock = isLowerCased ? true : capslock

			isLowerCased = false

			init()
			keyClick()
			commandClick()
		})
	})
}
keyClick()

function commandClick() {
	let backSpaceBtn = document.querySelector(".backspace");
	backSpaceBtn.addEventListener("click", function(e) {
		let value = displayElement.innerHTML.split("")
		let popedValue = value.pop()
		value = value.join("");
		displayElement.innerHTML = value
	})

	let tabBtn = document.querySelector(".tab");
	tabBtn.addEventListener("click", function(e) {
		displayElement.innerHTML += "&emsp;"
	})

	let enterBtn = document.querySelector(".enter");
	enterBtn.addEventListener("click", function(e) {
		console.log(true)
		displayElement.textContent += " "
	})

	let capslockBtn = document.querySelector(".capsLock")
	capslockBtn.addEventListener("click", function(e) {
		capslock = !capslock
		init()
		keyClick()
		commandClick()
	})

	let spaceBtn = document.querySelector(".space") 
	spaceBtn.addEventListener("click", function(e) {
		displayElement.textContent += " "
	})
}

commandClick()

document.body.addEventListener("click", function(e) {
	if(e.target.classList.contains("shift")) {
		shift = capslock ? false : !shift
		isLowerCased = capslock ? true : false
		capslock = isLowerCased ? false : capslock
		init()
		keyClick()
		commandClick()
	}
})