const providersService = require("../services/Providers");

module.exports = {
	async getAll(req, res) {
		const providers = await providersService.findAll();
		return res.status(200).json(providers);
	},
	async register(req, res) {
		const provider = req.body;
		const newProvider = await providersService.create(provider);
		return res.status(201).json(newProvider);
	},
	async getById(req, res) {
		const { id } = req.params;
		const providers = await providersService.findById(id);
		return res.status(200).json(providers);
	},
	async update(req, res) {
		const { id } = req.params;
		const provider = req.body;
		const Updateprovider = await providersService.update(id, provider);
		return res.status(200).json(Updateprovider);
	},
};
