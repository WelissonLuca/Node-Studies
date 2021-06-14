const express = require('express')
const connectionDB = require('./connection')

const app = express()

const start = async () => {
	try {
		await connectionDB.authenticate();
		console.log("connection established");
    app.use(express.json());
    app.listen(3000, () => console.log("server is running"));

	} catch (err) {
		console.log(err);
	}
};

start();
 
module.exports = { app }
