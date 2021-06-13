const moment = require("moment");

const conexao = require("../infra/conexao");
class Atendimento {
	adiciona(atendimento, res) {
		const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
		const data = moment(atendimento.data, "DD/MM/YYYY").format(
			"YYYY-MM-DD HH:MM:SS"
		);
		const dataValida = moment(data).isSameOrAfter(dataCriacao);
		const clienteValido = atendimento.cliente.length >= 5;
		const validacoes = [
			{
				nome: "data",
				valido: dataValida,
				mensagem: "data deve ser maior ou igual a data atual",
			},
			{
				nome: "cliente",
				valido: clienteValido,
				mensagem: "cliente deve ter pelo menos 5 caracteres",
			},
		];

		const erros = validacoes.filter(campo => !campo.valido);
		const existemErros = erros.length;
		if (existemErros) return res.status(400).json(erros);

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
	lista(res) {
		const sql = "SELECT * FROM Atendimentos";
		conexao.query(sql, (erro, resultados) => {
			if (erro) res.status(400).json(erro);
			else res.status(200).json(resultados);
		});
	}
	buscaPorId(id, res) {
		const sql = `SELECT * FROM Atendimentos WHERE id=${id}`;

		conexao.query(sql, (erro, resultados) => {
			const atendimento = resultados[0];
			if (erro) res.status(400).json(erro);
			else res.status(200).json(atendimento);
		});
	}
	altera(id, valores, res) {
		if (valores.data) {
			valores.data = moment(valores.data, "DD/MM/YYYY").format(
				"YYYY-MM-DD HH:MM:SS"
			);
		}
		const sql = "UPDATE Atendimentos SET ? WHERE id=?";

		conexao.query(sql, [valores, id], (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro);
			} else {
				res.status(200).json({ ...valores, id });
			}
		});
	}

	deleta(id, res) {
		const sql = "DELETE FROM Atendimentos WHERE id=?";

		conexao.query(sql, id, (erro, resultados) => {
			if (erro) {
				res.status(400).json(erro);
			} else {
				res.status(200).json({ id });
			}
		});
	}
}

module.exports = new Atendimento();
