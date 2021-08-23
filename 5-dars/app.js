// OOP - Object oriented programming

// let circle = {
// 	radius: 5,

// 	draw: function() {
// 		console.log(2 * Math.PI * this.radius)
// 	}
// }

// let circle2 = {
// 	radius: 6
// }

// circle.draw()

// console.log(circle)

function Person(name) {
	this.name = name

	this.greeting = function() {
		console.log(`Hello, ${this.name}`)
	}
}

let person1 = new Person("Asadbek")

Person.prototype.call = function() {
	console.log("call")
}

function Customer(since) {
	this.since = since
}

Customer.prototype = Object.create(Person)

let customer1 = new Customer(new Date("1-10-2020"))

customer1.prototype.call()

console.log(customer1)

/*
🔴 Vazifa

🔸 Yasalgan ui kutubxonalar va translterator npm'ga yuklanadi.
▪️ Hamma npm dagi kutubxona nomini tashlashi kerak vazfa sifatida
▪️ Dokumentatsiya ham yoziladi kutubxonaga

🔸 3Sum clothes
▪️ Funksiya tuziladi
▪️ Funksiya parametr sifatida nums array'i ni va target sonini qabul qiladi.
▪️ Funksiya nums array'idan target ga eng yaqin bo'lgan sonni topishi va o'sha sonni qaytarishi kerak

🔸 Rock, Paper, Scissors game
▪️ Sahifa tuzish
▪️ Sahifada kirgan odam o'yin o'yanishi mumkin bo'lishi mumkin
▪️ Raqib sifatida biz tuzgan dasturni o'zi random harakat ko'rsatib turadi va natijalar hisoblanadi
▪️ Natijalar Local Storage da saqlanishi kerak
▪️ Sahifada animatsiyalar bo'lishi kerak, qo'l qimirlashiga o'xshash

▪️ Demo: https://www.afiniti.com/corporate/rock-paper-scissors

▫️ Paper: https://www.afiniti.com/static/media/paper.24d69089.png
▫️ Rock: https://www.afiniti.com/static/media/rock.fae7b245.png
▫️ Scissosrs: https://www.afiniti.com/static/media/scissors.0dc12241.png
*/

