const Pet = require("../models/pets");

module.exports = {
	create(req, res) {
		const pet = req.body;

		Pet.adiciona(pet, res);
	},
};
