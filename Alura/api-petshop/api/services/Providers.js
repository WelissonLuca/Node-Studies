const AppError = require("../errors/customErrors");
const Providers = require("../models/Providers");

module.exports = {
	async findAll() {
		const provider = await Providers.findAll();
		return provider;
	},

	async create(provider) {
		const providerExists = await Providers.findOne({
			where: { email: provider.email },
		});
		if (provider.email !== providerExists)
			throw new AppError(400, "Fornecedor já cadastrado");
		const createProvider = await Providers.create(provider);

		return createProvider;
	},
};
