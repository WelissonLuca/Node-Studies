const Providers = require("../models/Providers");

module.exports =  {
  
  async findAll(){
    const provider = await Providers.findAll();
    return provider;
 }
}