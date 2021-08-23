// const hourElement = document.querySelector(".hour")
// const minuteElement = document.querySelector(".minute")
// const secondElement = document.querySelector('.second')
// const amPmElement = document.querySelector(".am-pm")

// let date = new Date()

// let hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
// let minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
// let second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
// let amPm = hour < 12 ? "AM" : "PM"

// hourElement.textContent = hour
// minuteElement.textContent = minute
// secondElement.textContent = second
// amPmElement.textContent = amPm

// setInterval(function() {

// 	date = new Date()

// 	hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
// 	minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
// 	second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
// 	amPm = hour < 12 ? "AM" : "PM"

// 	hourElement.textContent = hour
// 	minuteElement.textContent = minute
// 	secondElement.textContent = second
// 	amPmElement.textContent = amPm
// }, 1000)

/*
	
	🔴 Algorithms

	🔸 Argument sifatida ikki a va b sonlarini qabul qiluvchi funksiya tuzilishi kerak.
	▪️ Agar a soni b sonidan katta bo'lsa a ni b ga bo'lish
	▪️ Aksincha bo'lsa ikkala raqamni ko'paytmasini hisoblash
	▪️ Har ikkala holatda ham natijani qaytarish

	🔸 Argument sifatida sonlardan iborat array qabul qiluvchi funksiya tuziladi
	▪️ Agar arrayning biron elementni songa o'girib bo'lmaydigan type da bo'lsa Xatolik xaqida xabar berilishi kerak va 0 qaytarilishi kerak
	▪️ Aksincha hamma elementlar raqam yoki raqamga o'girilsa, o'girish mumkin bo'lganlari raqamga o'girilib ularning o'rta arifmetigi yaxlitlanib hisoblanishi va qaytarilishi lozim

	🔸 Raqamlarni palindromligi tekshiriluvchi funksiya tuzish
	▪️ Funksiya parametr sifatida bir son qabul qilib oladi, va o'sha sonning teskarisi o'ziga teng tengmasligini topadi
	▪️ Teng bo'lgan holatda bu son pallindrom raqam deyiladi
	▪️ PS:  argumentga -121 soni qabul qilinsa teskarisi 121- bo'ladi va u 121 ga teng emas deb topilishi kerak

	🔸 Ikki argument qabul qiladigan funksiya tuziladi, birinchi argument sifatida sonlardan iborat array(nums), ikkinchi argument sifatida biron son(val).
	▪️ nums arrayidagi har bir val elementi topiladi va shu element o'rniga _ belgisi qo'yilishi kerak va yangi array qaytarilishi lozim

	🔸 Sahifada digital live clock yasaladi. har sekundda ozgarib turishi kerak.
	▪️ Misol: 22:35:15 PM

*/

// First Algorithm
function first(a, b) {
	return a > b ? a / b : a * b
}

// Second Algorithm
function second(numbers) {
	let total = 0;
	let flag = false
	numbers.forEach(function(number) {
		number = Number(number);
		total += number
	})
	return !total ? 0 : total / numbers.length
}

function isPolindrome(number) {
	number = `${number}`
	
	let string = number.split("").reverse().join("")
	
	return number == string
}

function replaceElement(numbers, val) {
	return numbers.map(function(number) {
		number = number === val ? "_" : number
		return number
	})
}

console.log(replaceElement([1, 2, 3,1, 9, 12], 1))