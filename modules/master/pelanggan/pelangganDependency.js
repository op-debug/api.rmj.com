const PelangganController = require("./controller");
const PelangganModel = require("./model");
const PelangganRepository = require("./repository");
const PelangganService = require("./service");


const pelangganRepository = new PelangganRepository({model: PelangganModel});
const pelangganService = new PelangganService({repository: pelangganRepository});
const pelangganController = new PelangganController({service: pelangganService});

module.exports = {
  pelangganController,
  pelangganService,
  pelangganRepository
};