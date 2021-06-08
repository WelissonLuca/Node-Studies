const customExpress = require("./config/customExpress");
const conexao = require("./infra/conexao");
const Tabelas = require("./infra/tabelas")
conexao.connect(err => {
	if (err) console.error(err);
	else {
		console.log("connectado com sucesso");
		Tabelas.init(conexao);
		const app = customExpress();
		app.listen(3000, () => console.log("server listening"));
	}
});
