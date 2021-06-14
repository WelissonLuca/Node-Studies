const providersService = require('../services/Providers')

module.exports = {
  async getAll(req, res) {
    const providers = await providersService.findAll()
    return res.status(200).json(providers)
  }
}