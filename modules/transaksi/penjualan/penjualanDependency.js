const PenjualanController = require("./controller");
const PenjualanModelHeader = require("./model/header_penjualan");
const PenjualanModelDetail = require("./model/detail_penjualan");
const ModelProduk = require("../../master/produk/model");
const PenjualanRepository = require("./repository");
const PenjualanService = require("./service");

const penjualanRepository = new PenjualanRepository({model_detail: PenjualanModelDetail,model_header: PenjualanModelHeader,model_produk: ModelProduk});
const penjualanService = new PenjualanService({repository: penjualanRepository});
const penjualanController = new PenjualanController({service: penjualanService});


module.exports = {
  penjualanController,
  penjualanService,
  penjualanRepository
};