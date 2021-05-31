const SatuanController = require("./controller");
const SatuanModel = require("./model");
const SatuanRepository = require("./repository");
const SatuanService = require("./service");


const satuanRepository = new SatuanRepository({model: SatuanModel});
const satuanService = new SatuanService({repository: satuanRepository});
const satuanController = new SatuanController({service: satuanService});

module.exports = {
  satuanController,
  satuanService,
  satuanRepository
};