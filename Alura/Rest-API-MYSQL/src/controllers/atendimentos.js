const Atendimento = require("../models/atendimentos");

module.exports = {
	show(req, res) {
		Atendimento.lista(res);
	},
	findById(req, res) {
		const { id } = req.params;
		Atendimento.buscaPorId(id, res);
	},
	create(req, res) {
		const atendimentos = req.body;
		Atendimento.adiciona(atendimentos, res);
	},

	update(req, res) {
		const id = parseInt(req.params.id);
		const valores = req.body;

		Atendimento.altera(id, valores, res);
	},

	delete(req, res) {
		const id = parseInt(req.params.id);

		Atendimento.deleta(id, res);
	},
};
