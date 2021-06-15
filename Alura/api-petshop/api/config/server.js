const express = require("express");
require("express-async-errors");
const connectionDB = require("./connection");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const start = async () => {
	try {
		await connectionDB.authenticate();
		console.log("connection established");
	} catch (err) {
		console.log(err);
	}
};
start();

module.exports = { app };
