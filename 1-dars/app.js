// window

/*

- confirm

let confirmation = window.confirm("Are you sure to leave");

if(confirmation) {
	console.log("Chiqib kettiz")
} else {
	console.log("Rahmat")
}
*/

// Width and height of window;

let val;

val = window.outerHeight
val = window.outerWidth

val = window.innerHeight
val = window.innerWidth

val = window.scrollY
val = window.scrollX

//reload
// window.location.reload()

//redirect
// window.location.href = ""


// DOM - Document object module

val = document.scripts

val = document.forms

val = document.images

val = document.links

// val = Array.from(val)

val = document.getElementById("ulElement")

val = document.getElementsByClassName("ul-element")

val = document.getElementsByTagName("ul")

val = document.querySelector("ul li")


console.log(val)
