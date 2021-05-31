const ProdukController = require("./controller");
const ProdukModel = require("./model");
const ProdukRepository = require("./repository");
const ProdukService = require("./service");


const produkRepository = new ProdukRepository({model: ProdukModel});
const produkService = new ProdukService({repository: produkRepository});
const produkController = new ProdukController({service: produkService});

module.exports = {
  produkController,
  produkService,
  produkRepository
};