class Tabelas {
	init(conexao) {
		this.conexao = conexao;

		this.criarAtendimentos();
		this.criarPets();
	}

	criarAtendimentos() {
		const sql =
			"CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL,data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))";
		this.conexao.query(sql, err => {
			if (err) console.error(err);
			else console.log("Tabela atendimento criada com sucesso");
		});
	}

	criarPets() {
		const query = 'CREATE TABLE IF NOT EXISTS PEts (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, imagem varchar(200), PRIMARY KEY (id))';

		this.conexao.query(query, err => {
			if (err) console.error(err);
			else console.log('Tabela pet foi criada com sucesso')
		})
	}
}

module.exports = new Tabelas();
