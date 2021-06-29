const providersService = require("../services/Providers");

module.exports = {
	async getAll(req, res) {
		const providers = await providersService.findAll();
		return res.status(200).json({
			message: {
				text: "successful search",
				resultContent: providers,
			},
			status: {
				message: "success",
				code: res.statusCode,
			},
		});
	},
	async register(req, res) {
		const provider = req.body;
		const newProvider = await providersService.create(provider);
		return res.status(201).json({
			message: {
				text: "Register successfully",
				resultContent: newProvider,
			},
			status: {
				message: "success",
				code: res.statusCode,
			},
		});
	},
	async getById(req, res) {
		const { id } = req.params;
		const providers = await providersService.findById(id);
		return res.status(200).json({
			message: {
				text: "successful search",
				resultContent: providers,
			},
			status: {
				message: "success",
				code: res.statusCode,
			},
		});
	},
	async update(req, res) {
		const { id } = req.params;
		const provider = req.body;
		const updateprovider = await providersService.update(id, provider);
		return res.status(200).json({
			message: {
				text: "Updated successfully",
				updateContent: updateprovider,
			},
			status: {
				message: "success",
				code: res.statusCode,
			},
		});
	},
	async delete(req, res) {
		const { id } = req.params;
		const deleteProvider = await providersService.delete(id);
		return res.status(204).json({
			message: {
				text: "Deleted successfully",
				deletedContent: deleteProvider,
			},
			status: {
				message: "success",
				code: res.statusCode,
			},
		});
	},
};
