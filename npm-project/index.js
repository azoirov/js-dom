const db = require("file-based-database-asadbek")

const myDb = new db("fulfil", __dirname)

;(async () => {
	await myDb.createUser("Asadbek", 19)
})()
