const AppError = require("../errors/customErrors");
const Providers = require("../models/Providers");

const EmailExists = async email => {
	const providerExists = await Providers.findOne({ where: { email } });
	if (providerExists) throw new AppError(400, "Fornecedor já cadastrado");
};

const idExists = async (provider, id) => {
	if (!provider)
		throw new AppError(404, `Nenhum fornecedor cadastrado com o id: ${id}`);
};
module.exports = {
	async findAll() {
		const provider = await Providers.findAll();
		return provider;
	},

	async create(data) {
		const email = data.email;
		await EmailExists(email);
		const createProvider = await Providers.create(data);

		return createProvider;
	},

	async findById(id) {
		const provider = await Providers.findByPk(id);
		await idExists(provider, id);
		return provider;
	},
	async update(id, data) {
		const provider = await Providers.findByPk(id);
		await idExists(provider, id);
		const email = data.email;

		await EmailExists(email);

		provider.set(data);
		provider.save();
		return provider;
	},
	async delete(id) {
		const provider = await Providers.findByPk(id);
		await idExists(provider, id);
		provider.destroy();
		return provider;
	},
};
