const providersService = require("../services/Providers");


module.exports = {
	async getAll(req, res) {
		const providers = await providersService.findAll();
		return res.status(200).json(providers);
	},
	async register(req, res) {
		const provider = req.body
		const newProvider = await providersService.create(provider);
		return res.status(201).json(newProvider);
	},
};
