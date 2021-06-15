const Providers = require("../models/Providers");

module.exports = {
	async findAll() {
		const provider = await Providers.findAll();
		return provider;
	},

	async create(provider) {
		const createProvider = await Providers.create(provider);
		return createProvider;
	},
};
