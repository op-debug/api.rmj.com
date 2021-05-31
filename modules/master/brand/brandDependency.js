const BrandController = require("./controller");
const BrandModel = require("./model");
const BrandRepository = require("./repository");
const BrandService = require("./service");


const brandRepository = new BrandRepository({model: BrandModel});
const brandService = new BrandService({repository: brandRepository});
const brandController = new BrandController({service: brandService});

module.exports = {
  brandController,
  brandService,
  brandRepository
};