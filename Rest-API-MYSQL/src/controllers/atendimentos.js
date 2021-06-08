const Atendimento = require("../models/atendimentos");

module.exports = {
	show(req, res) {
		res.send("ola");
	},
	create(req, res) {
		const atendimentos = req.body;
		Atendimento.adiciona(atendimentos, res);
	},
};
