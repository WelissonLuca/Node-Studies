const moment = require("moment");

const conexao = require("../infra/conexao");
class Atendimento {
	adiciona(atendimento) {
		
		const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
		const data = moment(atendimento.data, 'DD/MM/YYYY').format("YYYY-MM-DD HH:MM:SS");
		const atendimentoDatado = { ...atendimento, dataCriacao, data };
		const sql = "INSERT INTO Atendimentos SET ?";

		conexao.query(sql, atendimentoDatado, (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro);
			} else {
				res.status(201).json(resultados);
			}
		});
	}
}

module.exports = new Atendimento();
