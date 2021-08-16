let eyeIcon = document.querySelector("img");
let input = document.querySelector("input");

eyeIcon.addEventListener("click", function(e) {
	let inputType = input.type

	if(inputType === "password") {
		input.type = 'text'
		eyeIcon.src = "./images/close.png"
	} else {
		input.type = 'password'
		eyeIcon.src = "./images/open.png"
	}
})